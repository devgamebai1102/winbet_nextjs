import React from 'react';

interface NavigationButtonProps {
    id: string;
    imgSrc: string;
    label: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ id, imgSrc, label }) => (
    <div className="nav-btn" id={id}>
        <img src={imgSrc} alt={label} className="image1" />
        <p>{label}</p>
    </div>
);

export default NavigationButton;
