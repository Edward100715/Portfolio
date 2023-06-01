import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import zurbe from "../assets/img/zurbe.png";
import zurbe1 from "../assets/img/zurbe1.png";
import zurbe2 from "../assets/img/zurbe2.png";
import velas from "../assets/img/velas.png";
import velas1 from "../assets/img/velas1.png";
import velas2 from "../assets/img/velas2.png";
import crud from "../assets/img/crud.png";
import crud1 from "../assets/img/crud1.png";
import crud2 from "../assets/img/crud2.png";

export const Projects = () => {

    const projects1 = [
        {
            title: "Proyecto - Inmobiliaria Zurbe",
            description: "Plataforma digital de una inmobiliaria con su respectivo inicio de sesión y chat bot",
            imgUrl: zurbe,
        },
    ];

    const projects11 = [
        {
            title: "Proyecto - Inmobiliaria Zurbe",
            description: "Con sus diferentes secciones de propiedades",
            imgUrl: zurbe1,
        },
    ];

    const projects111 = [
        {
            title: "Proyecto - Inmobiliaria Zurbe",
            description: "En la parte inferior con sus enlaces de redes sociales y formulario de contacto",
            imgUrl: zurbe2,
        },
    ];

    const projects2 = [
        {
            title: "Tienda virtual",
            description: "Pagina con enfoque a ventas de velas con compra virtual y formularios",
            imgUrl: velas,
        },
    ];

    const projects22 = [
        {
            title: "Tienda virtual",
            description: "Parte de toda la sección de productos",
            imgUrl: velas1,
        },
    ];

    const projects222 = [
        {
            title: "Tienda virtual",
            description: "Terminos y condiciones",
            imgUrl: velas2,
        },
    ];

    const projects3 = [
        {
            title: "Crud - PHP",
            description: "Listado de los registros",
            imgUrl: crud,
        },
    ];

    const projects33 = [
        {
            title: "Crud - PHP",
            description: "Seccion con formulario para ingresar nuevos usuarios",
            imgUrl: crud1,
        },
    ];

    const projects333 = [
        {
            title: "Crud - PHP",
            description: "Sección con formulario para actualizar los usuarios mediante el ID",
            imgUrl: crud2,
        },
    ];

    return (
        <section className="project" id="project" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Container>
                <Row>
                    <Col>
                        <h2>
                            <span>Proyectos</span>
                        </h2>
                        <p>Como desarrollador de software he tenido la posibilidad de haber realizado estos Proyectos</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Inmobiliaria</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tienda virtual</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Crud PHP</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects1.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            projects11.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            projects111.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <a href="https://velas-s-e-a67.webnode.com.co/">
                                    <button className="As">
                                    <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            projects22.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            projects222.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                    </button>
                                    </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects3.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            projects33.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            projects333.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
