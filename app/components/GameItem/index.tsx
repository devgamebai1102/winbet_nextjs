import React from 'react';

interface GameItemProps {
    href: string;
    logo1: string;
    logo2: string;
    gameTitle1: string;
    gameTitle2: string;
    image: string;
}

const GameItem: React.FC<GameItemProps> = ({ href, logo1, logo2, gameTitle1, gameTitle2, image }) => (
    <a className="hc hc1 hc1h" href={href}>
        <div className="tophc1">
            <img src={logo1} alt="Logo 1" />
            <img src={logo2} alt="Logo 2" />
            <span className="nametitlegame1">{gameTitle1}</span>
            <span className="nametitlegame2">{gameTitle2}</span>
        </div>
        <div className="bothc1">
            <img src={image} alt={gameTitle1} />
        </div>
    </a>
);

export default GameItem;
