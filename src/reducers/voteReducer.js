const agree = (themes, { themeId, opinionId }) => themes.map((theme) => {
  if (theme.themeId !== themeId) {
    return theme;
  }
  const opinions = theme.opinions.map((opinion) => {
    if (opinion.opinionId !== opinionId) {
      return opinion;
    }
    return {
      ...opinion,
      agreementCount: opinion.agreementCount + 1
    };
  });
  return {
    ...theme,
    opinions
  };
});

const addOpinion = (themes, { themeId, opinionId, opinionDescription }) => themes.map((theme) => {
  if (theme.themeId !== themeId) {
    return theme;
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
  };
});


const addTheme = (themes, action) => {
  const newTheme = {
    themeId: action.themeId,
    description: action.themeDescription,
    opinions: []
  };
  return [...themes, newTheme];
};

const initialState = [];


const recieveThemes = ({ themes }) => themes;

/**
 * @param themes
 * @param action
 * @returns {*}
 */
const voteReducer = (themes = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      return agree(themes, action.payload);
    case 'ADD_OPINION':
      return addOpinion(themes, action.payload);
    case 'ADD_THEME':
      return addTheme(themes, action.payload);
    case 'RECIEVE_THEMES':
      return recieveThemes(action.payload);
    default:
      return themes;
  }
};

export default voteReducer;
