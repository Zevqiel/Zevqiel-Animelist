import NavbarSection from "@/components/NavbarSection/navbarSection";
import { authUserSession } from "./authLibs";

const ServerNavbar = async() => {
    const user = await authUserSession()
    return <NavbarSection user={user}/>
}

export default ServerNavbar