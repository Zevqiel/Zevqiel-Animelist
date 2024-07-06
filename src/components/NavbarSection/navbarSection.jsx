"use client";
import { useState } from "react";
import PrimaryNav from "./primaryNav";
import SecondaryNav from "./secondaryNav";
import DropdownButton from "./dropdownButton";
import MobileMenu from "./mobileMenu";
import LogoButton from "./logoButton";
import SearchButton from "./searchButton";
import SearchInput from "./searchInput";

const NavbarSection = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  const search = () => {
    setIsOpenSearch(!isOpenSearch)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
  <div className="mx-auto px-2 md:px-10">
    <div className="relative flex justify-between">
      <div className={`absolute top-5 w-full ${isOpenSearch ? "" : "hidden"} sm:hidden`}>

        <SearchInput search={search} />
      </div>
      <div className="flex space-x-6 text-xl">
        <LogoButton />
        <PrimaryNav user={user} />
      </div>


      <div className="text-slate-200 items-center flex sm:hidden lg:hidden md:flex">
        <SearchButton search={search} />
      </div>
      {/* <!-- secondary nav --> */}
      <SecondaryNav user={user} />

      {/* <!-- mobile button goes here --> */}
      <DropdownButton toggleMenu={toggleMenu} />
    </div>
  </div>

  {/* <!-- mobile menu --> */}
  <MobileMenu isOpen={isOpen} user={user} />

</>
  );
};

export default NavbarSection;
