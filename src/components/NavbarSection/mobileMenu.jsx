import Link from "next/link"

const MobileMenu = ({ isOpen, user }) => {

    const actionLabel = user ? "Sign Out" : "Login"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className={`mobile-menu md:hidden ${isOpen ? "" : "hidden"} text-slate-200 transition-all ease-in`} id="nav-content">
            <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-blue-500 transition-all ease-in">Home</Link>
            {
                user ? <Link href="/users/dashboard" className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-blue-500 transition-all ease-in">Dashboard</Link>
                : null
            }
            
            <Link href="/season/allSeasons" className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-blue-500 transition-all ease-in">Season</Link>
            <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-blue-500 transition-all ease-in">About</Link>
            <div className="mt-4 flex space-x-4 px-4 pb-5">
                <Link href={actionURL} className="block py-2 px-4 text-sm bg-blue-500 text-white rounded hover:bg-blue-400">{actionLabel}</Link>
                {
                    user ? null :
                        <Link href={actionURL} className="py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-400">Sign Up</Link>
                }
            </div>
        </div>
    )
}

export default MobileMenu