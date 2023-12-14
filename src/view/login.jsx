import React from "react";
import '../view/login.css';

import Header from '../components/header/header';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate()
    function verificLogin(){
        navigate('/home')
    }
    return(
        <div>
            <div id="screen" className="d-flex flex-column">
            <Header></Header>
            <main>
                <div id="container-main" className="row md-container-fluid">
                    <div id="container-img" className="col-md-6 col-12">
                        <img src="/img/front.png" alt="" />
                    </div>
                    <div id="container-text" className="col-md-6 col-lg-12">
                        <div id="container-form">
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                                <img src="/img/erro404Img.png" style={{width: '55px'}} />
                                <h2>NeoFranxx</h2>
                            </div>
                            <div id="container-text-apresention">
                                <h3>Seja Bem vindo Novamente !</h3>
                                <p>Preencha corretamente os campos</p>
                            </div>
                            <div className="container-form my-2">
                                <label for="email">Email:</label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="exemple@email.com" />
                            </div>
                            <div className="container-form my-2">
                                <label for="senha">Senha:</label>
                                <input type="password" name="senha" id="senha" className="form-control" placeholder="senha14523"/>
                            </div>
                            <div id="cadaster-link">
                                <hr/>
                                <p> ainda não tem conta: <a href="/cadaster">Criar</a></p>
                            </div>
                            <button id="loginBtn" onClick={verificLogin}>Logar</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    );
};

export default LoginPage;