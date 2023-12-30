import React, { useEffect, useState } from 'react'

import '../neoFranxxNews/neoFranxxNews.css'

const NeoFranxxNews = () => {
    const [moedas, setMoedas] = useState(null);

    useEffect(() => {
        const apiUrl = 'https://v6.exchangerate-api.com/v6/26571734dacb7c59752a567e/latest/BRL';

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const moedasArray = [];
            for (const currency in data.conversion_rates) {
                const rate = parseFloat(data.conversion_rates[currency])
                .toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                });
                moedasArray.push({ currency, rate });
            }
            setMoedas(moedasArray);
        })
        .catch(error => console.error('Erro na solicitação:', error));
    }, []);

    useEffect(() => {
        // ... Seu segundo useEffect com o código do carrossel
        const carousel = document.querySelector('.carousel');
        const carousel1 = document.querySelector('.carousel-outher');
        const carousel2 = document.querySelector('.carousel-outher-2');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');
    
        let currentIndex = 0;
    
        leftArrow.addEventListener('click', function () {
          if (currentIndex > 0) {
            currentIndex--;
          } else {
            currentIndex = carousel.children.length - 1;
          }
          updateCarousel();
        });
    
        rightArrow.addEventListener('click', function () {
          if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
          } else {
            currentIndex = 0;
          }
          updateCarousel();
        });
    
        function updateCarousel() {
          const translateValue = -currentIndex * 100 + '%';
          const translateValue1 = (-currentIndex + 1) * 100 + '%';
          const translateValue2 = (-currentIndex - 1) * 100 + '%';
          carousel.style.transform = 'translateX(' + translateValue + ')';
          carousel1.style.transform = 'translateX(' + translateValue1 + ')';
          carousel2.style.transform = 'translateX(' + translateValue2 + ')';
        }
      }, []);

    function showAccessContainer(containerId) {
        // Oculta todos os containers de acesso
        document.querySelectorAll('.container-acess').forEach(function (container) {
            container.style.display = 'none';
            container.classList.remove('show');
        });

        // Exibe o container correspondente ao cartão clicado
        const clickedContainer = document.getElementById(containerId);
        if (clickedContainer) {
            clickedContainer.style.display = 'block';
            clickedContainer.classList.add('show');
        }
    }

    function toggleSkill(skillNumber) {
        var skillInfo = document.getElementById(`skill-${skillNumber}-info`);
        var caretIcon = document.getElementById(`icon-${skillNumber}`);
    
        if (skillInfo && skillInfo.style) {
            if (skillInfo.style.display === "block") {
                skillInfo.style.display = "none";
                caretIcon.classList.remove("bi-caret-up-fill");
                caretIcon.classList.add("bi-caret-down-fill");
            } else {
                skillInfo.style.display = "block";
                caretIcon.classList.remove("bi-caret-down-fill");
                caretIcon.classList.add("bi-caret-up-fill");
            }
        }
    }

  return (
    <div>
        <main id="main-news">
        <div id="main-news-container">
            <h3 id='title-news'><i class="bi bi-newspaper"></i> <span>NeoxFranxx </span>News</h3>
            
            <h4>Destaques</h4>
            <section id="destaques">   
                <div className="major-news">
                    <a href="\majornews">
                        <div className="major-img">
                            <img src="/img/vista-frontal-do-corte-da-fita-vermelha-na-inauguracao-do-edificio_8353-10570.avif" alt="img-person"/>
                        </div>
                        <div className="major-text">
                            <strong>Nova filial em Maceió está preste a ser inaugurada</strong>
                        </div>
                    </a>
                </div>

                <div className="outhers-news">
                    <a href="\news1">
                        <div className="secundary-news">
                            <div className="container-secundary-img-2"></div>
                            <div className="container-secundary-text">
                                <p>Lançamento de Novo Produto: NeoLap Introduz Inovação Revolucionária no Mercado</p>
                            </div>
                        </div>
                    </a>
                    <a href="\news2">
                        <div className="secundary-news">
                            <div className="container-secundary-img-1"></div>
                            <div className="container-secundary-text">
                                <p>Parceria Estratégica NeoFranxx e Ilusion unem forças  para Impulsionar Inovação</p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
            <div id="container-more-btn">
                <button id="more-news">Ver mais notícias</button>
            </div>

            <h4><i className="bi bi-cash-coin"></i> Api de Cotações</h4>
            <section id="cotacoes-cards">
                {moedas && moedas.map((currency, index) => (
                    <div key={index} className="card-coin">
                        <div className="coin">
                            <p><strong>{currency.currency}</strong></p>
                        </div>
                        <p>{currency.rate}</p>
                    </div>
                ))}
            </section>

            <h4><i className="bi bi-shield-lock-fill"></i> Entenda sobre as formas de acesso</h4>
            <div id="info-acess">
                <div id="acess-text">
                    <h4>Informa-se a respeito das suas prioridades de acesso como usuário</h4>
                </div>
                <div id="acess-container-info">
                    <div className="acess-card" onClick={() => showAccessContainer('admin-container')}>
                        <img src="/img/imgAdmin.webp" alt=""/>
                        <div className="caption">
                            <p>Admin</p>
                        </div>
                    </div>
                    <div className="acess-card" onClick={() => showAccessContainer('gerente-container')}>
                        <img src="/img/imgGerente.jpeg" alt=""/>
                        <div className="caption">
                            <p>Gerente</p>
                        </div>
                    </div>
                    <div className="acess-card" onClick={() => showAccessContainer('funcionario-container')}>
                        <img src="/img/imgFuncionario.jpg" alt=""/>
                        <div className="caption">
                            <p>Funcionário</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="admin-container" className="container-acess">
                <h4>Admim</h4>
                <ul>
                    <li>Os administradores têm o mais alto nível de acesso no sistema.</li>
                    <li>Geralmente responsáveis por configurar e gerenciar permissões de usuários.</li>
                    <li>Acesso a todas as áreas do sistema, incluindo configurações, relatórios detalhados e ferramentas
                        de administração.</li>
                </ul>
            </div>
            <div id="gerente-container" className="container-acess">
                <h4>Gerente</h4>
                <ul>
                    <li>Gerentes têm acesso mais amplo a informações e dados relacionados à equipe que lideram.</li>
                    <li>Permissões para tomar decisões e modificar dados relevantes para a equipe.</li>
                    <li>Acesso a relatórios e métricas para monitorar o desempenho da equipe.</li>
                </ul>
            </div>
            <div id="funcionario-container" className="container-acess">
                <h4>Funcionário</h4>
                <ul>
                    <li>Os funcionários têm acesso a recursos mais amplos, dependendo de sua posição e função na
                        empresa.</li>
                    <li>Acesso a informações e ferramentas relacionadas às responsabilidades do cargo.</li>
                    <li>Geralmente, têm permissão para modificar e atualizar dados específicos relacionados ao seu
                        trabalho.</li>
                </ul>
            </div>

            <div id="last-news">
                <div className="last-img-news">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/k_y_7Ro8-VQ" frameborder="0" allowfullscreen></iframe>
                </div>
                <div className="last-container-text">
                    <h2>Explorando a NeoFranxx: Conheça Nossa Loja, Produtos Incríveis e Ambiente Único!</h2>
                    <div id="description">
                        <h4 className="description">
                            Um passado Virtual pela NeoFranxx: Descubra cada canto da nossa Loja, dos Produtos aos
                            Detalhes Encantadores!
                        </h4>
                    </div>
                </div>
            </div>
            <br/>

            <h4 style={{textAlign: 'center'}}>Veja mais de perto nossa empresa</h4>
            <div id="carousels">
                <div className="carousel-container-outher">
                    <div className="carousel-outher">
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa2.jpg" alt="Imagem 2"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa3.jpg" alt="Imagem 3"/>
                        </div>

                        <div className="carousel-item current">
                            <img src="/img/imgEmpresa1.webp" alt="Imagem 1"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa2.jpg" alt="Imagem 2"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa3.jpg" alt="Imagem 3"/>
                        </div>

                        <div className="carousel-item">
                            <img src="/img/imgEmpresa1.webp" alt="Imagem 1"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa2.jpg" alt="Imagem 2"/>
                        </div>
                    </div>
                </div>

                <div className="carousel-container">
                    <div className="carousel">
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa2.jpg" alt="Imagem 2"/>
                            <div className="carousel-item-caption">
                                <p>imagem 1 previous</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa3.jpg" alt="Imagem 3"/>
                            <div className="carousel-item-caption">
                                <p>imagem 2 previous</p>
                            </div>
                        </div>

                        <div className="carousel-item current">
                            <img src="/img/imgEmpresa1.webp" alt="Imagem 1"/>
                            <div className="carousel-item-caption">
                                <p>imagem 1</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa2.jpg" alt="Imagem 2"/>
                            <div className="carousel-item-caption">
                                <p>imagem 2 current</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa3.jpg" alt="Imagem 3"/>
                            <div className="carousel-item-caption">
                                <p>imagem 3 current</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src="/img/imgEmpresa1.webp" alt="Imagem 1"/>
                            <div className="carousel-item-caption">
                                <p>imagem 1 next</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa2.jpg" alt="Imagem 2"/>
                            <div className="carousel-item-caption">
                                <p>imagem 2 next</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-arrow left-arrow"><i className="bi bi-chevron-left"></i></div>
                    <div className="carousel-arrow right-arrow"><i className="bi bi-chevron-right"></i></div>
                </div>

                <div className="carousel-container-outher">
                    <div className="carousel-outher-2">
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa2.jpg" alt="Imagem 2"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa3.jpg" alt="Imagem 3"/>
                        </div>

                        <div className="carousel-item current">
                            <img src="/img/imgEmpresa1.webp" alt="Imagem 1"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa2.jpg" alt="Imagem 2"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa3.jpg" alt="Imagem 3"/>
                        </div>

                        <div className="carousel-item">
                            <img src="/img/imgEmpresa1.webp" alt="Imagem 1"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/imgEmpresa2.jpg" alt="Imagem 2"/>
                        </div>
                    </div>
                </div>
            </div>

            <h4><i className="bi bi-stars"></i> Conheça as 5 soft skills mais importantes !!</h4>

            <div id="container-skills-info">
                <div id="container-skills">
                    <div className="skill" onClick={() => toggleSkill(1)}>
                        <h4 className="number-skill">1</h4>
                        <h4 className="skill-text">Comunicação Efetiva <i className="bi bi-caret-down-fill" id="icon-1"></i></h4>
                    </div>
                    <div id="skill-1-info" className="skill-info">
                        <p>A habilidade de se expressar de maneira clara, concisa e compreensível. Comunicadores eficazes são capazes de transmitir ideias complexas de forma simples, ouvir atentamente e adaptar sua comunicação com base no público.</p>
                    </div>

                    <div className="skill" onClick={() => toggleSkill(2)}>
                        <h4 className="number-skill">2</h4>
                        <h4 className="skill-text">Trabalho em Equipe <i className="bi bi-caret-down-fill" id="icon-2"></i></h4>
                    </div>
                    <div id="skill-2-info" className="skill-info">
                        <p>Envolve a capacidade de colaborar e trabalhar harmoniosamente com outros membros de uma equipe. Pessoas com forte habilidade em trabalho em equipe contribuem ativamente, respeitam as opiniões dos colegas e trabalham em direção a objetivos comuns.</p>
                    </div>

                    <div className="skill" onClick={() => toggleSkill(3)}>
                        <h4 className="number-skill">3</h4>
                        <h4 className="skill-text">Resolução de Problemas <i className="bi bi-caret-down-fill" id="icon-3"></i></h4>
                    </div>
                    <div id="skill-3-info" className="skill-info">
                        <p>A aptidão para analisar situações complexas, identificar desafios e encontrar soluções eficazes. Resolvedores de problemas são criativos, persistentes e capazes de abordar problemas de maneira estruturada e eficiente.</p>
                    </div>

                    <div className="skill" onClick={() => toggleSkill(4)}>
                        <h4 className="number-skill">4</h4>
                        <h4 className="skill-text">Inteligência Emocional <i className="bi bi-caret-down-fill" id="icon-4"></i></h4>
                    </div>
                    <div id="skill-4-info" className="skill-info">
                        <p>Refere-se à capacidade de reconhecer, entender e gerenciar as próprias emoções, bem como compreender as emoções dos outros. Pessoas com alta inteligência emocional são mais empáticas, resilientes e eficazes em lidar com situações sociais.</p>
                    </div>

                    <div className="skill" onClick={() => toggleSkill(5)}>
                        <h4 className="number-skill">5</h4>
                        <h4 className="skill-text">Liderança <i className="bi bi-caret-down-fill" id="icon-5"></i></h4>
                    </div>
                    <div id="skill-5-info" className="skill-info">
                        <p>Envolve a capacidade de inspirar, motivar e orientar uma equipe em direção a metas comuns. Líderes eficazes demonstram habilidades de tomada de decisão, delegação e comunicação, além de serem modelos a serem seguidos.</p>
                    </div>
                </div>
                <div id="container-skill-img">
                    <img src="/img/avatarHomeSkills.webp" alt=""/>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div id="container-footer">
            <div className="footer-links">
                <p>About us</p>
                <a href="#">Equipe</a>
                <a href="#">Comunidade</a>
                <a href="#">História</a>
                <a href="#">Parcerias</a>
            </div>
            <div className="footer-links">
                <p>Suport</p>
                <a href="#">Políticas de privacidade</a>
                <a href="#">Termos de uso</a>
                <a href="#">Cookies</a>
                <a href="#">Email de suporte</a>
            </div>
            <div className="footer-links">
                <p>Redes Sociais</p>
                <div id="container-midias-sociais">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
        </div>
        <hr/>
        <h5>Todos os direitos resevados ©NeoFranxx 2023</h5>
    </footer>
    </div>
  )
}

export default NeoFranxxNews