import { ReactNode } from "react";
import "../footerProfileCss/card.css";

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <div className="card-outer">
            <div className="card-inner">
                {props.children}
            </div>
        </div>
    );
};

export default Card;

