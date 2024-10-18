"use client";

import AptLogo from "@/components/icon/AptLogo";
import { Divider } from "@/components/ui/Divider";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Header = () => {
  return (
    <header className={cn("sticky top-0 z-40 bg-white")}>
      <div className="mx-6 flex h-24 justify-between md:mx-60 md:h-[72px]">
        <AptLogo />
        <div className="cursor-pointer mb-2 flex items-end space-x-2">
          <Image
            src="/github-icon.svg"
            alt="github"
            width={20}
            height={20}
          />
          <p className="text-[12px] font-medium text-slate-500 md:text-xs">125 stars</p>

        </div>
      </div>

      <Divider className="mt-[-1px]" />
    </header>
  );
};
