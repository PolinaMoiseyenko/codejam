import translate from "./../../utils/translate";
export default function() {
	return ` <div class="container py-5">
            <h3 class="footer-area-title">${ translate("Дизайн и разработка") }</h3>
            <div class="row devs">
              <div class="col-12 col-md-3">
                <div class="dev">
                  <img src="./images/devs/kasatka660.jpeg" alt="developer's picture">
                  <div class="dev__info">
                    <span class="dev__name">Alena Khaliauskaya</span><br>
                    dev
                    <div class="dev__contacts">
                      <a href="https://www.github.com/kasatka660" target="_blank" aria-hidden="true" title="kasatka660"><i class="fab fa-github"></i></a>
                      <a href="mailto:lenach241@gmaill.com"><i class="fas fa-at"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="dev">
                  <img src="./images/devs/siarohin.jpeg">
                  <div class="dev__info">
                    <span class="dev__name">Aleksander Seryogin</span><br>
                    dev
                    <div class="dev__contacts">
                      <a href="https://www.github.com/siarohin" target="_blank" aria-hidden="true" title="siarohin"><i class="fab fa-github"></i></a>
                      <a href="mailto:a.siarohin@gmail.com"><i class="fas fa-at"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-3">
                <div class="dev">
                  <img src="./images/devs/polinamoiseyenko.jpeg" alt="developer's picture">
                  <div class="dev__info">
                    <span class="dev__name">Polina Moiseyenko</span><br>
                    dev
                    <div class="dev__contacts">
                      <a href="https://www.github.com/polinamoiseyenko" target="_blank" aria-hidden="true" title="polinamoiseyenko"><i class="fab fa-github"></i></a>
                      <a href="mailto:pmoiseyenko@gmail.com"><i class="fas fa-at"></i></a>
                    </div>
                  </div>
                </div>
              </div>
               <div class="col-12 col-md-3">
                <div class="dev">
                  <img src="./images/devs/vladsemenik.jpeg" alt="developer's picture">
                  <div class="dev__info">
                    <span class="dev__name">Vlad Semenik</span><br>
                    dev
                    <div class="dev__contacts">
                      <a href="https://www.github.com/vladsemenik" target="_blank" aria-hidden="true" title="vladsemenik"><i class="fab fa-github"></i></a>
                     <a href="mailto:vlad.semenik@gmail.com"><i class="fas fa-at"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `
}