
export const vote = (themeId, opinionId) => {
  return {
    type: 'VOTE',
    themeId,
    opinionId
  }
}

let nextOpinionId = 1000
export const addOpinion = (themeId, opinionDescription) => {
  return {
    type: 'ADD_OPINION',
    themeId,
    opinionId: nextOpinionId++,
    opinionDescription
  }
}

let nextThemeId = 100
export const addTheme = (themeDescription) => {
  return {
    type: 'ADD_THEME',
    themeId: nextThemeId++,
    themeDescription
  }
}
