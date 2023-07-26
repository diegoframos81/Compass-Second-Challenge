import { ReactNode } from "react";
import "./card.css";

const Card: React.FC<{ children: ReactNode }> = (props) => {
    return (
        <div className="card-outer">
            <div className="card-inner">
                {props.children}
            </div>
        </div>
    );
};

export default Card;
