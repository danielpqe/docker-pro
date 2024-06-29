const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const operation = (option) => {
  switch (option) {
    case "sum":
      return sum;
    case "sub":
      return sub;
    case "mul":
      return mul;
    case "div":
      return div;
    default:
      return "Invalid option";
  }
};

const operator = operation.bind(this, "mul")();
console.log(operator(+process.argv[2], +process.argv[3]));
