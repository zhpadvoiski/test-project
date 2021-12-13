import React, { useState } from "react";
import { Button, Form, Popover, OverlayTrigger } from "react-bootstrap";

const popover = (
    <Popover id="popover-basic">
        <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
);

const SummaryForm = () => {
    const [tcChecked, setTcChecked] = useState(false);

    const checkboxLabel = (
        <span>
            I agree to
            <OverlayTrigger placement="right" overlay={popover}>
                <span style={{ color: "blue" }}>Terms and Conditions</span>
            </OverlayTrigger>
        </span>
    );
    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={tcChecked}
                    onChange={(e) => setTcChecked(e.target.checked)}
                    label={checkboxLabel}
                ></Form.Check>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!tcChecked}>
                Confirm order
            </Button>
        </Form>
    );
};

export default SummaryForm;
