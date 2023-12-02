const blockRef = document.querySelector('.block');
const bodyRef = document.querySelector('.parent');
const messageRef = document.querySelector('.message');

const blockInitialX = (bodyRef.clientWidth - blockRef.clientWidth) / 2;
const blockInitialY = (bodyRef.clientHeight - blockRef.clientHeight) / 2;
const blockInitialHeight = blockRef.clientHeight;
const blockInitialWidth = blockRef.clientWidth;

let blockCurrentY = blockInitialY;
let blockCurrentX = blockInitialX;

blockRef.style.left = blockCurrentX + 'px';
blockRef.style.top = blockCurrentY + 'px';

const bodyRightBorder = bodyRef.clientWidth - blockRef.clientWidth;
const bodyBottomBorder = bodyRef.clientHeight - blockRef.clientHeight;

const showMessage = () => {
  if(blockRef.style.top < bodyRef.clientHeight + 'px' || blockRef.style.top > bodyRef.clientTop + 'px' ||  blockRef.style.left < bodyRef.clientWidth + 'px' ||  blockRef.style.left > bodyRef.clientLeft + 'px') {
    messageRef.classList.remove('message');
    setTimeout(hideMessage, 2000);
  }
}

const hideMessage = () => {
  messageRef.classList.add('message');
}

const blockOriginalSize = () => {
  blockRef.style.height = blockInitialHeight + 'px';
  blockRef.style.width = blockInitialWidth + 'px';
  setInterval(() => blockRef.style.transition = 0 + 's', 1000);
}

const blockSit  = () => {
  const newHeight = blockInitialHeight * 0.4;
  const newWidth = blockInitialWidth * (1 + 0.25);
  blockRef.style.height = newHeight + 'px';
  blockRef.style.width = newWidth + 'px';
  blockRef.style.transition = 0.3 + 's';
  document.addEventListener('keyup', blockOriginalSize);
}

const blockBeforeJumping = () => {
  blockRef.style.top = blockCurrentY + 'px';
}

const blockJump = () => {
  const jumpY = blockCurrentY - 10;
  blockRef.style.top = jumpY + 'px';
  if(blockRef.style.top <= bodyRef.clientTop + 'px') {
    showMessage();
  }
  document.addEventListener('keyup', blockBeforeJumping);
}

document.addEventListener('keydown', (event) => {
  switch(event.code) {
    case 'ArrowUp':
      blockCurrentY = blockCurrentY - 10;
      blockRef.style.top = blockCurrentY + 'px';
      break;
    case 'ArrowDown':
      blockCurrentY = blockCurrentY + 10;
      blockRef.style.top = blockCurrentY + 'px';
      break;
    case 'ArrowLeft': 
      blockCurrentX = blockCurrentX - 10;
      blockRef.style.left = blockCurrentX + 'px';
      break;
    case 'ArrowRight':
      blockCurrentX = blockCurrentX + 10;
      blockRef.style.left = blockCurrentX + 'px';
      break;
    case 'ControlLeft':
      blockSit();
      break;
    case 'Space':
      blockJump();
      break;
  }

  if(blockCurrentX <= 0) {
    blockCurrentX = blockCurrentX + 20;
    blockRef.style.left = blockCurrentX + 'px';
    showMessage();
  }
  if(blockCurrentX > bodyRightBorder) {
    blockCurrentX = blockCurrentX - 20;
    blockRef.style.left = blockCurrentX+ 'px';
    showMessage();
  }
  if(blockCurrentY <= 0) {
    blockCurrentY = blockCurrentY + 20;
    blockRef.style.top = blockCurrentY + 'px';
    showMessage();
  }
  if(blockCurrentY > bodyBottomBorder) {
    blockCurrentY = blockCurrentY - 20;
    blockRef.style.top = blockCurrentY + 'px';
    showMessage();
  }
});