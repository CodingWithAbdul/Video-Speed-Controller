const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");

speed.addEventListener("mousemove", function (e) {
  // console.log(e);
  const y = e.pageY - this.offsetTop;
  // console.log(y);
  const percent = y / this.offsetHeight;
  // console.log(percent);
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  // console.log(height);
  const playBackSpeed = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playBackSpeed.toFixed(2) + "X";
  video.playbackRate = playBackSpeed;
});
