import React, { useState } from 'react';
import '../view/cadaster.css';
import Header from '../components/header/header';
import { useNavigate } from 'react-router-dom';

function CadasterPage() {
    const [acess, setAcess] = useState('');
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confsenha, setConfsenha] = useState('');

    const navigate = useNavigate();

    async function cadasterUser() {
        try {
            const response = await fetch('http://localhost:4000/auth/cadaster', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: name,
                    email: email,
                    password: senha,
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setShowPopup(true);
                setError('Cadastro Enviado');
    
                setName('');
                setEmail('');
                setSenha('');
                setConfsenha('');
    
                setTimeout(() => {
                    setShowPopup(false);
                    navigate('/login');
                }, 500);
            } else {
                setShowPopup(true);
                setError(`Erro no servidor: ${data.erro}`);
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    }    

    function verification() {
        const modal = document.querySelector('.modal-body');
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const senhaInput = document.getElementById('senhaInput');
        const confsenhaInput = document.getElementById('confsenhaInput');

        if (acess === undefined || acess === '') {
            setError("Informe sua posição");
            document.querySelectorAll('.acess').forEach(function (el) {
                el.classList.add('error-input');
                setShowPopup(true);
                modal.classList.add('popup-erro');
            });
            setTimeout(function () {
                document.querySelectorAll('.acess').forEach(function (el) {
                    el.classList.remove('error-input');
                });
                setShowPopup(false);
            }, 3000);
        } else if (name === '' || email === '' || senha === '' || confsenha === '') {
            if (name === '') {
                nameInput.classList.add('error-input');
                setError("Preencha seu nome de usuário");
                setShowPopup(true)

                setTimeout(function () {
                    nameInput.classList.remove('error-input');
                    setShowPopup(false)
                }, 3000);
            } else if (email === '') {
                emailInput.classList.add('error-input');
                setError("Preencha seu email");
                setShowPopup(true)

                setTimeout(function () {
                    emailInput.classList.remove('error-input');
                    setShowPopup(false)
                }, 3000);
            } else if (senha === '') {
                senhaInput.classList.add('error-input');
                setError("Preencha sua senha");
                setShowPopup(true)

                setTimeout(function () {
                    senhaInput.classList.remove('error-input');
                    setShowPopup(false)
                }, 3000);
            } else if (confsenha === '') {
                confsenhaInput.classList.add('error-input');
                setError("Confirme sua senha");
                setShowPopup(true)

                setTimeout(function () {
                    confsenhaInput.classList.remove('error-input');
                    setError('Preencha corretamente os campos');
                    setShowPopup(false)
                }, 3000);
            }
        } else if (senha.length < 8 || confsenha.length < 8) {
            senhaInput.classList.add('error-input');
            confsenhaInput.classList.add('error-input');
            setError("A senha deve ter pelo menos 8 caracteres");
            setShowPopup(true)
    
            setTimeout(function () {
                setError('');
                senhaInput.classList.remove('error-input');
                confsenhaInput.classList.remove('error-input');
                setShowPopup(false)
            }, 4000);
        } else if (senha !== confsenha) {
            senhaInput.classList.add('error-input');
            confsenhaInput.classList.add('error-input');
            setError("Senhas Diferentes");
            setShowPopup(true)

            setTimeout(function () {
                setError('');
                senhaInput.classList.remove('error-input');
                confsenhaInput.classList.remove('error-input');
                setShowPopup(false)
            }, 3000);
        } else {
            setShowPopup(true)
            setError("Cadastro Enviado");

            modal.classList.remove('popup-erro');
            modal.classList.add('popup-sucess');

            document.querySelectorAll('.acess').forEach(function (el) {
                el.classList.remove('selected');
            });

            cadasterUser();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        verification();
    }

    function selectPosition(event, name) {
        document.querySelectorAll('.acess').forEach(function (el) {
            el.classList.remove('selected');
        });

        event.currentTarget.classList.add('selected');
    
        setAcess(name);
    }

    return (
        <div>
            <div id="screen" className="d-flex flex-column">
                <Header></Header>
                <div id="sentPopup" className={`modal ${showPopup ? 'show' : ''}`} style={{ display: showPopup ? 'block' : 'none', pointerEvents: 'none' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-start modal-lg" style={{ marginLeft: 'auto', marginRight: 0, width: '300px' }}>
                        <div className="modal-content popup">
                            <div className="modal-body d-flex justify-content-between">
                                <p id='erro'>{error}</p>
                                <button type="button" className="btn-close" onClick={() => setShowPopup(false)} style={{ color: 'white !important' }}></button>
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
                                    <button className={`acess ${acess === 'Admin' ? 'selected' : ''}`} onClick={(e) => selectPosition(e, 'Admin')}>
                                        <p>Admin</p>
                                        <p><i className="bi bi-shield-fill fs-1"></i></p>
                                    </button>
                                    <button className={`acess ${acess === 'Gerente' ? 'selected' : ''}`} onClick={(e) => selectPosition(e, 'Gerente')}>
                                        <p>Gerente</p>
                                        <p><i className="bi bi-person-circle fs-1"></i></p>
                                    </button>
                                    <button className={`acess ${acess === 'Funcionário' ? 'selected' : ''}`} onClick={(e) => selectPosition(e, 'Funcionário')}>
                                        <p>Funcionário</p>
                                        <p><i className="bi bi-person-fill fs-1"></i></p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="container-cadaster-text">
                                <form className="container-form" onSubmit={handleSubmit} id="container-form">
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                        <h2>NeoFranxx</h2>
                                    </div>
                                    <div id="container-text-apresentation">
                                        <h5 style={{ whiteSpace: 'nowrap' }}>Faça seu cadastro na NeoFranXX</h5>
                                        <p id='message'>Preencha corretamente os campos</p>
                                    </div>
                                    <div className="container-form my-2">
                                        <label htmlFor="name">Nome de usuário:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="nameInput"
                                            className={`form-control ${error && !name ? 'error-input' : ''}`}
                                            placeholder="Jhontan Moe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="container-form my-2">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="emailInput"
                                            className={`form-control ${error && !email ? 'error-input' : ''}`}
                                            placeholder="example@email.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-6 container-form my-2">
                                        <label htmlFor="senha">Senha:</label>
                                        <input
                                            type="password"
                                            name="senha"
                                            id="senhaInput"
                                            className={`form-control ${error && !senha ? 'error-input' : ''}`}
                                            placeholder="senha14523"
                                            minLength={8}
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-6 container-form my-2">
                                        <label htmlFor="confsenha">Confirmar Senha:</label>
                                        <input
                                            type="password"
                                            name="confsenha"
                                            id="confsenhaInput"
                                            className={`form-control ${error && !confsenha ? 'error-input' : ''}`}
                                            placeholder="senha14523"
                                            minLength={8}
                                            value={confsenha}
                                            onChange={(e) => setConfsenha(e.target.value)}
                                        />
                                    </div>
                                    <button id="loginBtn" className="my-3" type='submit'>Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CadasterPage;