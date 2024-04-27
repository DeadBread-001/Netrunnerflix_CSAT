import { renderMainPage } from "./components/main/main.js";
import "../src/index.scss";

window.addEventListener("message", function (event) {
  if ("url" in event.data) {
    const parentPageUrl = event.data.url;
    console.log(parentPageUrl);
  }
});

// renderMainPage(parentPageUrl);
renderMainPage("filmsAll");
