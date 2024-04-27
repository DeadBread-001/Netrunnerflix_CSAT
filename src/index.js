import { renderMainPage } from "./components/main/main.js";
import "../src/index.scss";

let parentPageUrl;
window.addEventListener("message", function (event) {
  if ("url" in event.data) {
    parentPageUrl = event.data.url;
    if (parentPageUrl.includes("/profile")) {
      renderMainPage("profileData");
    } else if (parentPageUrl.includes("/actor/")) {
      renderMainPage("actorData");
    } else if (
      parentPageUrl === "http://94.139.247.246:8080/" ||
      parentPageUrl === "http://94.139.247.246:8080"
    ) {
      renderMainPage("filmsAll");
    } else if (parentPageUrl.includes("/film/")) {
      renderMainPage("filmData");
    }
  }
});
