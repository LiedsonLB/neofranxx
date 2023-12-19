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

  return (
    <main id="main-news">
        <div id="main-news-container">
            <h3><span>NeoxFranxx </span>News</h3>
            
            <h4>Destaques</h4>
            <section id="destaques">   
                <div className="major-news">
                    <a href="\home">
                        <div className="major-img">
                            <img src="/img/vista-frontal-do-corte-da-fita-vermelha-na-inauguracao-do-edificio_8353-10570.avif" alt="img-person"/>
                        </div>
                        <div className="major-text">
                            <strong>Nova filial em Maceió está preste a ser inaugurada</strong>
                        </div>
                    </a>
                </div>

                <div className="outhers-news">
                    <a href="\login">
                        <div className="secundary-news">
                            <div className="container-secundary-img-2"></div>
                            <div className="container-secundary-text">
                                <p>Lançamento de Novo Produto: NeoLap Introduz Inovação Revolucionária no Mercado</p>
                            </div>
                        </div>
                    </a>
                    <a href="\login">
                        <div className="secundary-news">
                            <div className="container-secundary-img-1"></div>
                            <div className="container-secundary-text">
                                <p>Parceria Estratégica NeoFranxx e Ilusion unem forças  para Impulsionar Inovação</p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            <h4>Api de Cotações</h4>
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