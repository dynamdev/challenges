import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './readingList.css'

const ReadingList = ({ id, title, author, removeHandler }) => {
  return (
    <Row className="mt-3">
        <Col>
            <Card className="pt-2 pb-2 ps-3">
                <Card.Body>
                    <Card.Title>
                        <span>{title}</span>
                        <span className='btn-close' onClick={() => removeHandler(id)}></span>
                    </Card.Title>
                    <Card.Subtitle className="mt-3">{author}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}

export default ReadingList