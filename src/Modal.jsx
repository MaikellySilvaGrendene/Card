import React, { useState } from "react";

export function Modal() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [showInputAndButton, setShowInputAndButton] = useState(true);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const buscarUsuario = () => {
    if (!username) {
      console.log("Por favor, insira um nome de usuário do GitHub.");
      return;
    }

    const apiUrlComplete = `https://api.github.com/users/${username}`;
    console.log(apiUrlComplete);
    fetch(apiUrlComplete)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
      })
      .then((userDataResponse) => {
        setUserData(userDataResponse);
        setShowInputAndButton(false);
      })
      .catch((error) => {
        console.error(`Ocorreu um erro: ${error.message}`);
      });
  };

  return (
    <div id="textarea">
      {showInputAndButton && (
        <>
          <input
            required
            id="usernameInput"
            type="text"
            placeholder="Digite o nome de usuário do GitHub"
            value={username}
            onChange={handleUsername}
          />
          <button id="modalButton" onClick={buscarUsuario}>
            Buscar Usuário
          </button>
        </>
      )}

      {userData && (
        <div id="userDataContainer">
          <div id="userData">
            <p>Seguidores: {userData.followers}</p>
            <p>Repositórios públicos: {userData.public_repos}</p>
            <p>Seguindo: {userData.following}</p>
            <p>Localização: {userData.location}</p>
            <p>Empresa: {userData.company}</p>
            <img src={userData.avatar_url} alt="" id="profileImg" />
          </div>
        </div>
      )}
    </div>
  );
}
