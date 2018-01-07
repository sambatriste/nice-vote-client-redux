import React from 'react';
import { connect } from 'react-redux';
import { addTheme } from '../actions';

const NewThemeComponent = ({ doAddTheme, history }) => {
  let input;
  return (
    <div>
      <h2>新しいテーマ</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        doAddTheme(input.value);
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
  doAddTheme: (themeDescription) => {
    const action = addTheme(themeDescription);
    dispatch(action);
  },
});

const NewTheme = connect(null, mapDispatchToProps)(NewThemeComponent);
export default NewTheme;
