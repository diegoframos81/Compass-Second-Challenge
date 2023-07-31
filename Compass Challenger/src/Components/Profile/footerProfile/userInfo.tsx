import React, { useContext, useState } from 'react';
import '../footerProfileCss/userInfo.css';
import { UserContext, formatKey } from './userContext';

interface UserInfoProps {
  label: string;
  value: string;
}

const UserInfoField: React.FC <UserInfoProps> = ({ label, value }) => {
  const isMoviesOrMusic = label === 'Músicas' || label === 'Filmes';
  const words = value.split('  ').map((word, index) => ({
    value: word,
    hasLeadingSpace: index !== 0,
  }));
  const showVerTodos = isMoviesOrMusic && words.length > 3;
  const verTodosLabel = showVerTodos ? `Ver todos (${words.length - 3} mais)` : 'Ver todos';

  const [showAllItems, setShowAllItems] = useState(false);

  const handleClickVerTodos = () => {
    setShowAllItems(!showAllItems);
  };

  return (
    <>
    <div>
      <label>{formatKey(label)}: </label>
      <span className="user-value">
        {words.map(({ value: word, hasLeadingSpace }, index) => {
          const modifiedWord =
            word.toLowerCase() === 'nadaadeclarar' ? 'Nada a declarar' :
            word.toLowerCase() === 'dependedodia' ? 'Depende do dia' : word;
          if (isMoviesOrMusic && (showAllItems || index < 3)) {
            return (
              <span key={index} className={`bordered-word${hasLeadingSpace ? ' with-space' : ''}`}>
                {modifiedWord}
              </span>
            );
          } else if (!isMoviesOrMusic) {
            return (
              <span key={index} className={hasLeadingSpace ? 'with-space' : ''}>
                {modifiedWord}
              </span>
            );
          } else {
            return null;
          }
        })}
        {showVerTodos && (
          <span className="ver-todos" onClick={handleClickVerTodos}>
            {showAllItems ? 'Ver menos' : verTodosLabel}
          </span>
        )}
      </span>
    </div>
    </>
  );
};

const UserInfo: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="user-info-all">
        {Object.entries(user).map(([key, value]) => (
          <UserInfoField key={key} label={key} value={value} />
        ))}
      </div>
    </>
  );
};

export default UserInfo;
