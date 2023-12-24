import Aside from "../components/aside/aside";
import '../view/home.css'
import { useState } from "react";

import Member from "../Layout/member/member";
import { Route } from 'react-router-dom';

import Members from '../Layout/members/members';
import Stores from '../Layout/stores/stores';
import Finacial from '../Layout/finacial/finacial';
import Products from '../Layout/products/products';
import Agenda from '../Layout/agenda/agenda';
import NeoFranxxNews from "../Layout/neoFranxxNews/neoFranxxNews";

function HomePage() {
    const [currentComponent, setCurrentComponent] = useState('NeoFranxxNews');

    const profile = {
        name: "Liedson Barros",
        email: "liedson.b9@gmail.com",
        profileImg: "/img/ZeroTwoPerfil.jfif"
    }

    const changeComponent = (componentName) => {
        setCurrentComponent(componentName);
    };

    const renderComponent = () => {
        switch (currentComponent) {
        case 'NeoFranxxNews':
            return <NeoFranxxNews />;
        case 'members':
            return <Members />;
        case 'stores':
            return <Stores />;
        case 'finacial':
            return <Finacial />;
        case 'products':
            return <Products />;
        case 'agenda':
            return <Agenda />;
        default:
            return <NeoFranxxNews />;
        }
    };

    return(
        <div>
            <div id="screen" class="d-flex flex-column">
                <header class="px-3 d-flex g-2">
                    <button id="menu" class="border-0 bg-transparent mx-3"><i class="bi bi-list"></i></button>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                        <img class="py-1" src="/img/erro404Img.png" alt="imagem de erro da página" style={{width: '50px'}} />
                        <h2 class="py-1">NeoFranxx</h2>
                    </div>
                </header>
                <div id="home">
                <Aside profile={profile} changeComponent={(component) => setCurrentComponent(component)} />

                    <div id="main-home">
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;