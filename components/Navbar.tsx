import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-5 py-3 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo@f.png"
          width={50}
          height={50}
          alt="Fluentix log"
          className="max-sm:size-10"
        />
        <p className="text-[23px] font-extrabold text-white max-sm:hidden">
          Fluentix
        </p>
      </Link>
      <div className="flex-between gap-5">
        {/* Clerk user management */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
