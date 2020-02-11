'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;

  function countUp() {
    const d = new Date(Date.now() - startTime);
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms = d.getMilliseconds();
    timer.textContent = '${m}:${s}.${ms}';

    setTimeout(() => {
      countUp();
    }, 10);
  }

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });
}