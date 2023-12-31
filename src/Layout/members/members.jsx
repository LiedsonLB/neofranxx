import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../members/members.css'

const Members = () => {
  const navigate = useNavigate();
  const [allMembers, setAllMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const apiUrl = 'https://randomuser.me/api/?results=100';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const users = data.results.map((user) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          picture: user.picture.large,
          cell: user.cell,
          gender: user.gender,
          age: user.dob.age
        }));

        console.log(users)

        setAllMembers(users);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredMembers = allMembers.filter((member) =>
    member.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div id="container-members">
        <div id="container-members-header">
            <h1><i class="bi bi-people-fill"></i> Membros</h1>
            <nav id="menu-nav">
                <a href="#" class="menu-selection">Todos</a>
                <a href="#">A-Z <i class="bi bi-arrow-down-up"></i></a>
                <a href="#">Cargo <i class="bi bi-caret-down-fill"></i></a>
                <a href="#">Localização <i class="bi bi-caret-down-fill"></i></a>
            </nav>
            <div id="search">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Pesquisar membros..."
                onChange={handleSearch}
              />
              <button><i class="bi bi-search"></i></button>
            </div>
            <h6>Total de membros encontrados:<span>{filteredMembers.length}</span></h6>
        </div>
        <div id="members-container">
          {filteredMembers.map((member) => (
            <div key={member.id} class="card-member">
              <div className='container-card-img-members'>
                <img src={member.picture} alt="Card-img"/>
                <div class="status"></div>
              </div>
              <h6>{member.name}</h6>
              <p>{member.email}</p>
              <div class="card-actions-members">
                <a href="/" 
                  onClick={(e) => { 
                  e.preventDefault();
                  navigate(`/member/${member.id}`, { state: { user: member } })}
                  }>
                  <i className="bi bi-info-circle-fill"></i>
                </a>
                <a href="#"><i class="bi bi-pen-fill"></i></a>
                <a href="#"><i class="bi bi-trash-fill"></i></a>
              </div>
              <i class={"bi bi-gender-" + member.gender + " gender"}></i>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Members