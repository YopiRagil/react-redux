const { createStore } = require("redux");

initialState = {
  choosenMentees: "Yasin",
  points: 0,
  mentee: [],
};
const reducer = (state = initialState, action) => {
  //   console.log(state);
  if (action.type === "CHOOSE AJAY") {
    return {
      ...state,
      choosenMentees: action.mentee,
    };
  }
  if (action.type === "CHOOSE BAGAS") {
    return {
      ...state,
      choosenMentees: action.mentee,
      points: action.point,
    };
  }
  if (action.type === "CHOOSE ASA") {
    return {
      ...state,
      choosenMentees: action.mentee,
    };
  }
};

// action
const chooseAjay = { type: "CHOOSE AJAY", mentee: "Ajay" };
const chooseBagas = { type: "CHOOSE BAGAS", mentee: "Bagas", point: 100 };
const chooseAsa = { type: "CHOOSE ASA", mentee: "Asa" };

// create store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(chooseAjay);
// chooseBagas merubah chooseAjay
store.dispatch(chooseBagas);
store.dispatch(chooseAsa);
