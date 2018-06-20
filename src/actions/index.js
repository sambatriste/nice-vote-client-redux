import axios from 'axios';

export const vote = (themeId, opinionId) => ({
  type: 'VOTE',
  payload: {
    themeId,
    opinionId
  }
});

let nextOpinionId = 1000;
const generateNextOpinionId = () => {
  nextOpinionId += 1;
  return nextOpinionId;
};

export const addOpinion = (themeId, opinionDescription) => ({
  type: 'ADD_OPINION',
  payload: {
    themeId,
    opinionId: generateNextOpinionId(),
    opinionDescription
  }
});

let nextThemeId = 100;
const generateNextThemeId = () => {
  nextThemeId += 1;
  return nextThemeId;
};

export const addTheme = themeDescription => ({
  type: 'ADD_THEME',
  payload: {
    themeId: generateNextThemeId(),
    themeDescription
  }
});


export const requestThemes = () => ({
  type: 'REQUEST_THEMES'
});

export const recieveThemes = themes => ({
  type: 'RECIEVE_THEMES',
  payload: {
    themes
  }
});

export const fetchThemes = (dispatch) => {
  dispatch(requestThemes());
  axios.get('/api/theme').then((response) => {
    const themes = response.data;
    dispatch(recieveThemes(themes));
  }).catch((error) => {
    console.log(error);
  });
};
