import React from 'react';
import { connect } from 'react-redux';
import { postVote } from '../actions';

const OpinionComponent = ({ opinion, themeId, doVote }) => {
  const onClick = () => { doVote(themeId, opinion.opinionId); };
  return (
    <li>
      {opinion.description}
      <button onClick={onClick}>
        {opinion.agreementCount}
      </button>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  doVote: (themeId, opinionId) => {
    const action = postVote(themeId, opinionId);
    dispatch(action);
  }
});
const Opinion = connect(null, mapDispatchToProps)(OpinionComponent);
export default Opinion;
