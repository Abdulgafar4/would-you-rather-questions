import { connect } from 'react-redux';
import BoardCard from './BoardCard';

function Leader (props) {
    return (
        <div className="container col-sm-6">
            <ul>
                {props.leader.map(item => (
                    <li key={item} className="mb-3">
                        <BoardCard id={item} />
                    </li>
                ))}
            </ul>
        </div>
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