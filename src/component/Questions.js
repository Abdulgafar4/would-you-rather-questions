import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Questions(props) {
  const { question, author } = props
  return (
    <div className="card" >
      <Link to={`/questions/${question.id}`} className="d-flex">
        <Card.Img
          variant="left"
          src={`${author.avatarURL}`}
          width="100"
          height="120"
        />
        <div className="card-body">
          <p>{author.name}</p>
          <p>...{question.optionOne.text}</p>
        </div>
      </Link>
    </div>
  );
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions ? questions[id] : {};
  return {
    author: question ? users[question.author] : {},
    question,
  };
}

export default connect(mapStateToProps)(Questions);
