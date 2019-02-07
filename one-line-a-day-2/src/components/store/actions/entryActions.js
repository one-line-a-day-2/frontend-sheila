//deleting a card ..adding a card 


export const createEntry = (entry) => {
    return (dispatch, getState) => {

//make async call to database

       dispatch({ type: 'CREATE_PROJECT, entry'}) 
    }
}
