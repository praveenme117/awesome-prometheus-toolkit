"use client";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="sticky bottom-0 bg-white">
      <div className="h-px bg-slate-100" />

      <div className="mx-6 flex h-14 items-center justify-between md:mx-60">
        <div className="flex space-x-2 md:space-x-4">
          <p
            className="cursor-pointer select-none text-[10px] font-medium text-slate-400 md:text-xs"
          >
            Contribute on GitHub
          </p>
        </div>

        <div className="cursor-pointer flex items-center space-x-2">
          <p className="text-[10px] font-medium text-slate-400 md:text-xs">Maintained by Last9</p>

          <Image
            alt="icon"
            className="h-auto w-4 md:w-5"
            priority
            src="/last9-logo.svg"
            width={0}
            height={0}
          />
        </div>
      </div>
    </footer>
  );
};
