import templateScore from "./surveyScore.hbs";
import { renderFinalPage } from "../final/final.js";

/**
 * Рендерит главную главную страницу опроса
 * @function
 * @param {Object} questions
 * @param {int} questionId
 * @param {Object} surveyData
 * @return {void}
 */
export function renderSurveyPage(questions, questionId, surveyData) {
  document.getElementById("root").innerHTML = templateScore(
    questions[questionId],
  );

  const scoreElements = document.querySelectorAll(".survey-container__score");
  const nextButton = document.querySelector(".survey-container__button");
  let result;
  scoreElements.forEach((scoreElement) => {
    scoreElement.addEventListener("click", () => {
      if (scoreElement.classList.value === "survey-container__score active") {
        scoreElement.classList.remove("active");
      } else {
        scoreElements.forEach((otherScoreElement) => {
          otherScoreElement.classList.remove("active");
        });
        scoreElement.classList.add("active");
        result = scoreElement.textContent;
      }
    });
  });

  nextButton.addEventListener("click", () => {
    surveyData.statistics.append({
      uuid: questionId[questionId].uuid,
      isAdditional: false,
      score: result,
    });
    if (questionId === questions.length - 1) {
      renderFinalPage(surveyData);
    }
    renderSurveyPage(questions, questionId + 1, surveyData);
  });
}
