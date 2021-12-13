import React from "react";
import { Col } from "react-bootstrap";

export default function ScoopOption({ name, imagePath }) {
    return (
        <Col xs={12} md={4} sm={6} lg={3} style={{ textAlign: "center" }}>
            <img
                style={{ width: "75%" }}
                src={`http://localhost/${imagePath}`}
                alt={`${name} scoop`}
            />
        </Col>
    );
}
