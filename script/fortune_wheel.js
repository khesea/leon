let container = document.querySelector('.fortune_wheel');
let btn = document.getElementById('spin');
let numbers = [];

let popup = document.querySelector('#popup');
let popupLose = document.querySelector('#popupLose');

function Spin() {
  number = Math.ceil(Math.random()*50);
  container.style.transform = "rotate(" + 45*number + "deg)";
  numbers.push(number);
  let total = numbers.reduce(function(total, current) {
    return total + current;
  }, 0)
  console.log(total);

  btn.removeAttribute("onclick");

  if (total % 2 == 0) {
      function showPopupLose() {
        function showBlock() {
          popupLose.classList.add('b-show');
        }
        showBlock();
        btn.setAttribute("onclick", "Spin()");
      }
      let timeoutID = setTimeout(showPopupLose, 10500);
    } else {
        function showPopup() {
          function showBlock() {
            popup.classList.add('b-show');
          }
          showBlock();
          btn.setAttribute("onclick", "Spin()");
        }
        let timeoutID = setTimeout(showPopup, 10500);
      }
    }

function removePopup() {
  popup.classList.remove('b-show');
}
function removePopupLose() {
  popupLose.classList.remove('b-show');
}
