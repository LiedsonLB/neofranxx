import './errorPage.css'

function ErrorPage() {
    return(
        <div id="screen-error">
            <div id="container-error">
                <div id="img-error">
                    <img src="/img/erro404Img.png" alt=""/>
                </div>
                <div id="text-error">
                    <h1>ERROR <span>404</span>:<br className='br-error'/> Página não encontrada</h1>
                    <p>Nosso programador dormiu no teclado, e a página fugiu! Enquanto o café faz efeito, explore outras partes do nosso universo digital na página inicial. Agradecemos pela paciência!</p>
                    <a href="/home">Back to Home</a>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage