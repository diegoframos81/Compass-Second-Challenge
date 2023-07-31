import Card from "./card";
import "../footerProfileCss/communities-card.css";
import photo1 from "../../../assets/communities-pictures/community-pic (1).jpg";
import photo2 from "../../../assets/communities-pictures/community-pic (2).jpg";
import photo3 from "../../../assets/communities-pictures/community-pic (3).jpg";
import photo4 from "../../../assets/communities-pictures/community-pic (4).jpg";
import photo5 from "../../../assets/communities-pictures/community-pic (5).jpg";
import photo6 from "../../../assets/communities-pictures/community-pic (6).jpg";
import photo7 from "../../../assets/communities-pictures/community-pic (7).jpg";
import photo8 from "../../../assets/communities-pictures/community-pic (8).jpg";
import photo9 from "../../../assets/communities-pictures/community-pic (9).jpg";

const Communities: React.FC = () => {
    return (
        <Card>
            <header className="card-header">
                <span>Comunidade (42)</span>
                <span>Ver todos</span>
            </header>
            <section className="card-body-communities">
                <div className="communities-row">
                    <div className="communities-thumb-container">
                        <img className="community-tumb" src={photo1} alt="Community image" />
                        <span>Carros</span>
                    </div>
                    <div className="communities-thumb-container">
                        <img className="community-tumb" src={photo2} alt="Community image" />
                        <span>Desenhos</span>
                    </div>
                    <div className="communities-thumb-container">
                        <img className="community-tumb" src={photo3} alt="Community image" />
                        <span>Crazy</span>
                    </div>
                </div>
                <div className="communities-row">
                    <div className="communities-thumb-container">
                        <img className="community-tumb" src={photo4} alt="Community image" />
                        <span>Fofos</span>
                    </div>
                    <div className="communities-thumb-container">
                        <img className="community-tumb" src={photo5} alt="Community image" />
                        <span>Animes</span>
                    </div>
                    <div className="communities-thumb-container">
                        <img className="community-tumb" src={photo6} alt="Community image" />
                        <span>Leitura</span>
                    </div>
                </div>
                <div className="communities-row">
                    <div className="communities-thumb-container">
                        <img className="community-tumb" src={photo7} alt="Community image" />
                        <span>Meu ovo</span>
                    </div>
                    <div className="communities-thumb-container">
                        <img className="community-tumb" src={photo8} alt="Community image" />
                        <span>My books</span>
                    </div>
                    <div className="communities-thumb-container">
                        <img className="community-tumb" src={photo9} alt="Community image" />
                        <span>Cafeeee</span>
                    </div>
                </div>
            </section>
        </Card>
    );
};

export default Communities;
