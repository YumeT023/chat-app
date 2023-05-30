import Image, {StaticImageData} from "next/image";

export const variantClasses = {
  circle: "rounded-full",
  rounded: "rounded-md",
};

export type AvatarProps = {
  src: string | StaticImageData;
  className?: string;
  variant?: keyof typeof variantClasses;
};

export const Avatar = ({src, variant = "circle", className = ""}: AvatarProps) => {
  return (
    <div className={`h-14 w-14 ${className}`}>
      <Image
        src={src}
        alt="default-avatar"
        className={`object-contain ${variantClasses[variant]}`}
      />
    </div>
  );
};
