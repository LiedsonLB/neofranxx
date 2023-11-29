import { useState } from 'react';
import '../view/cadaster.css';

function Cadaster() {
    var [acess, setAcess] = useState();
    var [error = "Preencha corretamente os campos", setError] = useState();

    function verification() {
        const email = document.getElementById('email');
        const senha = document.getElementById('senha');
        const confsenha = document.getElementById('confsenha');
        const erro = document.getElementById('erro');

        erro.classList.remove('sucess');
        erro.classList.add('erro');

        if(acess === undefined){
            setError("Informe sua posição");
        } 
        else if (email.value === '' || senha.value === '' || confsenha.value === '') {
            if(email.value === '') {
                email.classList.add('error-input');
                setError("Preencha seu email");

                setTimeout(function () {
                    email.classList.remove('error-input');
                    setError('Preencha corretamente os campos');
                }, 2000);
            } else if(senha.value === '') {
                senha.classList.add('error-input');
                setError("Preencha sua senha");

                setTimeout(function () {
                    senha.classList.remove('error-input');
                    setError('Preencha corretamente os campos');
                }, 2000);
            } else if(confsenha.value === '') {
                confsenha.classList.add('error-input');
                setError("Confirme sua senha");

                setTimeout(function () {
                    confsenha.classList.remove('error-input');
                    setError('Preencha corretamente os campos');
                }, 2000);
            }
        } 
        else if (senha.value !== confsenha.value) {
            senha.classList.add('error-input');
            confsenha.classList.add('error-input');
            setError("Senhas Diferentes");

            setTimeout(function () {
                erro.classList.remove('sucess');
                erro.classList.add('erro');
                senha.classList.remove('error-input');
                confsenha.classList.remove('error-input');
                setError('Preencha corretamente os campos');
            }, 2000);
        } 
        else {
            erro.classList.add('sucess');
            setError("Cadastro Enviado");
            email.value = "";
            senha.value = "";
            confsenha.value = "";

            document.querySelectorAll('.acess').forEach(function (el) {
                el.classList.remove('selected');
            });
            setAcess("");
        }
    }

    function selectPosition(event, name) {
        document.querySelectorAll('.acess').forEach(function (el) {
            el.classList.remove('selected');
        });

        event.currentTarget.classList.add('selected');
    
        setAcess(name);
    }

    return(
        <div>
        <div id="screen" className="d-flex flex-column">
        <header className="px-5 text-start">
            <h2 className="py-1">NeoFranxx</h2>
        </header>
        <main className="main-cadaster container-fluid py-4">
            <div className="row container-fluid">
                <div className="col-md-6" id="infoPosition">
                    <div id="container-type-acess">
                        <h2>Informe sua posição:</h2>
                        <h6 id="selected-position">Posição selecionada: <strong><span id="position-text">{acess}</span></strong></h6>
                        <div className="row justify-content-md-center d-flex" id="option-acess">
                            <button className="acess" onClick={(e) => selectPosition(e, 'Admin')}>
                                <p>Admin</p>
                                <p><i className="bi bi-shield-fill fs-1"></i></p>
                            </button>
                            <button className="acess" onClick={(e) => selectPosition(e, 'Gerente')}>
                                <p>Gerente</p>
                                <p><i className="bi bi-person-circle fs-1"></i></p>
                            </button>
                            <button className="acess" onClick={(e) => selectPosition(e, 'Funcionário')}>
                                <p>Funcionário</p>
                                <p><i className="bi bi-person-fill fs-1"></i></p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div id="container-cadaster-text">
                        <div className="container-form" id="container-form">
                            <h2>NeoFranxx</h2>
                            <div id="container-text-apresentation">
                                <h3>Faça seu cadastro na NeoFranXX</h3>
                                <p id='erro'>{error}</p>
                            </div>
                            <div className="container-form my-2">
                                <label for="email">Email:</label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="exemple@email.com"/>
                            </div>
                            <div className="container-form my-2">
                                <label for="senha">Senha:</label>
                                <input type="password" name="senha" id="senha" className="form-control" placeholder="senha14523"/>
                            </div>
                            <div className="container-form my-2">
                                <label for="confsenha">Confirmar Senha:</label>
                                <input type="password" name="confsenha" id="confsenha" className="form-control" placeholder="senha14523"/>
                            </div>
                            <button id="loginBtn" className="my-3" onClick={verification}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </div>
    );
};

export default Cadaster;