import {ENTRY_START,
        ENTRY_SUCCESS,
        ENTRY_FAILURE} from '../actions/entryActions'


const initialState = {  
        entries: [],
        fetchEntries:false,
        error: null

}



const entryReducer = (state = initialState, action) => {
     switch (action.type) {
         case 'ENTRY_START':
            return {
                ...state,
                fetchEntries: true
            }
        case 'ENTRY_SUCCESS':
            return {
                ...state,
                fetchEntries: false,
                entries: action.payload,
                error: null
            }
        case 'ENTRY_FAILURE':
            return{
                ...state,
                fetchEntries:false,
                error: action.payload

            }
            default: 
                return state;
     }
     

}

export default entryReducer;