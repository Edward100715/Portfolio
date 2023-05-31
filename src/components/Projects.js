import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import zurbe from "../assets/img/zurbe.png";
import velas from "../assets/img/velas.png";
import crud from "../assets/img/crud.png";

export const Projects = () => {

    const projects1 = [
        {
            title: "Proyecto - Inmobiliaria Zurbe",
            description: "Plataforma digital de una inmobiliaria con su respectivo inicio de sesión y chat bot",
            imgUrl: zurbe,
        },
    ];
    const projects2 = [
        {
            title: "Tienda virtual",
            description: "Pagina con enfoque a ventas de velas con compra virtual y formularios",
            imgUrl: velas,
        },
    ];

    const projects3 = [
        {
            title: "Crud - PHP",
            description: "Crud utilizando HTML, CSS, PHP nativo, JavaScript y MySQL",
            imgUrl: crud,
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
