import {LOGIN_START,
        LOGIN_SUCCESS,
        LOGIN_FAILURE} from '../actions/entryActions'



const initialState = {
    fetchLogin: false,
    error: null,
    userId: 0
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        return {
          ...state,
          fetchLogin: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          fetchLogin: false,
          error: false,
          userId: action.payload
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          fetchLogin: false,
          error: action.payload
        }; 
    default:
        return state;
    }


}

export default authReducer;