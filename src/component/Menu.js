import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/authedUser';

function Menu (props){
    const signout = (e) => {
        e.preventDefault();
        props.dispatch(logout());
        props.history.push('/');
    }

    if(!props.authedUser) {
        return null;
    }

    return (
        <Navbar bg="light" expand="lg" className="mb-5 header" style={{marginTop: "3px"}}>
            <NavLink className="navbar-brand" to="/">Would You Rather</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add">New Question</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/leader">Leader Board</NavLink>
                    </li>
                </Nav>
                <div>
                <span>Hi!, it's  {props.authedUser?.name}</span>
                    <img
                        src={`${props.authedUser?.avatarURL}`}
                        width="45"
                        height="45"
                        className="ml-3 mr-2 rounded-circle"
                        alt={props.authedUser?.name} />
                    <button className="btn btn-dark" onClick={signout}>Signout</button>
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

export default withRouter(connect(mapStateToProps)(Menu));




