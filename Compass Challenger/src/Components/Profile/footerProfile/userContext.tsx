import React, { useState } from 'react';

interface UserDataType {
  Relacionamento: string;
  Aniversário: string;
  Idade: string;
  Interesses_no_Orkut: string;
  Quem_sou_eu: string;
  Filhos: string;
  Sexo: string;
  Fuma: string;
  Bebe: string;
  Localização: string;
  País: string;
  Cidade_natal: string;
  Músicas: string;
  Filmes: string;
}

const defaultUser: UserDataType = {
  Relacionamento: 'Solteiro',
  Aniversário: '21 de julho',
  Idade: '22 anos',
  Interesses_no_Orkut: 'Amizade',
  Quem_sou_eu: 'Programador',
  Filhos: 'Não',
  Sexo: 'Masculino',
  Fuma: 'Não',
  Bebe: 'Depende do dia',
  Localização: 'Guarantã',
  País: 'Brasil',
  Cidade_natal: 'São Paulo',
  Músicas: 'Trap  Rap  Indie  Rock',
  Filmes: 'A rede social  Meu amigo Totoro  O castelo animado  Princesa Mononoke',
};

export interface UserContextType {
  user: UserDataType;
  setUser: React.Dispatch<React.SetStateAction<UserDataType>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  relacionamentoOptions: string[];
  interessesOptions: string[];
  filhosOptions: string[];
  sexoOptions: string[];
  fumaOptions: string[];
  bebeOptions: string[];
}

export const UserContext = React.createContext<UserContextType>({
  user: defaultUser,
  setUser: () => {},
  isEditing: false,
  setIsEditing: () => {},
  relacionamentoOptions: [],
  interessesOptions: [],
  filhosOptions: [],
  sexoOptions: [],
  fumaOptions: [],
  bebeOptions: [],
});


export const formatKey = (key: string): string => {
  return key.replace(/_/g, ' ');
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDataType>(defaultUser);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const relacionamentoOptions = ['Selecione', 'Solteiro', 'Casado', 'Viúvo', 'Separado', 'Nada a declarar'];
  const interessesOptions = ['Selecione', 'Amizade', 'Relacionamento', 'Trabalho', 'Tudo', 'Nada a declarar'];
  const filhosOptions = ['Selecione', 'Sim', 'Não'];
  const sexoOptions = ['Selecione', 'Masculino', 'Feminino', 'Nada a declarar'];
  const fumaOptions = ['Selecione', 'Sim', 'Não'];
  const bebeOptions = ['Selecione', 'Sim', 'Não', 'Depende do dia', 'Socialmente'];

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isEditing,
        setIsEditing,
        relacionamentoOptions,
        interessesOptions,
        filhosOptions,
        sexoOptions,
        fumaOptions,
        bebeOptions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
