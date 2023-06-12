import EditorControlledType from '../types/EditorControlledType';

const EditorControlled = (props: EditorControlledType) => {
  const { name, language, val, onChange } = props;

  return (
    <textarea
      name={name}
      id={language}
      rows={10}
      value={val}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  );
};

export default EditorControlled;
