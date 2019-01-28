import translate from '../../utils/translate';

export default function (person) {
  return `<section class="content-section content-person-row main-row container d-flex flex-column align-items-center">
                <section class="row artist-page-content content-person-area about-area">
                    <div class="content-person-img col-md-3 col-12 artist-img">
                        <img class="person-img" src=${person.photo} alt="photograph's picture">
                    </div>
                    <div class="col-md-9 col-12 artist-intro">
                        <h1 class="content-person-title about-title section-title">${person.name}</h1>
                               <article class="content-person-item">${person.description}</article>
                        <!-- Start video overlay -->
                        <div class="overlay-video">
                            <div class="video-wrapper-ext">
                                <div class="video-wrapper">
                                    <div class="overlay-video-close"></div>
                                    <iframe class="overlay-video-player" src="" frameborder="0"
                                    allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <button data-url="${person.video}" class="content-person-video
                        js-overlay-start btn btn-light mt-3">${translate('Видео')}</button>
                        <!-- End video overlay -->
                    </div>
                </section>
                <section class="content-person-area timeline-area">
                    <h2 class="content-person-title timeline-title section-title border-bottom border-light mt-5">
                    ${translate('История жизни')}</h2>
                    <ul class="timeline">
                    ${person.biography.map(item => `
                        <li>
                          <time>${item.date}</time>
                          <p>${item.content}</p>
                        </li>`).join('')}     
                    </ul>
                </section>
            </section>
                ${person.works.length > 0 ? `
                  <section class="content-section container content-person-area activity-area">
                    <h2 class="content-person-title activity-title section-title pb-2 border-bottom border-light">
                    ${translate('Достижения')}</h2>
                ${person.works.map(work => `<article class="activity-person-item">
                                            <!-- <time class="activity-person-time"></time>-->
                                            <p class="activity-person-paragraph">${work}</p>
                                            </article>`).join('')}
            </section>` : ''}            
            <section class="content-section container content-person-row gallery-row">
            </section>
            <section class="content-section container content-person-row geo-row">                
            </section> `;
}
