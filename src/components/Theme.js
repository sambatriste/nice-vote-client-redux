import React from 'react'
import { connect } from 'react-redux'
import Opinion from './Opinion'
import { vote } from '../actions'
import NewOpinion from './NewOpinion'
import TotalCount from './TotalCount'

const ThemeComponent = ({ theme, onVoteClick }) => {
  return (
    <div>
      <h2>{theme.description}</h2>
      <ul>
        {theme.opinions.map(opinion => {
          return (
            <Opinion key={opinion.opinionId}
                     onVoteClick={e => onVoteClick(theme.themeId, opinion.opinionId)}
                     opinion={opinion}
            />)
        })}
      </ul>
      <TotalCount opinions={theme.opinions} />
      <NewOpinion themeId={theme.themeId} />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onVoteClick: (themeId, opinionId) => {
      const action = vote(themeId, opinionId);
      dispatch(action)
    }
  }
}

const Theme = connect(null, mapDispatchToProps)(ThemeComponent)
export default Theme
