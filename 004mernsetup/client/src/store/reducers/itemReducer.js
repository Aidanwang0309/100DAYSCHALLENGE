import uuid from "uuid";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: false
};

const fetchItems = (state, action) => {
  return {
    ...state,
    items: action.payload,
    loading: false
  };
};

const addItem = (state, action) => {
  return {
    ...state,
    items: [action.payload, ...state.items]
  };
};

const deleteItem = (state, action) => {
  return {
    ...state,
    items: state.items.filter(item => item._id !== action.payload)
  };
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return fetchItems(state, action);
    case ADD_ITEM:
      return addItem(state, action);
    case DELETE_ITEM:
      return deleteItem(state, action);
    // case ITEMS_LOADING:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    default:
      return state;
  }
};

export default itemReducer;
