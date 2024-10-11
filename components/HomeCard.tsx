"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  return (
    <section
      className={cn(
        "bg-orange-1 px-3 py-5 flex flex-col justify-between w-full xl:max-w-[250px] min-h-[230px] rounded-[16px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-9 rounded-[10px]">
        <Image src={img} alt="meeting" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
