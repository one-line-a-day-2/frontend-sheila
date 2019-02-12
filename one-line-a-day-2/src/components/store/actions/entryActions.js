//deleting a card ..adding a card 
import axios from 'axios';

export const LOGIN_START= 'LOGIN_START';
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS';
export const LOGIN_FAILURE= 'LOGIN_FAILURE';


export const ENTRY_START= 'ENTRY_START';
export const ENTRY_SUCCESS= 'ENTRY_SUCCESS';
export const ENTRY_FAILURE= 'ENTRY_FAILURE';


export const ENTRY_ADD_START= 'ENTRY_ADD_START';
export const ENTRY_ADD_SUCCESS= 'ENTRY_ADD_SUCCESS';
export const ENTRY_ADD_FAILURE= 'ENTRY_ADD_FAILURE';


export const ENTRY_DELETE_START= 'ENTRY_DELETE_START';
export const ENTRY_DELETE_SUCCESS= 'ENTRY_DELETE_SUCCESS';
export const ENTRY_DELETE_FAILURE= 'ENTRY_DELETE_FAIL';


//login user
export const fetchLogin = loginStatus => dispatch => {
    dispatch({ type: LOGIN_START})
    axios
    .post("https://one-line-a-day-2.herokuapp.com/api/login", loginStatus)
    .then(res => {
      console.log(res);
      localStorage.setItem("jwt", res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.id
      });
      
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err }));
};



// this: this fetches the entry from db
export const fetchEntry = (userID) => dispatch => {
    dispatch({ type: ENTRY_START })
  const token = localStorage.getItem('jwt');
  const entry = {
    headers: {
      Authorization: token
    }
  };
  axios
    .get(`https://one-line-a-day-2.herokuapp.com/api/users/${userID}/entries`, entry)
    .then(res => {
      console.log("fetch done");
      dispatch({ type: ENTRY_SUCCESS, payload: res.data, userID });
    })
    .catch(err => dispatch({ 
        type: ENTRY_FAILURE, payload: err }));
}




//this: creates a new entry 
export const createEntry = (userID, entry) => dispatch =>{
    dispatch({ type: ENTRY_ADD_START })
    const token = localStorage.getItem('jwt')
    const newAdd = {
        headers: {
            Authorization: token
        }
    }
    axios
    .post(`https://one-line-a-day-2.herokuapp.com/api/users/${userID}/entries`, entry, newAdd)
    .then(res =>{
        console.log(res)
        dispatch({
            type: ENTRY_ADD_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => dispatch({
        type: ENTRY_ADD_FAILURE, payload: err
    }))
}


export const deleteEntry = (userID, entryID) => dispatch =>{
    dispatch({type: ENTRY_DELETE_START })
    const token = localStorage.getItem('jwt')
    const deleteEn = {
        headers: {
            Authorization: token
        }
    }
    axios
    .delete(`https://one-line-a-day-2.herokuapp.com/api/users/${userID}/entries/${entryID}`, deleteEn)
    .then(res => {dispatch({ type: ENTRY_DELETE_SUCCESS, payload: entryID })
    })
    .catch(err => dispatch({ type: ENTRY_DELETE_FAILURE, payload: err}))
}



