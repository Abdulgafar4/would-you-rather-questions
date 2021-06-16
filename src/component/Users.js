import React from "react";
import { connect } from "react-redux";

  function Users (props) {

    const { users, getAuthedUser } = props;

    const usersChange = (e) => {
      getAuthedUser(e.target.selectedOptions[0].id)
    }
    return (
      <select className="form-control mb-3" onChange={usersChange}>
        <option value="">Choose User</option>
        {Object.keys(users).map((userId) => (
          <option id={userId} key={userId}>
            {users[userId].name}
          </option>
        ))}
      </select>
    );
  }

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Users);
