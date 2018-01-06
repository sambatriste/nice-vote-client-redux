import React from 'react'
import { connect } from 'react-redux'
import { addOpinion } from '../actions'

const NewOpinionComponent = ({ onClick }) => {
  let input
  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      onClick(input.value)
    }}>
      <input ref={node => input = node} />
      <button type='submit'>追加</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (opinionDescription) => {
      const action = addOpinion(ownProps.themeId, opinionDescription);
      dispatch(action)
    }
  }
}
const NewOpinion = connect(null, mapDispatchToProps)(NewOpinionComponent)
export default NewOpinion