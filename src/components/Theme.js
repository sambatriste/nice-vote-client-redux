import React from 'react'
import Opinion from './Opinion'
import NewOpinion from './NewOpinion'
import TotalCount from './TotalCount'

const Theme = ({ theme }) => {
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

export default Theme
