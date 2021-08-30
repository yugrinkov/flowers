console.log("Load script.js");

function getMoreButtonPopupElement () {
    return document.getElementsByClassName('jsMoreButtonPopup')[0];
}

function getMoreButtonElement () {
    return document.getElementsByClassName('jsMoreButton')[0];
}

document.getElementsByClassName('jsMoreButton')[0].addEventListener('click', function (event) {
    event.stopPropagation();
    var moreButtonPopupElement = getMoreButtonPopupElement();
    var moreButtonElement = getMoreButtonElement();
    moreButtonPopupElement.classList.remove('hide');
    moreButtonElement.classList.add('active');
})

document.addEventListener("click", function () {
    var moreButtonPopupElement = getMoreButtonPopupElement();
    var moreButtonElement = getMoreButtonElement();
    moreButtonPopupElement.classList.add('hide');
    moreButtonElement.classList.remove('active');
})
