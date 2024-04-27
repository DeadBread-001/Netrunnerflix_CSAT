import { fetchRequest, IP } from "./fetch.js";

/**
 * Получает данные о фильме по его идентификатору.
 * @param {string} pageUrl - Ссылка на страницу
 * @return {Promise<object>} - Возвращает объект с данными о вопросах.
 */
export async function getPageQuestions(pageUrl) {
  try {
    const response = await fetchRequest(
      `${IP}/csat/questions/get?p=${pageUrl}`,
      "GET",
    );
    const questionsData = await response.json();

    if (!questionsData || typeof questionsData !== "object") {
      throw new Error("Ошибка: полученные данные не являются объектом");
    }

    return questionsData.questions;
  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  }
}

/**
 * Получает данные о фильме по его идентификатору.
 * @param {Object} data - Ссылка на страницу
 * @return {Promise<object>} - Возвращает объект с данными о вопросах.
 */
export async function addToStatistic(data) {
  try {
    const response = await fetchRequest(`${IP}/csat/stat/add`, "POST", data);
    const responseData = await response.json();

    if (!responseData || typeof responseData !== "object") {
      throw new Error("Ошибка: полученные данные не являются объектом");
    }

    return responseData.status === 200;
  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  }
}
