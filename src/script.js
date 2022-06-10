feather.replace()
const resultTextArea = document.getElementById('result');

const insert = (num) => resultTextArea.innerText += num

const clean = () => resultTextArea.innerText = '';

const back = () => resultTextArea.innerText = resultTextArea.innerText.substring(0, resultTextArea.innerText.length - 1);

const calculate = () => {
  const result = resultTextArea.innerText
  if (result) {
    resultTextArea.innerText = eval(result)
  }
}