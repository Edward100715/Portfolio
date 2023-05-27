import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon4 from "../assets/img/nav-icon4.png"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sn-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/edward-bermudez-silva-884113267/"><img src={navIcon1}></img></a>
                            <a href="https://github.com/Edward100715"><img src={navIcon4}></img></a>
                        </div>
                        <p>
                            CopyRight 2023. Todos los derechos reservados.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}