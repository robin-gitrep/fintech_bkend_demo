
let x = "robin";

console.log(`value of x: ${x}`);

function add (a,b)
{ return a+b;}

console.log(`sum ${add(2,3)}`);

//Arrow function
var function_to_print_sum = (a, b) => {
    console.log("a + b = " + (a + b));
  };
  
  function_to_print_sum(4, 4);

  -- Call back functions

  function print_after_operation(a, b, operation) {
    var result = operation(a, b);
    console.log("Result: " + result);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function product(a, b) {
    return a * b;
  }
  
  print_after_operation(3, 4, add);
  print_after_operation(3, 4, product);
  // its a call back function with anonymous block
  print_after_operation(3, 4, (a, b) => {
    return a - b;
  });