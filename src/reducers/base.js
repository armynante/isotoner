const initialState = {
  items: [1,2,3,4,5]
}

const base = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_ITEMS':
          return Object.assign({}, state, {
            isFetching: false,
            items: action.items
          })
        default:
            return state;
    }
};


export { base }
