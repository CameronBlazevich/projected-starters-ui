import { Link } from 'react-router-dom'
import { Col, Row, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink,Collapse, NavbarText, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useAuthContext } from '../context/auth-context'


const AppHeader = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const { user, logout } = useAuthContext();

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    if (!user) {
        return null;
    }
   
    return (

        <Row className="App-header">
            <Col>
                <Navbar dark expand="md">
                    <NavbarBrand>
                        <Link to="/">Projected Starters</Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={() => toggleNavbar()}></NavbarToggler>
                    <Collapse navbar isOpen={isOpen}>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/watchlist">Watchlist (beta)</Link>
                            </NavItem>
                            {/* <NavItem>
                                <Link className="nav-link" to="/add-drop-scheduler">Schedule Add/Drop (alpha)</Link>
                            </NavItem> */}
                        </Nav>
                        <NavbarText>
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav caret>
                                    <FontAwesomeIcon icon={faUser} size="1x"></FontAwesomeIcon>
                                    {' '}{user.email}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={logout}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </Col>
        </Row>

    )
}

export default AppHeader;
