import translate from "./../../utils/translate";

export default function() {
	return `
      <div class="container-fluid">
        <div class="row">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="index.html">
              <h1>${ translate("Фотографы Беларуси") }</h1>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">${ translate("Главная") }</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="all.html">${translate("Фотографы")}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#aboutUs">${translate("O Нас")}</a>
                </li>
                <li class="nav-item language-select dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ${translate("Язык")}
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="${window.location.origin+window.location.pathname}?lang=ru">русский</a>
                    <a class="dropdown-item" href="${window.location.origin+window.location.pathname}?lang=en">english</a>
                    <a class="dropdown-item" href="${window.location.origin+window.location.pathname}?lang=by">беларускі</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
  `
}