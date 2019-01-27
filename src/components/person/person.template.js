export default function(person) {
  return `<section class="content-section content-person-row main-row container d-flex flex-column align-items-center">
                <section class="row artist-page-content content-person-area about-area">
                    <div class="content-person-img col-3 artist-img">
                        <img class="person-img" src=${person.photo} alt="photograph's picture">
                    </div>
                    <div class="col-9 artist-intro">
                        <h1 class="content-person-title about-title section-title">${person.name}</h1>
                        <article class="content-person-item">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</article>
                        <!-- Start video overlay -->
                        <div class="overlay-video">
                            <div class="video-wrapper-ext">
                                <div class="video-wrapper">
                                    <div class="overlay-video-close"></div>
                                    <iframe class="overlay-video-player" src="" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <button data-url="${person.video}" class="content-person-video js-overlay-start btn btn-light mt-3">Видео</button>
                        <!-- End video overlay -->
                    </div>
                </section>
                <!-- Right 2/3 -->
                <section class="content-person-area timeline-area">
                    <h2 class="content-person-title timeline-title section-title border-bottom border-light mt-5">Timeline</h2>
                    <ul class="timeline">
                    ${person.biography.map(item => `
                        <li>
                          <time>${item.date}</time>
                          <p>${item.content}</p>
                        </li>`).join('')}     
                    </ul>
                </section>
            </section>

            <section class="content-section container content-person-area activity-area">
                <h2 class="content-person-title activity-title section-title pb-2 border-bottom border-light">Достижения</h2>
                ${person.works.map(work => 
                `<article class="activity-person-item">
                    <!-- <time class="activity-person-time"></time>-->
                    <p class="activity-person-paragraph">${work}</p>
                </article>`).join('')}
            </section>
            <section class="content-section container content-person-row gallery-row">
                <!-- Width 100% -->
                <!-- Start Gallery here -->

                <!-- End Gallery -->
            </section>
            <section class="content-section container content-person-row geo-row">
                <!-- Start Gallery here -->


                <!-- End Gallery -->
            </section> `
}
