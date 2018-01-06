let nextOpinionId = 0

export const vote = (themeId, opinionId) => {
  return {
    type: 'VOTE',
    themeId,
    opinionId
  }
}

export const addOpinion = (themeId, opinionDescription) => {
  return {
    type: 'ADD_OPINION',
    themeId,
    opinionId: nextOpinionId++,
    opinionDescription
  }
}
