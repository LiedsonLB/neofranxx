import React from 'react'
import { useLocation } from 'react-router-dom';

import '../member/member.css'

const Member = (props) => {
    const { state } = useLocation();
    const user = state ? state.user : null;

    if (!user) {
        return <div>Nenhum usuário encontrado</div>;
    }

  return (
    <main id="main-members">
        <div id="main-container-members">
            <h3 id="tittle-members"><i class="bi bi-people-fill"></i> Membros</h3>
            <div id="user">
                <section class="user-profile">
                    <img src={user.picture} alt="imagem de perfil"/>
                    <h3 id="user-name">{user.name}</h3>
                    <h5 id="user-email">{user.email}</h5>

                    <h5 id="user-cargo">{user.email}</h5>
                    <div id="social-midia">
                        <a href={'mailto:' + user.email} class="cwhite"><i class="bi bi-envelope-fill"></i> {user.email}</a>
                        <a href={user.cell} class="cblack"><i class="bi bi-telephone-fill"></i> {user.cell}</a>
                        <a href={user.email} class="cblue"><i class="bi bi-linkedin"></i> Linkedin</a>
                    </div>
                </section>
                <section class="infos">
                    <p>Nome Completo: <span>Francisco Liédson Bonfim Barros</span></p>
                    <p>Idade: <span>{user.age} anos</span></p>
                    <p>Endereço: <span>Maceió, Maranhão</span></p>
                    <p>Nacionalidade: <span>Brasileiro</span></p>
                    <p>Sexo: <span>Masculino</span></p>
                    <p>Data de Contratação: <span>23/11/2023</span></p>
                    <p>Estado Civil: <span>Soteiro até morrer</span></p>
                    <p>Status: <span class="user-status active">Ativo</span></p>
                    <p>Loja: <span>Filial Piauí</span></p>
                    <br/>
                </section>
            </div>
        </div>
    </main>
  )
}

export default Member