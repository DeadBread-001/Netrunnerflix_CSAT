import templateScore from "./surveyScore.hbs";
import templateChoice from "./surveyChoice.hbs";
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
  const isChoice = questions[questionId].questionType;

  if (!isChoice) {
    document.getElementById("root").innerHTML = templateScore();

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
      surveyData.append({
        uuid: questionId[questionId].uuid,
        score: result,
      });
      if (questionId === questions.length - 1) {
        renderFinalPage(surveyData);
      }
      renderSurveyPage(questions, questionId + 1, surveyData);
    });
  } else {
    document.getElementById("root").innerHTML = templateChoice();

    const choiceElements = document.querySelectorAll(
      ".survey-container__choice",
    );
    const nextButton = document.querySelector(".survey-container__button");
    let result;

    choiceElements.forEach((choiceElement, index) => {
      choiceElement.addEventListener("click", () => {
        if (
          choiceElement.classList.value === "survey-container__choice active"
        ) {
          choiceElement.classList.remove("active");
        } else {
          choiceElements.forEach((otherChoiceElement) => {
            otherChoiceElement.classList.remove("active");
          });
          result = index;
          choiceElement.classList.add("active");
        }
      });
    });

    nextButton.addEventListener("click", () => {
      surveyData.append({
        uuid: questionId[questionId].uuid,
        score: result,
      });
      if (questionId === questions.length - 1) {
        renderFinalPage(surveyData);
      }
      renderSurveyPage(questions, questionId + 1, surveyData);
    });
  }
}
