import EditorInterface from '../interfaces/Editor';
import EditorControlled from './EditorControlled';

const Editor = (props: EditorInterface) => {
  const { name, svg, language, value, onChange } = props;

  const toggleHide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const ele = e.target as HTMLTextAreaElement;

    ele.nextElementSibling?.classList.toggle('hide');
  };

  return (
    <div className='editor_container'>
      <div className='editor' onClick={(e) => toggleHide(e)}>
        <div className='editor_title'>
          <div className='editor_name'>
            {svg} {name}
          </div>
        </div>
        <EditorControlled
          name={name}
          val={value}
          language={language}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Editor;
