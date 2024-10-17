import { createDiv, createTextElement } from '../../utils/elements';
import createFormElement from '../../utils/elementsForm';
import classes from './header.module.scss';

export default function renderHeader() {
  const header = document.createElement('header');
  header.className = classes.header;
  document.querySelector<HTMLDivElement>('#app')?.appendChild(header);

  const headerWrap = createDiv({ className: classes.headerWrap });
  header.appendChild(headerWrap);

  const h1 = createTextElement({ tag: 'h1', text: 'RSS-Puzzle' });
  h1.className = classes.h1;
  headerWrap.appendChild(h1);

  if (localStorage.getItem('userName')) {
    const logoutWrap = createDiv({ className: classes.logoutWrap });
    headerWrap.appendChild(logoutWrap);

    const userName = createTextElement({
      tag: 'span',
      text: localStorage.getItem('userName') || 'Unknown user :(',
      className: classes.userName,
    });
    const singOutBtn = createFormElement('button', {
      type: 'button',
      text: 'Sign Out',
      className: classes.logoutBtn,
    });

    logoutWrap.appendChild(userName);
    logoutWrap.appendChild(singOutBtn);
  }
}
