import template from "./survey.hbs";

/**
 * Рендерит главную главную страницу опроса
 * @function
 * @return {void}
 */
export function renderSurveyPage() {
  document.getElementById("root").innerHTML = template();
}
