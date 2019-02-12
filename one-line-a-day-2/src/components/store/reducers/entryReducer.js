import {ENTRY_START,
        ENTRY_SUCCESS,
        ENTRY_FAILURE,
        ENTRY_ADD_START,
        ENTRY_ADD_SUCCESS,
        ENTRY_ADD_FAILURE,
        ENTRY_DELETE_START,
        ENTRY_DELETE_SUCCESS,
        ENTRY_DELETE_FAILURE } from '../actions/entryActions'
    


const initialState = {  
        entries: [],
        fetchEntries:false,
        deleteEntries:false,
        error: null

}



const entryReducer = (state = initialState, action) => {
     switch (action.type) {
         case ENTRY_START:
            return {
                ...state,
                fetchEntries: true
            }
        case ENTRY_SUCCESS:
            return {
                ...state,
                fetchEntries: false,
                entries: action.payload,
                error: null
            }
        case ENTRY_FAILURE:
            return{
                ...state,
                fetchEntries:false,
                error: action.payload

            }




        case  ENTRY_ADD_START:
            return{
                ...state,
                fetchEntries:true,
                
            }

        case ENTRY_ADD_SUCCESS:
            return{
                ...state,
                fetchEntries: false,
                error: null
            }

            case ENTRY_ADD_FAILURE:
            return{
                ...state,
                fetchEntries: false,
                error: action.payload
            }





            case ENTRY_DELETE_START:
            return {
                ...state,
                deleteEntries: true
            }

            case ENTRY_DELETE_SUCCESS:
            return {
                ...state,
                deleteEntries: false,
                entries: state.entries.filter( entry => action.id !== entryReducer.id ),
                error: null
            }

            case ENTRY_DELETE_FAILURE:
            return{
                ...state,
                deleteEntries:false,
                error: action.payload

            }






            default: 
                return state;
     }
     

}

export default entryReducer;