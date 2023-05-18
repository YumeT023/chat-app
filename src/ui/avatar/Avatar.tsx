import Image, {StaticImageData} from "next/image";

export type AvatarProps = {
  src: string | StaticImageData;
  className?: string;
  rounded?: boolean;
};

export const Avatar = ({src, rounded, className = ""}: AvatarProps) => {
  const shape = rounded ? "rounded-full" : ";";
  return (
    <div className={`h-14 w-14 ${shape} ${className}`}>
      <Image
        src={src}
        alt="default-avatar"
        className={`object-contain ${rounded ? "rounded-full" : ""}`}
      />
    </div>
  );
};
