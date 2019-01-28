import animateScrollTo from 'animated-scroll-to';

const scrollTo = (sourceTag, targetTag) => {
  window.onload = () => {
    const source = document.querySelector(sourceTag);
    source.addEventListener('click', () => {
      animateScrollTo(document.querySelector(targetTag));
    });
  };
};

export default scrollTo;
