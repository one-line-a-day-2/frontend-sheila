import {LOGIN_START,
        LOGIN_SUCCESS,
        LOGIN_FAILURE,
        ENTRY_START,
        ENTRY_SUCCESS,
        ENTRY_FAILURE} from '../actions/entryActions'



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
          userID: action.payload
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          fetchLogin: false,
          error: action.payload
        }; 
    }

}

export default authReducer;