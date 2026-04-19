const attendanceRate = document.querySelector("#attendanceRate");
const accuracyScore = document.querySelector("#accuracyScore");
const streakDays = document.querySelector("#streakDays");

const stats = {
  attendance: 98,
  accuracy: 92,
  streak: 24,
};

function animateValue(element, start, end, duration) {
  const range = end - start;
  const startTime = performance.now();

  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.round(start + range * progress);
    element.textContent = `${value}%`.replace("%%", "%");
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

animateValue(attendanceRate, 0, stats.attendance, 900);
animateValue(accuracyScore, 0, stats.accuracy, 1100);

let flamePulse = 0;
function pulseFlame() {
  flamePulse = flamePulse === 0 ? 1 : 0;
  document.querySelector(".flame").style.opacity = flamePulse ? "0.7" : "1";
}
setInterval(pulseFlame, 800);
streakDays.textContent = stats.streak;
