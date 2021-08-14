export const CovidInfoAction = (payload) => {
    return async (dispatch) => {
      var covidResult = [];
      var url = `https://coronavirus-19-api.herokuapp.com/countries/${payload}`;
    
      await fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          covidResult = [data];
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("covid result=", covidResult);
      return dispatch({
        type: "COVID_INFO",
        data: covidResult
      });
    };
  };
  