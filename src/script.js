feather.replace()
const resultTextArea = document.getElementById('result');
let isTrue = true;

const insert = (num) => {
  if (isTrue) {
    resultTextArea.innerText += num;
    isTrue = true
  } else {
    resultTextArea.innerText = '';
    resultTextArea.innerText += num;
    isTrue = true;
  }
}

const clean = () => resultTextArea.innerText = '';

const back = () => resultTextArea.innerText = resultTextArea.innerText.substring(0, resultTextArea.innerText.length - 1);

const calculate = () => {
  const result = resultTextArea.innerText
  if (result) {
    resultTextArea.innerText = eval(result)
    isTrue = false;
  }
}