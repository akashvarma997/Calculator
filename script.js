// Todo: Make M+ M- and MC functional
const arr = [];
let index = 0;
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
      string = ""
      document.querySelector('input').value = string;
    }

    else if (e.target.innerHTML == 'M+') {
      arr[index] = string;
      index++;
      string = ''
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'Ans') {
      if (index <= 0) {
        document.querySelector('input').value = string;
        window.alert('Nothing in the temporary Memory!')
      } else {
        string += arr[index - 1]
        document.querySelector('input').value = string;
      }
    }
    else if (e.target.innerHTML == 'M-') {
      arr.pop();
      index--;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})
