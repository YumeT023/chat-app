import {useState} from "react";
import {VscEdit, VscMail} from "react-icons/vsc";
import {FiCircle} from "react-icons/fi";
import {AuthenticatedUser, User, UserStatus as Status} from "@/src/modules/user/types";
import {StringAvatar} from "@/src/ui/avatar";
import {Flex, ModalBox, SelectionBackdrop} from "@/src/ui/box";
import {Checkbox, InputField, MultilineField} from "@/src/ui/form";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Button} from "@/src/ui/button";
import {pick} from "next/dist/lib/pick";
import {Key} from "swr";
import {UpdateProfileType, updateUser} from "@/src/lib/api";
import {useRouter} from "next/navigation";
import {PROFILE} from "@/src/lib/utils/constants";
import useSWRMutation from "swr/mutation";
import nookies from "nookies";
import * as yup from "yup";

type UserProps<P = {}> = {
  user: AuthenticatedUser;
} & P;

type BannerProps = UserProps<{
  onEdit: () => void;
}>;

const Banner = ({user, onEdit}: BannerProps) => {
  const {name, bio = ""} = user;

  return (
    <Flex
      fullSize
      className="xl:w64 flex-col items-center gap-10 border-r border-r-dark-300 bg-dark-100 py-10"
    >
      <div className={`relative h-fit w-fit`}>
        <StringAvatar
          str={name}
          variant="circle"
          className="h-28 w-28 md:h-56 md:w-56"
          innerCls="text-6xl font-mono"
        />
        <SelectionBackdrop
          className="absolute -right-8 bottom-0 h-7 rounded-full bg-selection-400 md:right-0"
          onClick={onEdit}
        >
          <VscEdit className="h-5 w-auto rounded-full text-gray-600" />
        </SelectionBackdrop>
      </div>

      <div className="max-w-sm text-center text-sm font-semibold  text-primary-200">{bio}</div>
      <div className="rounded-full bg-primary-200 p-3 font-semibold text-dark-300 md:text-2xl">
        {name}
      </div>
    </Flex>
  );
};

const statusColor = {
  "0": "bg-accent-300",
  "1": "bg-accent-200",
  "2": "bg-accent-400",
};

const UserStatus = ({status}: Pick<User, "status">) => {
  return (
    <FiCircle
      className={`h-4 w-4 cursor-pointer rounded-full ${statusColor[status]}`}
      title={Status[status]}
    />
  );
};

const UserInfo = ({user}: UserProps) => {
  const {status, email} = user;

  return (
    <div className="h-full w-full p-3">
      <div className="border-b border-b-dark-300 px-1">
        <Flex className="items-center gap-3 py-2">
          <UserStatus status={status} />
          <div className="text-primary-200">{Status[status]}</div>
        </Flex>
      </div>

      <div className="mt-4 max-h-fit text-primary-200">
        <div className="text-xl">Contact information</div>

        <div className="mt-3">
          <Flex className="items-center gap-3 py-3">
            <Flex className="h-8 w-8 rounded-md bg-dark-300" center>
              <VscMail className="text-2xl" />
            </Flex>
            <div className="text-sm">
              <div className="text-primary-200">Email Address</div>
              <div className="text-accent-100">{email}</div>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

const editProfile = yup.object({
  name: yup.string().required(),
  bio: yup.string().optional(),
  currentPassword: yup.string(),
  newPassword: yup.string(),
  confirmPassword: yup.string(),
});

const updateProfileMutation = <T = Key,>(token: string) => {
  return async (key: T, {arg}: {arg: UpdateProfileType}) => await updateUser(token, arg);
};

export const Profile = ({user}: UserProps) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const ring = "focus:ring-gray-600 focus:ring-1";

  const {
    register,
    handleSubmit,
    watch,
    trigger: triggerValidation,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(editProfile),
    defaultValues: {
      ...pick(user, ["name", "bio"]),
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      editPassword: "off",
    },
  });

  const editPassword = watch("editPassword");

  const {isMutating: isLoading, trigger} = useSWRMutation(
    "/user",
    updateProfileMutation(user.token)
  );

  const updateProfile = async (update: any) => {
    const mapped = {
      ...pick(update, ["bio", "name"]),
      password: update.newPassword ?? "",
      oldPassword: update.currentPassword ?? "",
    };
    try {
      const updatedProfile = await trigger(mapped);
      nookies.set(null, "user", JSON.stringify(updatedProfile));
      router.push(PROFILE);
    } catch (e) {
      console.log(e);
    } finally {
      setModalOpen(false);
    }
  };

  return (
    <div className="h-full w-full">
      <form onSubmit={handleSubmit(updateProfile)}>
        <ModalBox
          title="Edit Profile"
          open={modalOpen}
          close={() => setModalOpen(false)}
          action={
            <Button size="sm" className="updateProfileButton" loading={isLoading}>
              Update Profile
            </Button>
          }
        >
          <InputField
            explicitName
            placeholder="Enter new name"
            sizeVariant="md"
            variant="dark"
            labelCls="text-primary-200"
            className="w-1/2"
            disabled={isLoading}
            error={`${errors.name?.message ?? ""}`}
            {...register("name")}
          />

          <MultilineField
            explicitName
            placeholder="Enter new bio"
            labelCls="text-primary-200"
            root="h-full multiline md:w-[90%] w-[95%]"
            className={`h-full w-1/2 resize-none border-dark-300 bg-dark-100 bg-opacity-50 text-primary-200 ${ring}`}
            disabled={isLoading}
            error={`${errors.bio?.message ?? ""}`}
            {...register("bio")}
          />

          <Checkbox value="on" {...register("editPassword")} />

          <div className={editPassword === "on" ? "" : "hidden"}>
            <InputField
              explicitName
              placeholder="Enter current password"
              sizeVariant="md"
              variant="dark"
              type="password"
              labelCls="text-primary-200"
              className="w-1/2"
              disabled={isLoading}
              error={`${errors.currentPassword?.message ?? ""}`}
              {...register("currentPassword")}
            />

            <InputField
              explicitName
              placeholder="Enter new password"
              sizeVariant="md"
              variant="dark"
              type="password"
              labelCls="text-primary-200"
              className="w-1/2"
              disabled={isLoading}
              error={`${errors.newPassword?.message ?? ""}`}
              {...register("newPassword")}
            />

            <InputField
              explicitName
              placeholder="Confirm password"
              sizeVariant="md"
              variant="dark"
              type="password"
              labelCls="text-primary-200"
              className="w-1/2"
              disabled={isLoading}
              error={`${errors.confirmPassword?.message ?? ""}`}
              {...register("confirmPassword")}
            />
          </div>
        </ModalBox>
      </form>

      <div className="flex h-full flex-col md:flex-row">
        <Banner user={user} onEdit={() => setModalOpen(true)} />
        <UserInfo user={user} />
      </div>
    </div>
  );
};
