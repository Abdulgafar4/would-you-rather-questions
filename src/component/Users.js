import { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  usersChange = (e) => {
    this.props.getAuthedUser(e.target.selectedOptions[0].id);
  };

  render() {
    const { users } = this.props;
    return (
      <select className="form-control mb-3" onChange={this.usersChange}>
        <option value="">Choose User</option>
        {Object.keys(users).map((userId) => (
          <option id={userId} key={userId}>
            {users[userId].name}
          </option>
        ))}
      </select>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Users);
