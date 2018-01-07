export const vote = (themeId, opinionId) => ({
  type: 'VOTE',
  themeId,
  opinionId,
});

let nextOpinionId = 1000;
const generateNextOpinionId = () => {
  nextOpinionId += 1;
  return nextOpinionId;
};

export const addOpinion = (themeId, opinionDescription) => ({
  type: 'ADD_OPINION',
  themeId,
  opinionId: generateNextOpinionId(),
  opinionDescription,
});

let nextThemeId = 100;
const generateNextThemeId = () => {
  nextThemeId += 1;
  return nextThemeId;
};

export const addTheme = themeDescription => ({
  type: 'ADD_THEME',
  themeId: generateNextThemeId(),
  themeDescription,
});
