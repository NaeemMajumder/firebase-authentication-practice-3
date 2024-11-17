import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavBar from "../components/layoutComponent/LeftNavBar";
import RightNavBar from "../components/layoutComponent/RightNavBar";
import Nav from "../components/Nav";

export default function HomeLayout(){
    return(
        <>
            <header className="max-w-[1350px] m-auto">
                <Header />
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="max-w-[1350px] m-auto"><Nav/></nav>
            <main className="max-w-[1350px] m-auto grid md:grid-cols-12 gap-4">
                <aside className="left col-span-3"><LeftNavBar></LeftNavBar></aside>
                <section className="col-span-6"><Outlet></Outlet></section>
                <aside className="col-span-3"><RightNavBar /></aside>
            </main>
        </>
    );
}