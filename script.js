if (
  navigator.userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
  )
) {
  alert("This website is not intended for mobile devices! View on a computer!");
}
function showTime() {
  const timeNow = new Date().toLocaleTimeString();
  document.getElementById("clock").textContent = timeNow;
}
setInterval(showTime, 1000);
