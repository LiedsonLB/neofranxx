import React from 'react'

import '../member/member.css'

const Member = () => {
    const user = {
        img: "/img/ZeroTwoPerfil.jfif",
        name: "Liedson Barros",
        cargo: "FullStack Developer",
        email: "liedson.b9@gmail.com",
        linkEmail: "mailto:liedson.b9@gmail.com",
        linkedin: "https://www.linkedin.com/in/liedsonlb/",
        github: "https://github.com/LiedsonLB"
    }
  return (
    <main id="main-members">
        <div id="main-container-members">
            <h3 id="tittle-members"><i class="bi bi-people-fill"></i> Membros</h3>
            <div id="user">
                <section class="user-profile">
                    <img src={user.img} alt="imagem de perfil"/>
                    <h3 id="user-name">{user.name}</h3>
                    <h5 id="user-email">{user.email}</h5>

                    <h5 id="user-cargo">{user.cargo}</h5>
                    <div id="social-midia">
                        <a href={user.linkEmail} class="cwhite"><i class="bi bi-envelope-fill"></i> Email</a>
                        <a href={user.linkedin} class="cblue"><i class="bi bi-linkedin"></i> Linkedin</a>
                        <a href={user.github} class="cblack"><i class="bi bi-github"></i> GitHub</a>
                    </div>
                </section>
                <section class="infos">
                    <p>Nome Completo: <span>Francisco Liédson Bonfim Barros</span></p>
                    <p>Idade: <span>20 anos</span></p>
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