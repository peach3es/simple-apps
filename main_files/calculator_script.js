const keys = document.querySelectorAll(".key");
const display_input = document.querySelector(".display .input");
const display_output = document.querySelector(".display .output");
// const display_error = document.querySelector('.display_error');

let input = "";

for (let key of keys) {
  const value = key.dataset.key;

  key.addEventListener("click", () => {
    if (value == "clear") {
      input = "";
      display_input.innerHTML = "";
      display_output.innerHTML = "";
    } else if (value == "lineclear") {
      input = input.slice(0, -1);
      display_input.innerHTML = CleanInput(input);
    } else if (value == "=") {
      let result = eval(input);
      display_output.innerHTML = result;
    } else if (value == "brackets") {
      if (
        input.indexOf("(") == -1 ||
        (input.indexOf("(") != -1 &&
          input.indexOf(")") != -1 &&
          input.lastIndexOf("(") < input.lastIndexOf(")"))
      ) {
        input += "(";
      } else if (
        (input.indexOf("(") != -1 && input.indexOf(")") == -1) ||
        (input.indexOf("(") != -1 &&
          input.indexOf(")") != -1 &&
          input.lastIndexOf("(") > input.lastIndexOf(")"))
      ) {
        input += ")";
      }

      display_input.innerHTML = CleanInput(input);
    } else {
      input += value;
      display_input.innerHTML = CleanInput(input);
    }
  });
}

function CleanInput(input) {
  let input_array = input.split("");
  let inptu_array_length = input_array.length;

  for (let i = 0; i < inptu_array_length; i++) {
    if (input_array[i] == "*") {
      input_array[i] = `<span class = "operator"> &times; </span>`;
    } else if (input_array[i] == "/") {
      input_array[i] = `<span class = "operator"> &divide; </span>`;
    } else if (input_array[i] == "+") {
      input_array[i] = `<span class = "operator"> &plus; </span>`;
    } else if (input_array[i] == "-") {
      input_array[i] = `<span class = "operator"> &minus; </span>`;
    } else if (input_array[i] == "(") {
      input_array[i] = `<span class = "brackets">(</span>`;
    } else if (input_array[i] == ")") {
      input_array[i] = `<span class = "brackets">)</span>`;
    } else if (input_array[i] == "%") {
      input_array[i] = `<span class = "%">&percnt; </span>`;
    }
  }
  return input_array.join("");
}
