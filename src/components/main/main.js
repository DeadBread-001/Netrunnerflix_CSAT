import template from "./main.hbs";
import { renderSurveyPage } from "../survey/survey.js";

/**
 * Рендерит главную главную страницу опроса
 * @function
 * @return {void}
 */
export function renderMainPage() {
  document.getElementById("root").innerHTML = template();

  const startButton = document.querySelector(".survey-container__button");

  startButton.addEventListener("click", () => {
    renderSurveyPage();
  });
}
