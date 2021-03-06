import React from 'react';
import { connect } from 'react-redux';
import { postOpinion } from '../actions';

const NewOpinionComponent = ({ onClick }) => {
  let input;
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      onClick(input.value);
      input.value = '';
    }}
    >
      <input ref={(node) => { input = node; }} />
      <button type="submit">追加</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (opinionDescription) => {
    const action = postOpinion(ownProps.themeId, opinionDescription);
    dispatch(action);
  }
});
const NewOpinion = connect(null, mapDispatchToProps)(NewOpinionComponent);
export default NewOpinion;
