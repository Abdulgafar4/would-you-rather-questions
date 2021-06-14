import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Questions(props) {
  return (
    <Card >
      <Link to={`/questions/${props.question}`} className="d-flex">
        <Card.Img
          variant="left"
          src={`${props.author.avatarURL}`}
          width="100"
          height="120"
        />
        <Card.Body>
          <p>{props.author.name}</p>
          <p>...{props.question.optionTwo.text}</p>
        </Card.Body>
      </Link>
    </Card>
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
