import Card from './card'
import ProfilePicture from '../../../assets/profile-pictures/profile-pic-user.jpg'
import '../footerProfileCss/profile-card.css'

const Profile: React.FC = () => {
    return (
        <Card>
            <img className='profile-picture' src={ProfilePicture} alt="Profile picture" />
            <span className='profile-name'>Iuri Silva</span>
            <span className='profile-summary'>Solteiro, Brasil</span>
        </Card>
    )
}

export default Profile;