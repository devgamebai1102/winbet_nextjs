import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../styles/styles.scss';

export default function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/Content/image/banner/b09.jpg',
        '/Content/image/banner/b10.jpg',
        '/Content/image/banner/b03.jpg',
        '/Content/image/banner/b04.jpg',
        '/Content/image/banner/b05.jpg',
        '/Content/image/banner/b06.jpg',
        '/Content/image/banner/b01.jpg',
        '/Content/image/banner/b02.jpg',
        '/Content/image/banner/09.jpg',
        '/Content/image/banner/010.jpg',
        '/Content/image/banner/011.jpg',
        '/Content/image/banner/012.jpg',
        '/Content/image/banner/013.jpg',
        '/Content/image/banner/b07.jpg',
        '/Content/image/banner/b08.jpg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Thay đổi slide sau mỗi 3 giây

        return () => clearInterval(interval); // Clear interval khi component bị unmount
    }, [slides.length]);

    return (

        <div className="banner">
            {slides.map((slide, index) => (
                <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
                    <a href="#">
                        <Image
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            width={500}
                            height={200}
                            style={{ display: currentSlide === index ? 'block' : 'none' }}
                        />
                    </a>
                </div>
            ))}
        </div>

    );
}
