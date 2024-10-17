import { createTextElement } from '../../utils/elements';

export default function renderGamePage() {
  const h2 = createTextElement({ tag: 'h2', text: 'Game Page', className: 'h2' });
  document.querySelector<HTMLDivElement>('#app')?.appendChild(h2);
}
