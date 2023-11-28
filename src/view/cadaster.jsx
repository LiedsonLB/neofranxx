import '../view/cadaster.css';

function cadaster() {
    
    return(
        <div>
        <div id="screen" class="d-flex flex-column">
        <header class="px-5">
            <h2 class="py-1">NeoFranxx</h2>
        </header>
        <main class="main-cadaster container-fluid py-4">
            <div class="row container-fluid">
                <div class="col-md-6" id="infoPosition">
                    <div id="container-type-acess">
                        <h2>Informe sua posição:</h2>
                        <h6 id="selected-position">Posição selecionada: <strong><span id="position-text"></span></strong></h6>
                        <div class="row justify-content-md-center d-flex" id="option-acess">
                            <button class="acess" onclick="selectPosition(this, 'Admin')">
                                <p>Admin</p>
                                <p><i class="bi bi-shield-fill fs-1"></i></p>
                            </button>
                            <button class="acess" onclick="selectPosition(this, 'Gerente')">
                                <p>Gerente</p>
                                <p><i class="bi bi-person-circle fs-1"></i></p>
                            </button>
                            <button class="acess" onclick="selectPosition(this, 'Funcionário')">
                                <p>Funcionário</p>
                                <p><i class="bi bi-person-fill fs-1"></i></p>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="container-cadaster-text">
                        <div class="container-form" id="container-form">
                            <h2>NeoFranxx</h2>
                            <div id="container-text-apresentation">
                                <h3>Faça seu cadastro na NeoFranXX</h3>
                                <p>Preencha corretamente os campos</p>
                            </div>
                            <div class="container-form my-2">
                                <label for="email">Email:</label>
                                <input type="text" name="email" id="email" class="form-control" placeholder="exemple@email.com"/>
                            </div>
                            <div class="container-form my-2">
                                <label for="senha">Senha:</label>
                                <input type="password" name="senha" id="senha" class="form-control" placeholder="senha14523"/>
                            </div>
                            <div class="container-form my-2">
                                <label for="confsenha">Confirmar Senha:</label>
                                <input type="password" name="confsenha" id="confsenha" class="form-control" placeholder="senha14523"/>
                            </div>
                            <button id="loginBtn" class="my-3">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <br/>
    </div>
    </div>
    );
};

export default cadaster;