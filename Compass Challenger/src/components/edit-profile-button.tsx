import Card from './card'
import './edit-profile-button.css'

const EditProfileButton: React.FC = () => {
    return (
        <Card>
            <span className='edit-profile-button'>Editar meu perfil</span>
        </Card>
    )
}

export default EditProfileButton;