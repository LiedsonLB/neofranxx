import Aside from "../components/aside/aside";
import '../view/home.css'
import { Outlet } from "react-router-dom";

import NeoFranxxNews from "../Layout/neoFranxxNews/neoFranxxNews";

function HomePage() {
    const profile = {
        name: "Liedson Barros",
        email: "liedson.b9@gmail.com",
        profileImg: "/img/ZeroTwoPerfil.jfif"
    }

    return(
        <div>
            <div id="screen" class="d-flex flex-column">
                <header class="px-3 d-flex g-2">
                    <button id="menu" class="border-0 bg-transparent mx-3"><i class="bi bi-list"></i></button>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                        <img class="py-1" src="/img/erro404Img.png" style={{width: '50px'}} />
                        <h2 class="py-1">NeoFranxx</h2>
                    </div>
                </header>
                <div id="home">
                    <Aside {...profile}></Aside>
                    <div id="main-home">
                        <Outlet/>
                        <NeoFranxxNews/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;