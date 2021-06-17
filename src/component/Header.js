import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

function Header (props){


    return (
        <Navbar bg="light" expand="lg" className="mb-5 header" style={{marginTop: "3px"}}>
            <NavLink className="navbar-brand" to="/">Would You Rather</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">New Question</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Leader Board</NavLink>
                    </li>
                </Nav>
                <div>
                <span>Welcome!, who are you ?</span>

                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser: users[authedUser]
    }
}

export default withRouter(connect(mapStateToProps)(Header));
