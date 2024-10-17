export type BasicProps = {
  className?: string;
  id?: string;
  name?: string;
};

export type TextProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  text: string;
  className?: string;
};

export type LinkProps = {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
};

export type ImgProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

export type InputProps = BasicProps & {
  type: 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'radio';
  placeholder?: string;
  value?: string;
  required?: boolean;
};

export type SelectProps = BasicProps & {
  options: { value: string; label: string }[];
  multiple?: boolean;
};

export type TextAreaProps = BasicProps & {
  rows?: number;
  cols?: number;
  placeholder?: string;
  value?: string;
};

export type ButtonProps = BasicProps & {
  type: 'submit' | 'reset' | 'button';
  text: string;
};
