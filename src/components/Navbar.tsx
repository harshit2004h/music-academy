"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { div } from "framer-motion/client";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-1 inset-x-0 w-auto z-50 mx-20", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"} className="text-white hover:opacity-[0.8]">Home</Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Song Writing</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/hobby">Individual</HoveredLink>
            <HoveredLink href="/hobby">Team</HoveredLink>
            <HoveredLink href="/hobby">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"} className="text-white hover:opacity-[0.8]">Contact Us</Link>
        <Link href={"/about"} className="text-white hover:opacity-[0.8]">About Us</Link>
      </Menu>
    </div>
  );
}

export default Navbar;
