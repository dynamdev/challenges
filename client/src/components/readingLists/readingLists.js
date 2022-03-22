import React from 'react'
import ReadingForm from '../readingForm/readingForm'
import ReadingList from './readingList/readingList'
import { Container, Row, Col } from 'react-bootstrap'


const ReadingLists = ({ readingLists, addHandler, removeHandler }) => {
  return (
    <Container className='mt-3'>
        <Row>
            <Col>{readingLists && readingLists.map((list, idx) => <ReadingList key={idx} id={list.id} title={list.title} author={list.author} removeHandler={removeHandler}/>)}</Col>
        </Row>
        <Row>
            <Col>
                <ReadingForm addHandler={addHandler} />
            </Col>
        </Row>
    </Container>
  )
}

export default ReadingLists