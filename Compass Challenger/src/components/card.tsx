import { ReactNode } from "react";

const Card: React.FC<{ children: ReactNode}> = (props) => {
    return (
        <div className="card">
            {props.children}
        </div>
    );
};

export default Card;