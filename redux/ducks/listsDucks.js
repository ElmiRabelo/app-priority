//TYPES
export const Types = {
  GET_LISTS_REQUEST: "lists/GET_LISTS_REQUEST"
};

//REDUCER
const initialState = {
  loading: false,
  data: [
    { title: "Minhas tarefas", key: "1" },
    { title: "Minhas compras", key: "2" }
  ]
};

export default function lists(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// CREATORS
