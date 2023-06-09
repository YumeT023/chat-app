import Image, {StaticImageData} from "next/image";
import {CSSProperties, PropsWithChildren} from "react";

export const variantClasses = {
  circle: "rounded-full",
  rounded: "rounded-md",
};

export type AvatarProps = PropsWithChildren<{
  src?: string | StaticImageData;
  className?: string;
  variant?: keyof typeof variantClasses;
  style?: CSSProperties;
}>;

type AvatarImageProps = {
  src: string | StaticImageData;
  variant: AvatarProps["variant"];
};

const AvatarImage = ({src = "", variant = "circle"}: AvatarImageProps) => (
  <Image src={src} alt="default-avatar" className={`object-contain ${variantClasses[variant]}`} />
);

export const Avatar = ({
  children,
  style = {},
  src = "",
  variant = "circle",
  className = "",
}: AvatarProps) => {
  return (
    <div className={`h-14 w-14 ${className}`} style={style}>
      {children ? children : <AvatarImage src={src} variant={variant} />}
    </div>
  );
};
