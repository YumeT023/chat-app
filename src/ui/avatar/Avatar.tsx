import Image, {StaticImageData} from "next/image";

export type AvatarProps = {
  src: string | StaticImageData;
  className?: string;
};

export const Avatar = ({src, className = ""}: AvatarProps) => {
  return (
    <div className="h-14 w-14">
      <Image
        src={src}
        alt="default-avatar"
        className={`rounded-full object-contain ${className}`}
      />
    </div>
  );
};
