import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

export const Addtodos = (props) => {
    const [title, settitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Kindly fill both blocks");
        }
        else {
            props.addtodo(title, desc);
            settitle("");
            setDesc("");
        }
    }

    return (
        <div className="container">
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Enter Todos Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Enter Todos description" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
