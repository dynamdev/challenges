import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import './readingForm.css'

const ReadingForm = ({ addHandler }) => {
    const [state, setState] = useState({
        title: '',
        author: ''
    });

    const inputHandler = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const createHandler = (e) => {
        e.preventDefault();
        addHandler({
            title: state.title,
            author: state.author
        });
        setState({ title: '', author: '' });
    }

    return (
        <Form className='mt-5'>
            <Row className='mb-4'>
                <Col>
                    <Form.Control type="text" name="title" placeholder="Book Title" onChange={(e) => inputHandler(e)} value={state.title} />
                </Col>
            </Row>
            <Row className='mb-4'>
                <Col>
                    <Form.Control type="text" name="author" placeholder="Author"  onChange={(e) => inputHandler(e)} value={state.author}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <button className='btn-create' onClick={(e) => createHandler(e)}>Create</button>
                </Col>
            </Row>
        </Form>
    )
}

export default ReadingForm