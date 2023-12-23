import React, { useEffect, useState } from 'react'
import '../members/members.css'

const Members = () => {
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
        }));

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
              <img src={member.picture} alt="Card-img"/>
              <h6>{member.name}</h6>
              <p>{member.email}</p>
              <div class="card-actions-members">
                  <a href="../neofranxx/index.html"><i class="bi bi-info-circle-fill"></i></a>
                  <a href="#"><i class="bi bi-pen-fill"></i></a>
                  <a href="#"><i class="bi bi-trash-fill"></i></a>
              </div>
              <div class="status"><p>ativo</p></div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Members