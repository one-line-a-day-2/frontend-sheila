
const initialState = {

    entries: [
        {id: '0', title: 'I went to Paris', content: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of Lorem Ipsum.'},

        {id: '1', title: 'I went to Thailand', content: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of Lorem Ipsum.'},

        {id: '2', title: 'I went to Japan', content: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of Lorem Ipsum.'}
    ]

}



const entryReducer = (state = initialState, action) => {
     switch (action.type) {
         case 'CREATE_ENTRY':
            console.log('created entry', action.entry)
     }
    return state

}

export default entryReducer;