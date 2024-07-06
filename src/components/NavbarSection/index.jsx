import ServerNavbar from "@/libs/navbarLibs";
import NavbarSection from "./navbarSection";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg fixed z-50 w-full">
      <ServerNavbar/>
    </nav>
  );
};

export default Navbar;
