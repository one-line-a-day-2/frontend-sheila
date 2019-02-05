import 
{  
   LOGIN_START,
//    LOGIN_SUCCESS,
//    LOGIN_FAILURE,


} from '../actions';

const initialState = {


}

const logReducer = (state = initialState, action) => {
    switch(action.type) {
    case LOGIN_START:
    return action.payload
    default: return state;
    }
}

export default logReducer;