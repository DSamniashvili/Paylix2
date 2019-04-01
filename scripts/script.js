function changePage1() {
    let firstPage = document.querySelector('.modal-content-1');
    let secondPage = document.querySelector('.modal-content-2');

    firstPage.classList.add('hidden');
    secondPage.classList.remove('hidden');
}

function changePage2() {
    let second = document.querySelector('.modal-content-2');
    let third =  document.querySelector('.modal-content-3');

    second.classList.add('hidden');
    third.classList.remove('hidden');
}

function changePage3() {
    let secondPage = document.querySelector('.modal-content-2');
    let fourthPage = document.querySelector('.modal-content-4');

    secondPage.classList.add('hidden');
    fourthPage.classList.remove('hidden');

}

function showDeclined() {
    let fourthPage = document.querySelector('.modal-content-4');
    let fifthPage = document.querySelector('.modal-content-5');

    fourthPage.classList.add('hidden');
    fifthPage.classList.remove('hidden');
}
