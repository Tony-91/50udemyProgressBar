// grabing elements from the DOM
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// next button on click...
next.addEventListener("click", () => {
  currentActive++;

  //   IF statment to not aloow it to go pass 4. circle.length = 4 (we are treating it as an array).
  //   IF... THEN
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  //   on click... 'update' - we define update down below
  update();
});

// prev button on click...
prev.addEventListener("click", () => {
  currentActive--;

  // IF... THEN
  if (currentActive < 1) {
    currentActive = 1;
  }
  //   on click... 'update' - we define update down below
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // css stying in js
  //   blue progress bar
  // 'length' = down-the-list
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
