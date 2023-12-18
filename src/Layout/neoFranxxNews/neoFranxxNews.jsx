import React from 'react'

import '../neoFranxxNews/neoFranxxNews.css'

const NeoFranxxNews = () => {
  return (
    <main id="main-news">
        <div id="main-news-container">
            <h3><span>NeoxFranxx </span>News</h3>
            
            <h4>Destaques</h4>
            <section id="destaques">   
                <div className="major-news">
                    <a href="">
                        <div className="major-img">
                            <img src="/img/vista-frontal-do-corte-da-fita-vermelha-na-inauguracao-do-edificio_8353-10570.avif" alt="img-person"/>
                        </div>
                        <div className="major-text">
                            <strong>Nova filial em Maceió está preste a ser inaugurada</strong>
                        </div>
                    </a>
                </div>

                <div className="outhers-news">
                    <a href="">
                        <div className="secundary-news">
                            <div className="container-secundary-img-2"></div>
                            <div className="container-secundary-text">
                                <p>Lançamento de Novo Produto: NeoLap Introduz Inovação Revolucionária no Mercado</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="secundary-news">
                            <div className="container-secundary-img-1"></div>
                            <div className="container-secundary-text">
                                <p>Parceria Estratégica NeoFranxx e Ilusion unem forças  para Impulsionar Inovação</p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            <h4>Cotações</h4>
            <section id="cotacoes-cards">
                <div className="card-coin red">
                    <div className="coin">
                        <p><strong>R$</strong></p>    
                    </div>
                    <p>16.00%</p>
                </div>
                <div className="card-coin green">
                    <div className="coin">
                        <p><strong>US</strong></p>    
                    </div>
                    <p>12.06%</p>
                </div>
                <div className="card-coin">
                    <div className="coin">
                        <p><strong>Bovespa</strong></p>    
                    </div>
                    <p>5.36%</p>
                </div>
                <div className="card-coin red">
                    <div className="coin">
                        <p><strong>R$</strong></p>    
                    </div>
                    <p>16.00%</p>
                </div>
                <div className="card-coin green">
                    <div className="coin">
                        <p><strong>US</strong></p>    
                    </div>
                    <p>12.06%</p>
                </div>
                <div className="card-coin">
                    <div className="coin">
                        <p><strong>Bovespa</strong></p>    
                    </div>
                    <p>5.36%</p>
                </div>
                <div className="card-coin red">
                    <div className="coin">
                        <p><strong>R$</strong></p>    
                    </div>
                    <p>16.00%</p>
                </div>
                <div className="card-coin green">
                    <div className="coin">
                        <p><strong>US</strong></p>    
                    </div>
                    <p>12.06%</p>
                </div>
                <div className="card-coin">
                    <div className="coin">
                        <p><strong>Bovespa</strong></p>    
                    </div>
                    <p>5.36%</p>
                </div>
                <div className="card-coin red">
                    <div className="coin">
                        <p><strong>R$</strong></p>    
                    </div>
                    <p>16.00%</p>
                </div>
                <div className="card-coin green">
                    <div className="coin">
                        <p><strong>US</strong></p>    
                    </div>
                    <p>12.06%</p>
                </div>
                <div className="card-coin">
                    <div className="coin">
                        <p><strong>Bovespa</strong></p>    
                    </div>
                    <p>5.36%</p>
                </div>
            </section>

            <h4>Nossas Lojas</h4>
            <div id="last-news">
                <div className="last-img-news">
                    <img src="/img/LOJAPCS.jpg" alt="img-store"/>
                </div>
                <div className="last-conatainer-text">
                    <h3>Explorando a NeoFranxx: Conheça Nossa Loja, Produtos Incríveis e Ambiente Único!</h3>
                    <div id="description">
                        <h5 className="description">
                            Um passado Virtual pela NeoFranxx: Descubra cada canto da nossa Loja, dos Produtos aos Detalhes Encantadores!
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        <br /><br /><br />
    </main>
  )
}

export default NeoFranxxNews