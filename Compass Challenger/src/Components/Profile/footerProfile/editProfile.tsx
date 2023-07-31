import React, { useContext, useState } from 'react';
import { UserContext, formatKey } from '../footerProfile/userContext';
import '../footerProfileCss/editProfile.css';
import { useNavigate } from 'react-router-dom';

interface EditProfileFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options?: string[];
  type?: string;
}

const EditProfileField: React.FC<EditProfileFieldProps> = ({ label, value, onChange, options, type = 'text' }) => {
  const modifiedOptions = options?.map((option) =>
    option === 'nada a declarar' ? 'Nada a declarar' : option === 'depende do dia' ? 'Depende do dia' : option
  );

  return (
    <div>
      <label>{formatKey(label)}: </label>
      {options ? (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {modifiedOptions?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );
};

const EditProfile: React.FC = () => {
  const { user, setUser, relacionamentoOptions, interessesOptions, filhosOptions, sexoOptions, fumaOptions, bebeOptions } =
    useContext(UserContext);
  const [editedUser, setEditedUser] = useState(user);
  const navigate = useNavigate();

  const calculateAge = (birthday: string): string => {
    const dob = new Date(birthday);
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);

    return String(Math.abs(age_dt.getUTCFullYear() - 1970));
  };

  const handleFieldChange = (key: string) => (value: string) => {
    if (key === 'Aniversário') {
      setEditedUser({
        ...editedUser,
        [key]: value,
        Idade: calculateAge(value),
      });
    } else {
      setEditedUser({
        ...editedUser,
        [key]: value,
      });
    }
  };

  const handleSaveClick = () => {
    setUser(editedUser);
    navigate('/App');
  };

  return (
    <div className="edit-profile-container">
      {Object.entries(editedUser).map(([key, value]) => {
        switch (key) {
          case 'Relacionamento':
            return (
              <EditProfileField key={key} label={key} value={value} onChange={handleFieldChange(key)} options={relacionamentoOptions} />
            );
          case 'Aniversário':
            return <EditProfileField key={key} label={key} value={value} onChange={handleFieldChange(key)} type="date" />;
          case 'Interesses_no_Orkut':
            return (
              <EditProfileField key={key} label={key} value={value} onChange={handleFieldChange(key)} options={interessesOptions} />
            );
          case 'Filhos':
            return <EditProfileField key={key} label={key} value={value} onChange={handleFieldChange(key)} options={filhosOptions} />;
          case 'Sexo':
            return <EditProfileField key={key} label={key} value={value} onChange={handleFieldChange(key)} options={sexoOptions} />;
          case 'Fuma':
            return <EditProfileField key={key} label={key} value={value} onChange={handleFieldChange(key)} options={fumaOptions} />;
          case 'Bebe':
            return <EditProfileField key={key} label={key} value={value} onChange={handleFieldChange(key)} options={bebeOptions} />;
          default:
            return <EditProfileField key={key} label={key} value={value} onChange={handleFieldChange(key)} />;
        }
      })}
      <button onClick={handleSaveClick}>Salvar</button>
    </div>
  );
};

export default EditProfile;
