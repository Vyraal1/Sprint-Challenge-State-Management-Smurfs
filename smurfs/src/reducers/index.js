import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    },
    {
      name: "abyssal whip",
      age: 2,
      height: "14cm",
      id: 1
    },
    {
      name: "trident of the seas",
      age: 14,
      height: "7cm",
      id: 2
    }
  ],
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS:
      return { ...state, smurfs: action.payload };
    case FETCH_FAILURE:
      console.log("if you see this, the sprint went horribly wrong");
      return state;
    default:
      return state;
  }
};

export default reducer;
