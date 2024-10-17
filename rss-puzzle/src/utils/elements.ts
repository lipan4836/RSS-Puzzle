import { BasicProps, ImgProps, LinkProps, TextProps } from '../types/elementsTypes';

export function createDiv({ className, id }: BasicProps): HTMLDivElement {
  const div = document.createElement('div');

  if (className) div.className = className;
  if (id) div.id = id;

  return div;
}

export function createSection({ className, id }: BasicProps): HTMLElement {
  const section = document.createElement('section');

  if (className) section.className = className;
  if (id) section.id = id;

  return section;
}

export function createTextElement({ tag, text, className }: TextProps): HTMLElement {
  const element = document.createElement(tag);

  element.textContent = text;
  if (className) element.className = className;

  return element;
}

export function createAnchor({ href, target, className }: LinkProps): HTMLAnchorElement {
  const a = document.createElement('a');

  a.href = href;
  if (target) a.target = target;
  if (className) a.className = className;

  return a;
}

export function createImage({ src, alt, width, height, className }: ImgProps): HTMLImageElement {
  const img = document.createElement('img');

  img.src = src;
  if (alt) img.alt = alt;
  if (width) img.width = width;
  if (height) img.height = height;
  if (className) img.className = className;

  return img;
}
