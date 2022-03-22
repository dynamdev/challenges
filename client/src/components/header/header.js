import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import './header.css'

const Header = () => {
  return (
    <Navbar>
        <Container>
            <Navbar.Brand>My Reading List</Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header