import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './card';
import '../footerProfileCss/edit-profile-button.css';

const EditProfileButton: React.FC = () => {
    const navigate = useNavigate();
    const handleEditProfileClick = () => {
        navigate('/edit');
    };

    return (
        <Card>
            <span 
                className='edit-profile-button' 
                onClick={handleEditProfileClick}
            >
                Editar meu perfil
            </span>
        </Card>
    );
}

export default EditProfileButton;
