let arguments = process.argv.slice(2);
const newArray = [];

const buildArray = (array) => {
  for (let e of array) {
    if(parseInt(e) !== NaN && parseInt(e) > 0) {
      newArray.push(e);
    };
  };
  return newArray;
}

arguments = buildArray(arguments);
arguments.sort((a, b) => a - b);

for (let delay of arguments) {
  setTimeout( () => process.stdout.write(`beep ${delay} \n`), delay * 1000);
};
