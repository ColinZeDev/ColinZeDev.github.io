function gethowlongago(year) {
    const currentYear = new Date().getFullYear();
    return currentYear - parseInt(year, 10);
}

window.addEventListener('DOMContentLoaded', () => {
    const i = document.getElementById('coding-years-ago');
    i.innerHTML = `(I have been coding for over <b>${gethowlongago('2021')}</b> years)`;
});