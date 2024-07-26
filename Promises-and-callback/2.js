const manipulateString = (str, callback) => {
  return callback(str.toUpperCase());
};

const logString = (capitalizeString) => {
  console.log(`The manipulated string is : ${capitalizeString}`);
};

manipulateString("text", logString);
