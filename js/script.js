let $ = document;
let stepsElem = $.querySelectorAll(".step_body");
let progressLineEelms = $.querySelectorAll(".progress_line_body");
let statusIconsElem = $.querySelectorAll(".status_icon");
let nextStepElem = $.getElementById("next_step");
let resetBtn = $.getElementById("reset");
let stepLocatin = -1;


// Go to the next steps 
nextStepElem.addEventListener("click", () => {
    if (stepLocatin != 3) {
      stepLocatin++;
  
      stepsElem[stepLocatin].classList.remove("current_step");
      stepsElem[stepLocatin].classList.add("checked_step");
  
      statusIconsElem[stepLocatin].classList.remove("current_step_icon");
      statusIconsElem[stepLocatin].classList.add("check_icon");
  
      if (stepLocatin !== 3) {
        progressLineEelms[stepLocatin].classList.remove("Unchecked_line");
        progressLineEelms[stepLocatin].classList.add("checked_line");
  
        stepsElem[stepLocatin + 1].classList.remove("next_step");
        stepsElem[stepLocatin + 1].classList.add("current_step");
  
        statusIconsElem[stepLocatin + 1].classList.remove("next_step_icon");
        statusIconsElem[stepLocatin + 1].classList.add("current_step_icon");
  
      }
    }
  });
  // reset steps & lines
resetBtn.addEventListener("click", () => {
    stepLocatin = -1;
   
    stepsElem.forEach((stepElem) => {
      stepElem.classList.remove("checked_step");
      stepElem.classList.add("next_step");
    });
  
    progressLineEelms.forEach((lineElem) => {
      lineElem.classList.remove("checked_line");
      lineElem.classList.add("Unchecked_line");
    });
  
    statusIconsElem.forEach((iconElem) => {
      iconElem.classList.remove("check_icon");
      iconElem.classList.add("next_step_icon");
    });
  // first step classes
    stepsElem[0].classList.remove("next_step");
    stepsElem[0].classList.add("current_step");
  
    statusIconsElem[0].classList.remove("next_step_icon");
    statusIconsElem[0].classList.add("current_step_icon");
  });