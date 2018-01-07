import React from 'react'
import Opinion from './Opinion'
import NewOpinion from './NewOpinion'
import TotalCount from './TotalCount'
import { connect } from "react-redux";

const ThemeComponent = ({ theme }) => {
  if (!theme) {
    return null
  }
  return (
    <div>
      <h2>{theme.description}</h2>
      <ul>
        {theme.opinions.map(opinion => {
          return (
            <Opinion key={opinion.opinionId}
                     themeId={theme.themeId}
                     opinion={opinion}
            />)
        })}
      </ul>
      <TotalCount opinions={theme.opinions} />
      <NewOpinion themeId={theme.themeId} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const themeId = parseInt(ownProps.match.params.themeId)
  const theme = state.themes.find(e => (e.themeId === themeId))
  return {
    theme
  }
}
const Theme = connect(mapStateToProps, null)(ThemeComponent)

export default Theme
