function greet(name) {
  return new Promise((resolve) => {
    const greeting = `Hello ${name}!`;
    resolve(greeting);
  });
}

greet("John").then((message) => console.log(message));
