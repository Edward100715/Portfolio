import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/Foto.png"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web", "FullStack"];
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
                        <span className="tagline">¡ Bienvenido A Mi Portafolio !</span>
                        <h1>{`Hola! Soy Edward, Desarrollador `}<span className="wrap">{text}</span></h1>
                        <p>Soy una persona altamente comprometida y
                            responsable, con una mente metódica que me permite
                            identificar patrones y tendencias a través de la
                            observación y el análisis de datos. Siempre estoy
                            sediento de conocimiento y en busca de nuevas
                            oportunidades para aprender y crecer
                            profesionalmente.</p>
                        <p>Me destaco por mi capacidad para enfrentar desafíos
                            y adaptarme a los cambios en el entorno laboral y
                            tecnológico de manera eficiente. Mantengo la calma y
                            el enfoque en los objetivos, lo que me permite
                            encontrar soluciones efectivas en situaciones
                            complejas.</p>
                        <p>Mi pasión por el desarrollo de software y la creación
                            de soluciones innovadoras me impulsa a buscar
                            constantemente formas de mejorar y superar las
                            expectativas. Soy un colaborador apasionado y
                            comprometido con el éxito del equipo y de la empresa.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}