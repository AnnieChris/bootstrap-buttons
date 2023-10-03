import React from 'react'
import { Button, Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

const NavMenuBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/bootstrap-buttons">React Buttons</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/hovereffects">Hover Effects</Nav.Link>
                        <Nav.Link href="/mouseevents">Mouse Events</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavMenuBar