import Image from "next/image";
import { SVGProps } from "react";

interface SidebarRowProps {
  src?: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

const SidebarRow: React.FC<SidebarRowProps> = ({ src, Icon, title }) => {
  return (
    <div
      className="flex items-center space-x-2 p-4 hover:bg-gray-200
      rounded-xl cursor-pointer"
    >
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
          alt="avatar"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
