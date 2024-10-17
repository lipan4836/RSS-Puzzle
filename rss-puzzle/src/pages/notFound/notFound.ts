import { createTextElement } from '../../utils/elements';

export default function renderNotFoundPage() {
  const h2 = createTextElement({ tag: 'h2', text: 'Page Not Found', className: 'h2' });
  document.querySelector<HTMLDivElement>('#app')?.appendChild(h2);
}
