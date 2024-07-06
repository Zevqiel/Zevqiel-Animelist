import { authUserSession } from "@/libs/authLibs";
import Link from "next/link";

const PrimaryNav = ({ user }) => {
    return (
        <div className="hidden md:flex text-base items-center space-x-1 text-slate-200">
            <Link href="#home" className="py-5 px-3 hover:text-blue-500 transition-all">Home</Link>
            {
                user ? 
                <Link href="/users/dashboard" className="py-5 px-3 hover:text-blue-500 transition-all">Dashboard</Link>
                : null
            }
            <Link href="/season/allSeasons" className="py-5 px-3 hover:text-blue-500 transition-all">Season</Link>
            <Link href="/about" className="py-5 px-3 hover:text-blue-500 transition-all">About</Link>
        </div>
    );
};

export default PrimaryNav