import Link from "next/link";

const LogoButton = () => {
    return (
        <div>
            <Link
                href="/"
                className="flex items-center py-5 text-gray-700 hover:text-gray-900 font-bold animate__animated animate__fadeInDown"
            >
                <span className="text-blue-500">Zevqiel</span>
                <span className="text-slate-200">Animelist</span>
            </Link>
        </div>
    );
};

export default LogoButton;
