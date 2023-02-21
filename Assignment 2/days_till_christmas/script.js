function calculateDays() {
  const today = new Date();
  const christmas_date = new Date(today.getFullYear(), 11, 25);
  let convertedtime = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil(
    (christmas_date.getTime() - today.getTime()) / convertedtime
  );
  document.getElementById("curr_date").innerHTML = `Today's time: ${today}`;
  document.getElementById(
    "result"
  ).innerHTML = `There are ${daysLeft} days left until Christmas.`;
}
