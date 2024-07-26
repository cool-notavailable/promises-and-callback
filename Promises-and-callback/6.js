const fetchData = (API) => {
  fetch(API)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    });
};

fetchData("https://jsonplaceholder.typicode.com/todos/1");
