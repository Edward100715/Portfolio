import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/Foto.png"

export const Banner = () => {
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const [text, setText] = useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const [index, setIndex] = useState(1);
const toRotate = [ "Web", "Front-End", "Back-End" ];
const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
    }, [text])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
        } else {
        setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenido a mi portafolio!</span>
                        <h1>{`Hola! Soy Edward, Desarrollador `}<span className="wrap">{text}</span></h1>
                        <p>Soy una persona con compromiso acorde a mi responsabilidad, poseo una mente metódica, lo que me permite identificar patrones y tendencias a través de la observación y recolección de información. Además, que soy una persona que nunca me conformo con los conocimientos adquiridos y siempre estoy en busca de nuevas oportunidades de aprender y crecer. Con capacidad de solucionar los desafíos y cambios que se presentan en el entorno laboral y tecnológico de manera eficiente, sin perder la calma o el enfoque a los objetivos.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}