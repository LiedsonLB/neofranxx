import React, { useState } from "react";

import Aside from "../components/aside/aside";
import '../view/home.css'

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
                    <h2 class="py-1">NeoFranxx</h2>
                </header>
                <div id="home">
                    <Aside {...profile}></Aside>
                    <div id="main-home">
                        {/* Recebe o conteúdo da tela */}
                        <div style={{height: '150vh'}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;