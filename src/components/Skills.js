import skill1 from "../assets/img/skill1.png";
import skill2 from "../assets/img/skill2.png";
import skill3 from "../assets/img/skill3.png";
import skill4 from "../assets/img/skill4.png";
import skill5 from "../assets/img/skill5.png";
import skill6 from "../assets/img/skill6.png";
import skill7 from "../assets/img/skill7.png";
import skill8 from "../assets/img/skill8.png";
import skill9 from "../assets/img/skill9.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
const responsive = {
    superLargeDesktop: {

    breakpoint: { max: 4000, min: 3000 },
    items: 5
    },
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
    },
    tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
    }
};

return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Cuento con la experiencia para desempeñarme en los siguiente lenguajes</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skill1} alt="Skill1" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Skill2" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Skill3" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="Skill4" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={skill5} alt="Skill5" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={skill6} alt="Skill6" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={skill7} alt="Skill7" />
                                <h5>XML</h5>
                            </div>
                            <div className="item">
                                <img src={skill8} alt="Skill8" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={skill9} alt="Skill9" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
)
}
