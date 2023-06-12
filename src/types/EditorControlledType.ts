type EditorControlledType = {
  name: string;
  language: string;
  val: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export default EditorControlledType;
