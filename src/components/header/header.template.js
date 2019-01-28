import translate from "./../../utils/translate";
import getLink from "./../../utils/getlink";

export default function() {
	return `
      <div class="container-fluid">
        <div class="row">
          <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
              <a class="navbar-brand" href="${getLink("index.html")}">
                <span class="logo-name">${ translate("Фотографы Беларуси") }</span>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="${getLink('index.html')}">${ translate("Главная") }</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="${getLink('all.html')}">${translate("Фотографы")}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link about-us" href="#aboutUs">${translate("O Нас")}</a>
                  </li>
                  <li class="nav-item language-select dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      ${translate("Язык")}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="${getLink(window.location.origin+window.location.pathname, 'ru', true)}">русский</a>
                      <a class="dropdown-item" href="${getLink(window.location.origin+window.location.pathname, 'en', true)}">english</a>
                      <a class="dropdown-item" href="${getLink(window.location.origin+window.location.pathname, 'by', true)}">беларускі</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
  `
}
