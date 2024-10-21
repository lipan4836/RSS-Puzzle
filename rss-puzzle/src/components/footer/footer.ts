import { createAnchor, createDiv } from '../../utils/elements';
import classes from './footer.module.scss';

export default function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = classes.footer;
  document.querySelector<HTMLDivElement>('#app')?.appendChild(footer);

  const footerWrap = createDiv({ className: classes.footerWrap });
  footer.appendChild(footerWrap);

  const ghLink = createAnchor({
    href: 'https://github.com/lipan4836',
    target: '_blank',
    className: classes.ghLink,
  });
  footerWrap.appendChild(ghLink);

  const createdDate = document.createElement('time');
  createdDate.textContent = '2024';
  createdDate.dateTime = '2024';
  createdDate.className = classes.createdDate;
  footerWrap.appendChild(createdDate);

  const rssLink = createAnchor({
    href: 'https://rs.school/',
    target: '_blank',
    className: classes.rssLink,
  });
  footerWrap.appendChild(rssLink);
}
