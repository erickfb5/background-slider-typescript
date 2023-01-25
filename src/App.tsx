import { useState, useEffect } from "react";

import { slides } from "./slides";
import "./App.css";

const App: React.FC<{}> = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    useEffect(() => {
        document.body.style.backgroundImage = `url(${slides[activeSlide]})`;
    }, [activeSlide, slides]);

    const handleClick = (direction: string) => {
        setActiveSlide(
            direction === "right"
                ? (activeSlide + 1) % slides.length
                : (activeSlide - 1 + slides.length) % slides.length
        );
    };
    return (
        <div className="slider-container">
            {slides.map((slide, index: number) => (
                <div
                    key={index}
                    className={`slide ${index === activeSlide ? "active" : ""}`}
                    style={{ backgroundImage: `url(${slide})` }}
                />
            ))}
            <button
                className="arrow left-arrow"
                id="left"
                onClick={() => handleClick("left")}
            >
                <i className="fas fa-arrow-left" />
            </button>
            <button
                className="arrow right-arrow"
                id="right"
                onClick={() => handleClick("right")}
            >
                <i className="fas fa-arrow-right" />
            </button>
        </div>
    );
};

export default App;
