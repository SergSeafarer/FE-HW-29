const blockRef = document.querySelector('.block');
const bodyRef = document.querySelector('.parent');
const messageRef = document.querySelector('.message');

let blockInitialX = (bodyRef.clientWidth - blockRef.clientWidth) / 2;
let blockInitialY = (bodyRef.clientHeight - blockRef.clientHeight) / 2;

let blockCurrentY = blockInitialY;
let blockCurrentX = blockInitialX;

blockRef.style.left = blockCurrentX + 'px';
blockRef.style.top = blockCurrentY + 'px';