const fetchAndConsole = (API) => {
  fetch(API)
    .then((response) => {
      if (!response.ok) {
        throw Error("Please Check Your Internet Connection!");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`Error occured!`);
      console.log(err);
    });
};

fetchAndConsole("https://jsonplaceholder.typicode.com/posts");
