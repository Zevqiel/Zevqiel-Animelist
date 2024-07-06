import Link from "next/link"

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <h1 className="text-6xl font-bold text-slate-200">404</h1>
            <p className="mt-4 text-xl text-slate-300">Page Not Found</p>
            <Link href="/">
                <p className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ease-in transition-colors">
                    Go to Home
                </p>
            </Link>
        </div>
    )
}

export default Page