import Hero from "@/components/CarouselHeroSection/hero";
import Footer from "@/components/Footer";
import { authUserSession } from "@/libs/authLibs";
import Image from "next/image";
import Link from "next/link";

const Page = async() => {
    const user = await authUserSession()
    return(
        <>
            <Hero/>
            <section className="bg-gray-900">
                <div className="flex justify-center items-center pt-10">
                    <Image src={user.image} width={250} height={250}/>
                </div>
                <div className="flex justify-center items-center p-2 text-slate-200 text-xl">
                    <h1>Welcome, {user.name}</h1>
                </div>
                <div className="flex justify-center items-center text-slate-200 p-6 space-x-4">
                    <Link href={`/users/dashboard/collection`} className="hover:text-blue-500 underline transition-all ease-in">My Collection</Link>
                    <Link href={`/users/dashboard/comment`} className="hover:text-blue-500 underline transition-all ease-in">My Comment</Link>
                    <Link href={`/`} className="hover:text-blue-500 underline transition-all ease-in">My Favorite</Link>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Page 