'use strict';

const items = document.querySelectorAll('li');

items.forEach((element) => {
  const childList = element.querySelector('ul');

  if (!childList) {
    return;
  }

  const textNode = element.firstChild;
  const span = document.createElement('span');

  span.textContent = textNode.textContent.trim();
  element.replaceChild(span, textNode);

  span.addEventListener('click', (e) => {
    e.stopPropagation();
    childList.hidden = !childList.hidden;
  });
});
