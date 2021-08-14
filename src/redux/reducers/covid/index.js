const initialState = {
    result: []
  };
  
  const covidReducer = (state = initialState, action) => {
    console.log("action=", action);
    switch (action.type) {
      case "COVID_INFO":
        return { ...state, result: action.data };
      default:
        return state;
    }
  };
  
  export default covidReducer;
  