import axios from "axios";

export const START_FETCHING = "THAT's SO FETCH";
export const FETCH_SUCCESS = "NOT EVEN USING THIS LOL";
export const FETCH_FAILURE = "SO MUCH FOR FRIDAYS PROJECT";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }));
};
