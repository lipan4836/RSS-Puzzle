export type BasicProps = {
  className?: string;
  id?: string;
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
