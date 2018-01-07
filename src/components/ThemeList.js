import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ThemeListComponent = ({ themes }) => {
  return (
    <div>
      <h2>テーマ一覧</h2>
      <ul>{
        themes.map(theme => {
          return (
            <li key={theme.themeId}>
              <Link to={`/themes/${theme.themeId}`}>{theme.description}</Link>
            </li>
          );
        })
      }</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    themes: state.themes
  }
}

const ThemeList = connect(mapStateToProps, null)(ThemeListComponent)
export default ThemeList
