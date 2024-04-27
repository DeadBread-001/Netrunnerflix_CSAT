import template from "./main.hbs";

/**
 * Рендерит главную главную страницу опроса
 * @function
 * @return {void}
 */
export function renderMainPage() {
  document.getElementById("root").innerHTML = template();
}
