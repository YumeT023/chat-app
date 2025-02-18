import {Avatar, AvatarProps, variantClasses} from "@/src/ui/avatar/Avatar";
import {getStringInitials, stringToColor} from "@/src/lib/utils";

export type StringAvatarProps = {
  str: string;
  innerCls?: string;
} & Pick<AvatarProps, "variant" | "className">;

export const StringAvatar = ({
  str,
  variant = "rounded",
  className = "",
  innerCls = "",
}: StringAvatarProps) => {
  const sx = {
    backgroundColor: stringToColor(str),
  };

  return (
    <Avatar
      className={`flex items-center justify-center ${variantClasses[variant]} ${className}`}
      style={sx}
    >
      <span className={`rounded-md text-2xl font-bold text-primary-200 ${innerCls}`}>
        {getStringInitials(str)}
      </span>
    </Avatar>
  );
};
