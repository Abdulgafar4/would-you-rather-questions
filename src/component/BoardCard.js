import { connect } from "react-redux";

const BoardCard = (props) => {
  const { user } = props;
  const questionAnswered = Object.keys(user.answers).length;
  const questionAsked = Object.keys(user.questions).length;
  const total = questionAnswered + questionAsked;

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={`${user.avatarURL}`} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{user.name}</h4>
            <div className="d-flex">
              <p className="pr-2 w-50">Asked questions</p>
              <p className="pr-2 w-50">{questionAsked}</p>
            </div>
            <div className="d-flex">
              <p className="pr-2 w-50">Answered questions</p>
              <p className="pr-2 w-50">{questionAnswered}</p>
            </div>
            <div className="d-flex">
            <p className="pr-2 w-50">
              <small className="text-muted">Total Questions</small>
            </p>
            <p className="pr-2 w-50">
              <small className="text-muted">{total}</small>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(BoardCard);
