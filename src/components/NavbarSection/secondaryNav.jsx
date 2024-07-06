import Link from "next/link"
import SearchInput from "./searchInput"
import { authUserSession } from "@/libs/authLibs"

const SecondaryNav = ({ user }) => {
  const actionLabel = user ? "Sign Out" : "Login"
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin" 
  return (
    <div className="hidden md:flex items-center space-x-4">
      <div className="hidden lg:flex">
      <SearchInput/>
      </div>
      <Link href={actionURL} className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-400">{actionLabel}</Link>
      {
        user ? null :

      <Link href={actionURL} className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-400">Sign Up</Link>
      }
    </div>
  )
}

export default SecondaryNav