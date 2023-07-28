import React from 'react';
import './userInfo.css';

interface UserInfoProps {
  label: string;
  value: string;
}

const UserInfoField: React.FC<UserInfoProps> = ({ label, value }) => {
  if (label === "Músicas" || label === "Filmes") {
    const phrases = value.split(/(Ver todos|A rede social|Meu amigo Totoro)|\s/).filter(Boolean);
    return (
      <div>
        <label>{label}: </label>
        <span className="user-value">
          {phrases.map((phrase, index) => (
            phrase === "Ver todos" ?
              <span key={index} className="ver-todos">{phrase}</span>
              :
              <span key={index} className="bordered-word">{phrase}</span>
          ))}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <label>{label}: </label>
        <span className="user-value">{value}</span>
      </div>
    );
  }
};

// const UserInfoEditableField: React.FC<UserInfoProps> = ({ label, value }) => (
//   <div>
//     <strong>{label}: </strong>
//     <input type="text" defaultValue={value} />
//   </div>
// );

const UserInfo: React.FC = () => {
  const userData = {
    relationship: 'Solteiro',
    birthday: '21 de julho',
    age: '22 anos',
    interests: 'Amizade',
    about: 'Programador',
    children: 'Não',
    sex: 'Masculino',
    smoke: 'Não',
    drink: 'Depende do dia',
    location: 'Guarantã',
    country: 'Brasil',
    hometown: 'São Paulo',
    music: 'Trap Rap Indie Ver todos',
    movies: 'A rede social Meu amigo Totoro Ver todos',
  };

  return (
    <div className="user-info-all">
      <UserInfoField label="Relacionamento" value={userData.relationship} />
      <UserInfoField label="Aniversário" value={userData.birthday} />
      <UserInfoField label="Idade" value={userData.age} />
      <UserInfoField label="Interesses no Orkut" value={userData.interests} />
      <UserInfoField label="Quem sou eu" value={userData.about} />
      <UserInfoField label="Filhos" value={userData.children} />
      <UserInfoField label="Sexo" value={userData.sex} />
      <UserInfoField label="Fumo" value={userData.smoke} />
      <UserInfoField label="Bebo" value={userData.drink} />
      <UserInfoField label="Moro" value={userData.location} />
      <UserInfoField label="País" value={userData.country} />
      <UserInfoField label="Cidade Natal" value={userData.hometown} />
      <UserInfoField label="Músicas" value={userData.music} />
      <UserInfoField label="Filmes" value={userData.movies} />
    </div>
  );
};

export default UserInfo;
