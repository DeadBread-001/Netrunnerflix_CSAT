import { renderMainPage } from "./components/main/main.js";
import "../src/index.scss";

renderMainPage();

window.addEventListener("message", function (event) {
  if ("url" in event.data) {
    const parentPageUrl = event.data.url;
    console.log(parentPageUrl);
  }
});
