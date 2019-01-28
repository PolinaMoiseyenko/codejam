import $ from 'jquery';
import pause from '../../utils/timeout';
import './index.scss';

const contoller = () => {
  // video overlay: start =============================

  $('.js-overlay-start').on('click', function startOverlay(event) {
    event.preventDefault();

    const src = $(this).attr('data-url');
    $('.overlay-video').show();

    const startVideo = async () => {
      await pause(100);
      $('.overlay-video').addClass('o1');
      $('.overlay-video-player').attr('src', src);
    };

    startVideo();
  });

  // video overlay: close =============================

  $('.overlay-video').on('click', (event) => {
    event.preventDefault();

    if (!$(event.target).closest('.video-wrapper-ext').length
    || event.target.className === 'overlay-video-close') {
      const PlayingVideoSrc = $('.overlay-video-player').attr('src').replace('&autoplay=1', '');

      $('.overlay-video-player').attr('src', PlayingVideoSrc);
      $('.overlay-video').removeClass('o1');

      const closeModal = async () => {
        await pause(600);
        $('.overlay-video').hide();
      };

      closeModal();
    }
  });
};

export default contoller;
