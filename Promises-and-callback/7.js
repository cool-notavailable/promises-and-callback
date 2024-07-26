async function fetchAndCombine(api1, api2) {
  try {
    let todoresponse = await fetch(api1);
    let postresponse = await fetch(api2);

    let todoData = await todoresponse.json();
    let postData = await postresponse.json();

    const fetchedResult = {
      todo: todoData,
      post: postData,
    };
    console.log(fetchedResult);
  } catch (err) {
    console.log(`Error occured!`);
    console.log(err);
  }
}

fetchAndCombine(
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/posts/1"
);
