import axios from 'axios'


export const receiveItems = (json) =>{
  return {
    type: 'RECEIVE_TERMS',
    terms: json.data.items,
    receivedAt: Date.now()
  }
}

export const fetchItems = (term) => {
  return (dispatch) => {
    return axios.post('http://localhost:3000/search_terms',{term: term})
      .then((json) => {
        dispatch(receiveItems(json))
      })
  }
}
