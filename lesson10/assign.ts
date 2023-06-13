// 1번
let images = document.querySelector('#image');

if (images instanceof HTMLImageElement){
    images.src = 'new.jpg'
}

// 2번
let links = document.querySelectorAll('.naver');
links.forEach((a) => {
if (a instanceof HTMLAnchorElement){
    a.href = "https://kakao.com"
}
})