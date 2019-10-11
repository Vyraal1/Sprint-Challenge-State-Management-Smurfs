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
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
