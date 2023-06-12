interface Editor {
  name: string;
  svg: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  language: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export default Editor;
