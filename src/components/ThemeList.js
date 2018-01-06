import React from 'react'
import { connect } from 'react-redux'
import Theme from './Theme'

const ThemeListComponent = ({ themes }) => {
  return (
    <div>
      <ul>
        {themes.map(theme => {
          return <Theme key={theme.themeId} theme={theme} />
        })}
      </ul>

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
