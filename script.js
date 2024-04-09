const coin = document.querySelector('#coin');
const button = document.getElementById('container');
const status = document.querySelector('#status');

function deferFn(callback, ms){
  setTimeout(callback, ms);
}

function processResult(result) {
  status.innerText = result.toUpperCase();
}

function flipCoin(){
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
  deferFn(function(){
    coin.setAttribute('class', 'animate-' + result);
    console.log(coin.classList)
    deferFn(processResult.bind(null, result), 2900);
  }, 100);
}

button.addEventListener('click', flipCoin)