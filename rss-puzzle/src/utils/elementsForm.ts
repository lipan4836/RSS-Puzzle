import {
  BasicProps,
  ButtonProps,
  InputProps,
  SelectProps,
  TextAreaProps,
} from '../types/elementsTypes';

export default function createFormElement(
  elementType: 'input' | 'select' | 'textarea' | 'button',
  props: InputProps | SelectProps | TextAreaProps | ButtonProps,
): HTMLElement {
  let element: HTMLElement;

  switch (elementType) {
    case 'input':
      element = document.createElement('input');
      const inputProps = props as InputProps;
      (element as HTMLInputElement).type = inputProps.type;
      if (inputProps.placeholder)
        (element as HTMLInputElement).placeholder = inputProps.placeholder;
      if (inputProps.value) (element as HTMLInputElement).value = inputProps.value;
      if (inputProps.required) (element as HTMLInputElement).required = inputProps.required;
      break;
    case 'select':
      element = document.createElement('select');
      const selectProps = props as SelectProps;
      selectProps.options.forEach((optionData) => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.label;
        if (selectProps.multiple) (element as HTMLSelectElement).appendChild(option);
      });
      if (selectProps.multiple) (element as HTMLSelectElement).multiple = true;
      break;
    case 'button':
      element = document.createElement('button');
      const buttonProps = props as ButtonProps;
      (element as HTMLButtonElement).type = buttonProps.type;
      element.textContent = buttonProps.text;
      break;
    case 'textarea':
      element = document.createElement('textarea');
      const textAreaProps = props as TextAreaProps;
      if (textAreaProps.rows) (element as HTMLTextAreaElement).rows = textAreaProps.rows;
      if (textAreaProps.cols) (element as HTMLTextAreaElement).cols = textAreaProps.cols;
      if (textAreaProps.placeholder)
        (element as HTMLTextAreaElement).placeholder = textAreaProps.placeholder;
      if (textAreaProps.value) (element as HTMLTextAreaElement).value = textAreaProps.value;
      break;
    default:
      throw new Error('unsuported element type');
  }

  const basicProps = props as BasicProps;
  if (basicProps.className) element.className = basicProps.className;
  if (basicProps.id) element.id = basicProps.id;
  if (basicProps.name)
    (
      element as HTMLInputElement | HTMLSelectElement | HTMLButtonElement | HTMLTextAreaElement
    ).name = basicProps.name;

  return element;
}
