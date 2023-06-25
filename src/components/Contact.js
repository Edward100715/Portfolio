import React, { useState } from "react";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { Container, Row, Col } from "react-bootstrap";
import contacting from "../assets/img/contact-img.svg";

export const Contact = () => {
    // Estado del formulario
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "usuarios"), {
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                telefono: telefono,
                mensaje: mensaje,
            });

            alert("Mensaje enviado exitosamente!");
            // Restablecer los campos del formulario
            setNombre("");
            setApellido("");
            setCorreo("");
            setTelefono("");
            setMensaje("");
        } catch (error) {
            alert("Hubo un error al postularse:", error);
        }
    };

    // Verifica si todos los campos están llenos
    const isFormValid = nombre && apellido && correo && telefono && mensaje;

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
                                        placeholder="Nombre"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                <input
                                        type="text"
                                        placeholder="Apellido"
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                <input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                <input
                                        type="tel"
                                        placeholder="Telefono celular"
                                        value={telefono}
                                        onChange={(e) => setTelefono(e.target.value)}
                                    />
                                </Col>
                                <Col xs={12} className="px-1">
                                    <input
                                        type="text"
                                        placeholder="Mensaje"
                                        value={mensaje}
                                        onChange={(e) => setMensaje(e.target.value)}
                                    />
                                    <button type="submit" disabled={!isFormValid}>
                                        <span>Enviar</span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
