import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contacting from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Enviar");
    const [status, setStatus] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const { firstName, lastName, email, phone, message } = formDetails;
        const isValid =
            firstName !== "" &&
            lastName !== "" &&
            email !== "" &&
            phone !== "" &&
            message !== "";
        setIsFormValid(isValid);
    }, [formDetails]);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Enviando...");

        setTimeout(function () {
            setButtonText("Enviado");
            setFormDetails(formInitialDetails); // Restablece los datos del formulario al valor inicial
            alert("El mensaje a sido enviado exitosamente!")
        }, 2000);
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contacting} alt="Contacto" />
                    </Col>
                    <Col md={6}>
                        <h2>Contactame</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col xs={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.firstName}
                                        placeholder="Nombre"
                                        onChange={(e) =>
                                            onFormUpdate("firstName", e.target.value)
                                        }
                                    />
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Apellido"
                                        onChange={(e) =>
                                            onFormUpdate("lastName", e.target.value)
                                        }
                                    />
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Correo"
                                        onChange={(e) => onFormUpdate("email", e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Nro. Telefono"
                                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} className="px-1">
                                    <textarea
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Mensaje"
                                        onChange={(e) =>
                                            onFormUpdate("message", e.target.value)
                                        }
                                    ></textarea>
                                    <button
                                        type="submit"
                                        disabled={!isFormValid}
                                        className={!isFormValid ? "transparent-button" : ""}
                                    >
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {status.message && (
                                    <Col>
                                        <p
                                            className={
                                                status.success === false ? "danger" : "success"
                                            }
                                        >
                                            {status.message}
                                        </p>
                                    </Col>
                                )}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
