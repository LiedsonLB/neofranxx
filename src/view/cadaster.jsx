import { useState } from 'react';
import '../view/cadaster.css';

import Header from '../components/header/header';
import { useNavigate } from 'react-router-dom';

function CadasterPage() {
    const [acess, setAcess] = useState();
    const [error, setError] = useState();
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    function verification() {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const senha = document.getElementById('senha');
        const confsenha = document.getElementById('confsenha');
        const erro = document.getElementById('erro');
        const modal = document.querySelector('.modal-body');

        modal.classList.remove('popup-sucess');
        modal.classList.add('popup-erro');
        erro.classList.remove('sucess');
        erro.classList.add('erro');

        if(acess === undefined || acess === ''){
            setError("Informe sua posição");
            document.querySelectorAll('.acess').forEach(function (el) {
                el.classList.add('error-input');
                setShowPopup(true)
                modal.classList.add('popup-erro');
            });
            setTimeout(function () {
                document.querySelectorAll('.acess').forEach(function (el) {
                    el.classList.remove('error-input');
                });
                setShowPopup(false)
            }, 3000);
        } 
        else if (name.value === '' || email.value === '' || senha.value === '' || confsenha.value === '') {
            if(name.value === '') {
                name.classList.add('error-input');
                setError("Preencha seu nome de usuário");
                setShowPopup(true)

                setTimeout(function () {
                    name.classList.remove('error-input');
                    setShowPopup(false)
                }, 3000);
            } else if(email.value === '') {
                email.classList.add('error-input');
                setError("Preencha seu email");
                setShowPopup(true)

                setTimeout(function () {
                    email.classList.remove('error-input');
                    setShowPopup(false)
                }, 3000);
            } else if(senha.value === '') {
                senha.classList.add('error-input');
                setError("Preencha sua senha");
                setShowPopup(true)

                setTimeout(function () {
                    senha.classList.remove('error-input');
                    setShowPopup(false)
                }, 3000);
            } else if(confsenha.value === '') {
                confsenha.classList.add('error-input');
                setError("Confirme sua senha");
                setShowPopup(true)

                setTimeout(function () {
                    confsenha.classList.remove('error-input');
                    setError('Preencha corretamente os campos');
                    setShowPopup(false)
                }, 3000);
            }
        } 
        else if (senha.value.length < 8 || confsenha.value.length < 8) {
            senha.classList.add('error-input');
            confsenha.classList.add('error-input');
            setError("A senha deve ter pelo menos 8 caracteres");
            setShowPopup(true)
    
            setTimeout(function () {
                erro.classList.remove('sucess');
                erro.classList.add('erro');
                senha.classList.remove('error-input');
                confsenha.classList.remove('error-input');
                setShowPopup(false)
            }, 4000);
        } 
        else if (senha.value !== confsenha.value) {
            senha.classList.add('error-input');
            confsenha.classList.add('error-input');
            setError("Senhas Diferentes");
            setShowPopup(true)

            setTimeout(function () {
                erro.classList.remove('sucess');
                erro.classList.add('erro');
                senha.classList.remove('error-input');
                confsenha.classList.remove('error-input');
                setShowPopup(false)
            }, 3000);
        } 
        else {
            setShowPopup(true)
            erro.classList.add('sucess');
            setError("Cadastro Enviado");

            email.value = "";
            senha.value = "";
            confsenha.value = "";
            modal.classList.remove('popup-erro');
            modal.classList.add('popup-sucess');

            document.querySelectorAll('.acess').forEach(function (el) {
                el.classList.remove('selected');
            });
            setAcess("");

            // tempo da mensagem e direcionamento de sucesso
            setTimeout(500);
            navigate('/login');
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
        <Header></Header>

        <div id="sentPopup" className={`modal ${showPopup ? 'show' : ''}`} style={{ display: showPopup ? 'block' : 'none', pointerEvents: 'none' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-start modal-lg" style={{ marginLeft: 'auto', marginRight: 0,  width: '300px'}}>
                <div className="modal-content popup">
                    <div className="modal-body d-flex justify-content-between">
                        <p id='erro'>{error}</p>
                        <button type="button" className="btn-close" onClick={() => setShowPopup(false)} style={{color: 'white !important'}}></button>
                    </div>
                </div>
            </div>
        </div>

        <div id='main-cadaster' className="main-cadaster container-fluid py-3">
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
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                                <h2>NeoFranxx</h2>
                            </div>
                            <div id="container-text-apresentation">
                                <h5 style={{ whiteSpace: 'nowrap' }}>Faça seu cadastro na NeoFranXX</h5>
                                <p id='message'>Preencha corretamente os campos</p>
                            </div>
                            <div className="container-form my-2">
                                <label for="name">Nome de usuário:</label>
                                <input type="text" name="name" id="name" className="form-control" placeholder="Jhontan Moe"/>
                            </div>
                            <div className="container-form my-2">
                                <label for="email">Email:</label>
                                <input type="text" name="email" id="email" className="form-control" placeholder="exemple@email.com"/>
                            </div>
                            <div className="col-6 container-form my-2">
                                <label for="senha">Senha:</label>
                                <input type="password" name="senha" id="senha" className="form-control" placeholder="senha14523" minLength={8} />
                            </div>
                            <div className="col-6 container-form my-2">
                                <label for="confsenha">Confirmar Senha:</label>
                                <input type="password" name="confsenha" id="confsenha" className="form-control" placeholder="senha14523" minLength={8} />
                            </div>
                            <button id="loginBtn" className="my-3" onClick={verification}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default CadasterPage;