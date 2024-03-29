
var answers = ["A", "B", "C", "D","A", "B", "C", "D","A", "B", "C", "D"],
  tot = answers.length;

function getCheckedValue(radioName) {
  var radios = document.getElementsByName(name); // Get radio group by-name
  for (var y = 0; y < radios.length; y++)
    if (radios[y].checked) return radios[y].value; // return the checked value
}

function getScore() {
  var score = 0;
  for (var i = 0; i < tot; i++)
    if (getCheckedValue("question" + i) === answers[i]) score += 1; // increment only
  return score;
}

function returnScore() {
  document.getElementById("myresults").innerHTML =
    "Your score is " + getScore() + "/" + tot;
}
