import { useEffect, useState } from 'react';
import Editor from './components/Editor';
import EditorInterface from './interfaces/Editor';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');

  const editor1: EditorInterface = {
    name: 'HTML',
    svg: <i className='fa-brands fa-html5'></i>,
    language: 'xml',
    value: html,
    onChange: setHtml,
  };

  const editor2: EditorInterface = {
    name: 'Css',
    svg: <i className='fa-brands fa-css3'></i>,
    language: 'css',
    value: css,
    onChange: setCss,
  };

  const editor3: EditorInterface = {
    name: 'JS',
    svg: <i className='fa-brands fa-js'></i>,
    language: 'javascript',
    value: javascript,
    onChange: setJavascript,
  };

  const srcDoc = `
  <html >
  <style>${css}</style>
  <body>
  ${html}
  <script>${javascript}</script>
  </body>
  </html>
  `;

  return (
    <>
      <div className='pane top-pane'>
        <Editor {...editor1} />
        <Editor {...editor2} />
        <Editor {...editor3} />
      </div>
      <div className='pane'>
        <iframe
          id='output'
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          width='100%'
          height='100%'
        />
      </div>
    </>
  );
}

export default App;
