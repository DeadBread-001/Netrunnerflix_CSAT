import template from "./main.hbs";
import { renderSurveyPage } from "../survey/survey.js";
import { getPageQuestions } from "../../api/csat.js";

/**
 * Рендерит главную главную страницу опроса
 * @function
 * @param {string} parentPageUrl
 * @return {void}
 */
export function renderMainPage(parentPageUrl) {
  document.getElementById("root").innerHTML = template();

  const startButton = document.querySelector(".survey-container__button");

  startButton.addEventListener("click", () => {
    const questions = getPageQuestions(parentPageUrl);

    renderSurveyPage(questions, 0, {});
  });
}
