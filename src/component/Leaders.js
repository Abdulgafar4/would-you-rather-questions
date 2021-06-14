import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import BoardCard from './BoardCard';

function Leader (props) {
    return (
        <Container className="col-sm-6">
            <ul>
                {props.leader.map(item => (
                    <li key={item} className="mb-3">
                        <BoardCard id={item} />
                    </li>
                ))}
            </ul>
        </Container>
    )
}

function mapStateToProps({ users }) {
    const userIds = Object.keys(users);
    const total = (id) => {
        return Object.keys(users[id].answers).length + Object.keys(users[id].questions).length;
    }
    return {
        leader: userIds.sort((a, b) => total(b) - total(a)),
    }

}

export default connect(mapStateToProps)(Leader);