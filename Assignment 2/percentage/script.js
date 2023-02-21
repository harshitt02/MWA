function genfields() {
  let course_nums = document.getElementById("course_nums").value;

  let coursevalues = document.getElementById("course_values");

  coursevalues.innerHTML = "";
  document.getElementById("calc-button").disabled = false;

  for (let i = 1; i <= course_nums; i++) {
    let courseInput = document.createElement("input");
    courseInput.setAttribute("type", "number");
    courseInput.setAttribute("name", "course-" + i);
    coursevalues.appendChild(
      document.createTextNode("Course " + i + " marks: ")
    );
    coursevalues.appendChild(courseInput);
    coursevalues.appendChild(document.createElement("br"));
  }
}

function totalpercent() {
  let courseForm = document.getElementById("course_form");
  let course_nums = document.getElementById("course_nums").value;

  let totalMarks = 0;
  for (let i = 1; i <= course_nums; i++) {
    let courseMarks = parseInt(courseForm["course-" + i].value);
    totalMarks += courseMarks;
  }

  let percentage = totalMarks / course_nums;

  let result = document.getElementById("result");
  result.innerHTML = "";
  let resultText = document.createTextNode(
    "Percentage: " + percentage.toFixed(2) + "%"
  );
  result.appendChild(resultText);
}
