import templateScore from "./surveyScore.hbs";
import templateChoice from "./surveyChoice.hbs";

/**
 * Рендерит главную главную страницу опроса
 * @function
 * @param {string} isChoice
 * @return {void}
 */
export function renderSurveyPage(isChoice) {
  if (!isChoice) {
    document.getElementById("root").innerHTML = templateScore();

    const scoreElements = document.querySelectorAll(".survey-container__score");
    const nextButton = document.querySelector(".survey-container__button");
    scoreElements.forEach((scoreElement) => {
      scoreElement.addEventListener("click", () => {
        if (scoreElement.classList.value === "survey-container__score active") {
          scoreElement.classList.remove("active");
        } else {
          scoreElements.forEach((otherScoreElement) => {
            otherScoreElement.classList.remove("active");
          });
          scoreElement.classList.add("active");
        }
      });
    });

    nextButton.addEventListener("click", () => {
      renderSurveyPage(true);
    });
  } else {
    document.getElementById("root").innerHTML = templateChoice();

    const choiceElements = document.querySelectorAll(
      ".survey-container__choice",
    );

    choiceElements.forEach((choiceElement) => {
      choiceElement.addEventListener("click", () => {
        if (
          choiceElement.classList.value === "survey-container__choice active"
        ) {
          choiceElement.classList.remove("active");
        } else {
          choiceElements.forEach((otherChoiceElement) => {
            otherChoiceElement.classList.remove("active");
          });
          choiceElement.classList.add("active");
        }
      });
    });
  }
}
