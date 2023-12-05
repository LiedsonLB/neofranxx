import '../aside/aside.css'

function Aside(profile) {
    return(
        <aside>
            <div id="options">
                <a href="w" className='options-link'><li>Home</li></a>
                <a href="w" className='options-link'><li>Membros</li></a>
                <a href="w" className='options-link'><li>Lojas</li></a>
                <a href="w" className='options-link'><li>Financeiro</li></a>
                <a href="w" className='options-link'><li>Produtos</li></a>
                <a href="w" className='options-link'><li>Agenda</li></a>
            </div>
            <div id="profile" class="py-4 d-flex justify-content-center" data-toggle="tooltip" title={profile.email}>
                    {/**link do perfil */}
                    <div class="d-flex flex-row p-2 rounded" id="profile-link">
                        <div id="profile-img" class="col-4 px-0">
                            <img src={profile.profileImg} alt="" />
                        </div>
                        <div id="profile-text" class="col-8 px-2">
                            <h6>{profile.name}</h6>
                            <p>{profile.email}</p>
                        </div>
                    </div>
            </div>
        </aside>
    )
}

export default Aside