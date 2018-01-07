import React from 'react';
import { connect } from 'react-redux';
import { vote } from '../actions';

class OpinionComponent extends React.Component {
  constructor(props) {
    super(props);
    const { opinion, themeId, doVote } = this.props;
    this.onVoteClick = () => {
      doVote(themeId, opinion.opinionId);
    };
  }

  render() {
    const { opinion } = this.props;
    return (
      <li>
        {opinion.description}
        <button onClick={this.onVoteClick}>
          {opinion.agreementCount}
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  doVote: (themeId, opinionId) => {
    const action = vote(themeId, opinionId);
    dispatch(action);
  },
});
const Opinion = connect(null, mapDispatchToProps)(OpinionComponent);
export default Opinion;
