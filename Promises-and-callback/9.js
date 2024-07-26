const fetchData = (API) => {
  fetch(API)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Please Check Your Internet Connection!");
      } else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("Error occured!");
      console.log(err);

      let paragraph = document.createElement("p");
      paragraph.textContent =
        "An error is occuring while displaying data on web.";
      document.body.append(paragraph);
    });
};

fetchData("https://jsonplaceholder.typicode.com/posts/123456789");
