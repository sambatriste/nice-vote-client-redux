import React from 'react'
import { connect } from 'react-redux'
import Theme from './Theme'

const ThemeListComponent = ({ themes }) => {
  return (
    <div>
      {themes.map(theme => {
        return <Theme key={theme.themeId} theme={theme} />
      })}
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
