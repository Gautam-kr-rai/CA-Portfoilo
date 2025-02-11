"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

      <Link href={"/"}>
      Home
      {/* <MenuItem setActive={setActive} active = {active} item="Home">  */}
      {/* </MenuItem>  */}
      </Link>

      <Link href={"/About"}>
      <MenuItem setActive={setActive} active = {active} item="About Us">
      <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/About">About me</HoveredLink>
            <HoveredLink href="/Industries">Industries we serve</HoveredLink>
      </div>
      </MenuItem>
      </Link>

      <Link href={"/our-service"}>
      {/* <MenuItem setActive={setActive} active = {active} item="Services"> 
      </MenuItem>  */}
       Service
      </Link>

    <Link href={"/contact-us"}>
      {/* <MenuItem setActive={setActive} active = {active} item="Contact Us"> 
      </MenuItem>  */}
      Contact-us
      </Link>

      </Menu>
    </div>
  );
}

export default Navbar;