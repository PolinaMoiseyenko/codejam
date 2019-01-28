import translate from "./../../utils/translate";
import getLink from "./../../utils/getlink";

export default function authorRender(person) {
  return `<h2 class="content-item-title random-title random-title-author">${ translate("Фотограф дня") }</h2>
          <div class="content-person-img col-lg-3 col-12 artist-img">
              <img class="person-of-day-img" src=${person.photo} alt="photograph's picture">
          </div>
          <h3 class="content-item person-of-day-name"><a href="${getLink('person.html')}&id=${person.id}">${person.name}</a></h3>`


}
