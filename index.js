const body = document.querySelector('body');

const grid = document.querySelector('.grid-icon');

const gridMenu = document.querySelector('.grid-menu');

const form = document.querySelector('form');

const search = document.querySelector('#search-bar-text');

const mic = document.querySelector('.search-mic');
const micText = document.querySelector('#searchby-text-1');

const camera = document.querySelector('.search-lens');
const cameraText = document.querySelector('#searchby-text-2');

grid.addEventListener('click', (e) => {
    // gridMenu.style.visibility = (gridMenu.style.visibility == 'hidden') ? 'visible' : 'hidden';
    gridMenu.classList.toggle('hide');
    e.stopPropagation();
})

body.addEventListener('click', () => {
    gridMenu.classList.add('hide');
})

mic.addEventListener('mouseenter', () => {
    micText.classList.remove('hide');
})

mic.addEventListener('mouseleave', () => {
    micText.classList.add('hide');
})

mic.addEventListener('click', () => {
    alert("www.google.co.in wants to use your microphone.")
})

camera.addEventListener('mouseenter', () => {
    cameraText.classList.remove('hide');
})

camera.addEventListener('mouseleave', () => {
    cameraText.classList.add('hide');
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchData = search.value;
    console.log(searchData);
    location.href = `https://www.google.com/search?q=${searchData}&sxsrf=APwXEdfRzt28vl-5-hc8DqFBqnsZuIw6zg%3A1681978287354&ei=r_NAZJyfFamhseMP_sWnuAQ&gs_ssp=eJzj4tLP1TfIyK1MKy5TYDRgdGDw4khLTE5Nys_PBgBmYAfL&oq=fac&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMgQIIxAnMhMILhCDARDHARCxAxDRAxCKBRBDMg0IABCKBRCxAxCDARBDMgcIABCKBRBDMgcIABCKBRBDMg0IABCKBRCxAxCDARBDMgoIABCKBRCxAxBDMggIABCABBCxAzILCAAQgAQQsQMQgwEyCggAEIoFELEDEEM6EQguEIMBEMcBELEDENEDEIAEOhEILhCABBCxAxCDARDHARDRAzoICC4QgAQQsQM6DgguEIAEELEDEIMBENQCOgoILhCKBRDUAhBDOg0ILhCKBRCxAxCDARBDOgoILhCKBRCxAxBDOg0ILhCKBRDHARDRAxBDOhMILhCKBRCxAxCDARDHARDRAxBDOhAILhCKBRCxAxCDARDUAhBDOh4ILhCDARDHARCxAxDRAxCKBRBDENwEEN4EEOAEGAFKBAhBGABQAFiVEmDfHWgAcAB4AIAB7gGIAa8HkgEFMC4zLjKYAQCgAQHAAQHaAQYIARABGBQ&sclient=gws-wiz-serp`;
})