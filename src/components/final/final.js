import template from "./final.hbs";
import { addToStatistic } from "../../api/csat.js";

/**
 * Рендерит главную главную страницу опроса
 * @function
 * @param {Object} surveyData
 * @return {void}
 */
export function renderFinalPage(surveyData) {
  document.getElementById("root").innerHTML = template();

  addToStatistic(surveyData);
}
