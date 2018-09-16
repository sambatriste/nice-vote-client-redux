import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchThemes } from "../actions";


class ThemeListComponent extends React.Component {
  componentWillMount() {
    this.props.doFetchThemes();
  }

  render() {
    return (
      <div>
        <h2>テーマ一覧</h2>
        <ul>{
          this.props.themes.map(theme => (
            <li key={theme.themeId}>
              <Link to={`/themes/${theme.themeId}`}>{theme.title}</Link>
            </li>
          ))
        }
        </ul>
      </div>);
  }
}

const mapStateToProps = state => ({
  themes: state.themes
});

const mapDispatchToProps = dispatch => ({
  doFetchThemes: () => dispatch(fetchThemes())
});


const ThemeList = connect(mapStateToProps, mapDispatchToProps)(ThemeListComponent);
export default ThemeList;
