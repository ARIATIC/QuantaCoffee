var link = document.querySelector('link[rel="import"]').import;

function cargarElementos() {

    cargarHeader();
    //cargarNav();
    cargarFooter();
    //cargarPopups();
}

function cargarHeader() {
    document.getElementById('header').innerHTML = link.querySelector('#headerI').innerHTML;
}

function cargarNav() {
    document.getElementById('nav').innerHTML = link.querySelector('#navI').innerHTML;
}

function cargarFooter() {
    document.getElementById('footer').innerHTML = link.querySelector('#footerI').innerHTML;
}

function cargarPopups() {
    document.getElementById('popups').innerHTML = link.import.querySelector('#popupsI').innerHTML;

}
