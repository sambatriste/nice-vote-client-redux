import axios from 'axios';

export const postVote = (themeId, opinionId) => {
  return (dispatch) => {
    axios.post('/api/agreement', {
      opinionId
    }).then(response => {
      const data = response.data;
      const action = vote(themeId, opinionId, data.agreementCount);
      dispatch(action);
    }).catch(error => {
      console.log("post vote failed. ", error);
    })
  }
}


export const vote = (themeId, opinionId, agreementCount) => ({
  type: 'VOTE',
  payload: {
    themeId,
    opinionId,
    agreementCount
  }
});


export const postOpinion = (themeId, description ) => {
  return (dispatch) => {
    axios.post('/api/opinion', {
      themeId,
      description
    }).then(response => {
      const opinion = response.data;
      const action = addOpinion(opinion);
      dispatch(action);
    }).catch(error => {
      console.log("post opinion failed. ", error);
    });
  };
}

export const addOpinion = ({themeId, opinionId, description}) => ({
  type: 'ADD_OPINION',
  payload: {
    themeId,
    opinionId,
    description
  }
});

export const postTheme = title => {
  return (dispatch) => {
    axios.post('api/theme', {
      title
    }).then(response => {
      const action = addTheme(response.data);
      dispatch(action);
    }).catch(error => {
      console.log("post theme failed. ", error);
    })
  }
}

export const addTheme = ({themeId, title}) => ({
  type: 'ADD_THEME',
  payload: {
    themeId,
    title,
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

export const fetchThemes = () => {
  return (dispatch) => {
    dispatch(requestThemes());
    axios.get('/api/theme').then((response) => {
      const themes = response.data;
      dispatch(recieveThemes(themes));
    }).catch((error) => {
      console.log(error);
    });
  };
}
