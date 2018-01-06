/**
 *
 * @param themes
 * @param action
 * @returns {*}
 */
const voteReducer = (themes = initialState, action) => {
  switch (action.type) {
    case "VOTE":
      return agree(themes, action)
    case "ADD_OPINION":
      return addOpinion(themes, action)
    case "ADD_THEME":
      return addTheme(themes, action)
    default:
      return themes
  }
}

const addTheme = (themes, action) => {
  const newTheme = {
    themeId: action.themeId,
    description: action.themeDescription,
    opinions: []
  }
  return [...themes, newTheme]
}

const addOpinion = (themes, { themeId, opinionId, opinionDescription }) => {
  return themes.map(theme => {
    if (theme.themeId !== themeId) {
      return theme
    }
    return {
      ...theme,
      opinions: [
        ...theme.opinions,
        {
          opinionId,
          description: opinionDescription,
          agreementCount: 0
        }
      ]
    }
  })
}

const agree = (themes, { themeId, opinionId }) => {
  return themes.map(theme => {
    if (theme.themeId !== themeId) {
      return theme
    }
    const opinions = theme.opinions.map(opinion => {
      if (opinion.opinionId !== opinionId) {
        return opinion
      }
      return {
        ...opinion,
        agreementCount: opinion.agreementCount + 1
      }
    })
    return {
      ...theme,
      opinions: opinions
    }
  })
}

export default voteReducer


const initialState = [
  {
    themeId: 1,
    description: "好きな食べ物",
    opinions: [
      {
        opinionId: 1,
        description: 'すいか',
        agreementCount: 0
      },
      {
        opinionId: 2,
        description: 'いちご',
        agreementCount: 1
      }
    ]
  },
  {
    themeId: 2,
    description: "好きな人物",
    opinions: [
      {
        opinionId: 1,
        description: '織田信長',
        agreementCount: 0
      },
      {
        opinionId: 2,
        description: '織田信成',
        agreementCount: 1
      }
    ]
  }
];

