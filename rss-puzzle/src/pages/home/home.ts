import createFormElement from '../../utils/elementsForm';

export default function renderHomePage() {
  if (!localStorage.getItem('userName')) {
    const userNameInput = createFormElement('input', {
      type: 'text',
      placeholder: 'Enter your name',
      required: true,
      className: 'inputName',
      id: 'username',
    });

    document.querySelector<HTMLDivElement>('#app')?.appendChild(userNameInput);
  }
  // document.querySelector<HTMLDivElement>('#app')?.appendChild(h1);
}
