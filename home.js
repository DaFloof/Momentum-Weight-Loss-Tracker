const profileIcon = document.querySelector('.profile-icon')
const loaderRing = document.querySelector('.loader-ring')
const loaderText = document.querySelector('.loader')
const loaderWrapper = document.querySelector('.loader-wrapper')

window.addEventListener('load', () => {
    function randomTime(min, max) {
  min = Math.ceil(min); // Ensure min is a whole number
  max = Math.floor(max); // Ensure max is a whole number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
    let delay = randomTime(1500, 2500);

    setTimeout(() => {
        loaderRing.style.display = 'none'
        loaderText.style.display = 'none'
        loaderWrapper.style.display = 'none'
    }, delay)
});
