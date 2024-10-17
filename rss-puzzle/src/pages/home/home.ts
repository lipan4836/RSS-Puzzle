import { createTextElement } from '../../utils/elements';

export default function renderHomePage() {
  const h1 = createTextElement({ tag: 'h1', text: 'Home Page', className: 'h1' });
  document.querySelector<HTMLDivElement>('#app')?.appendChild(h1);
}
