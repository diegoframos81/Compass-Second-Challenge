import Card from "./card";
import "../footerProfileCss/friends-card.css";
import photo1 from "../../../assets/profile-pictures/profile-pic (1).jpg";
import photo2 from "../../../assets/profile-pictures/profile-pic (2).jpg";
import photo3 from "../../../assets/profile-pictures/profile-pic (3).jpg";
import photo4 from "../../../assets/profile-pictures/profile-pic (4).jpg";
import photo5 from "../../../assets/profile-pictures/profile-pic (5).jpg";
import photo6 from "../../../assets/profile-pictures/profile-pic (6).jpg";
import photo7 from "../../../assets/profile-pictures/profile-pic (7).jpg";
import photo8 from "../../../assets/profile-pictures/profile-pic (8).jpg";
import photo9 from "../../../assets/profile-pictures/profile-pic (9).jpg";


const Friends: React.FC = () => {
    return (
        <Card>
            <header className="card-header">
                <span>Amigos (248)</span>
                <span>Ver todos</span>
            </header>
            <section className="card-body-friends">
                <div className="friends-row">
                    <div className="friends-thumb-container">
                        <img className="friend-tumb" src={photo1} alt="Friend photo" />
                        <span>Fernando</span>
                    </div>
                    <div className="friends-thumb-container">
                        <img className="friend-tumb" src={photo2} alt="Friend photo" />
                        <span>Ana</span>
                    </div>
                    <div className="friends-thumb-container">
                        <img className="friend-tumb" src={photo3} alt="Friend photo" />
                        <span>Carlos</span>
                    </div>
                </div>
                <div className="friends-row">
                    <div className="friends-thumb-container">
                        <img className="friend-tumb" src={photo4} alt="Friend photo" />
                        <span>Vitor</span>
                    </div>
                    <div className="friends-thumb-container">
                        <img className="friend-tumb" src={photo5} alt="Friend photo" />
                        <span>Matheus</span>
                    </div>
                    <div className="friends-thumb-container">
                        <img className="friend-tumb" src={photo6} alt="Friend photo" />
                        <span>Ramos</span>
                    </div>
                </div>
                <div className="friends-row">
                    <div className="friends-thumb-container">
                        <img className="friend-tumb" src={photo7} alt="Friend photo" />
                        <span>Eiji</span>
                    </div>
                    <div className="friends-thumb-container">
                        <img className="friend-tumb" src={photo8} alt="Friend photo" />
                        <span>Julia</span>
                    </div>
                    <div className="friends-thumb-container">
                        <img className="friend-tumb" src={photo9} alt="Friend photo" />
                        <span>Carol</span>
                    </div>
                </div>
            </section>
        </Card>
    );
};

export default Friends;
