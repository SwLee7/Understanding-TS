// 1번
var images = document.querySelector('#image');
if (images instanceof HTMLImageElement) {
    images.src = 'new.jpg';
}
// 2번
var links = document.querySelectorAll('.naver');
links.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
