import getLink from "./../../utils/getlink";

export default function(person) {
  return `
   <div class="row py-5">
    <div class="col-3">
      <img src=${person.photo} alt="photograph's picture">
    </div>
    <div class="col-9 px-5">
      <h3 class="photograph-name"><a href="${getLink('person.html')}&id=${person.id}">${person.name}</a></h3>
    </div>
  </div>`
}
