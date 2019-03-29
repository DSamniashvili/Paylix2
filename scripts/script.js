function changePage1() {
    let firstPage = document.querySelector('.modal-content-1');
    let secondPage = document.querySelector('.modal-content-2');

    // secondPage.classList.add('shown');
    firstPage.classList.add('hidden');
    secondPage.classList.remove('hidden');
}