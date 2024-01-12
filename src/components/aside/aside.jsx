import '../aside/aside.css'

function Aside({ profile, changeComponent }) {
    return(
        <aside>
            <div id="options">
                <li onClick={() => changeComponent('NeoFranxxNews')} className='options-link'>Home</li>
                <li onClick={() => changeComponent('members')} className='options-link'>Membros</li>
                <li onClick={() => changeComponent('stores')} className='options-link'>Lojas</li>
                <li onClick={() => changeComponent('finacial')} className='options-link'>Financeiro</li>
                <li onClick={() => changeComponent('products')} className='options-link'>Produtos</li>
                <li onClick={() => changeComponent('agenda')} className='options-link'>Agenda</li>
            </div>
            <div id="profile" onClick={() => changeComponent('editProfile')} class="py-4 d-flex justify-content-center" data-toggle="tooltip" title={profile.email}>
                    {/**link do perfil */}
                    <div class="d-flex flex-row p-2 rounded" id="profile-link">
                        <div id="profile-img" class="col-4 px-0">
                            <img src={profile.profileImg} alt="imagem de perfil" />
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