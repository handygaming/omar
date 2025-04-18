let age = document.querySelector("span");
setTimeout(function () {
  let count = setInterval(() => {
    age.textContent++;
    if (age.textContent == 16) {
      clearInterval(count);
    }
  }, 100);
}, 2000);
