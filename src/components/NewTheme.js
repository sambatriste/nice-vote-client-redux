import React from 'react';
import { connect } from 'react-redux';
import { postTheme } from '../actions';

const NewThemeComponent = ({ addTheme, history }) => {
  let input;
  return (
    <div>
      <h2>新しいテーマ</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        addTheme(input.value);
        input.value = '';
        history.push('/themes');
      }}
      >
        <input ref={(node) => { input = node; }} />
        <button>追加</button>
      </form>
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
  addTheme: (themeDescription) => {
    const action = postTheme(themeDescription);
    dispatch(action);
  }
});

const NewTheme = connect(null, mapDispatchToProps)(NewThemeComponent);
export default NewTheme;
