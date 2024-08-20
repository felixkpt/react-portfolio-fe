import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ id, name, value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline'],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'font',
    'bold', 'italic', 'underline',
    'list', 'bullet',
    'link', 'image'
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write something awesome..."
      />
      <textarea name={name} id={id} value={value} style={{ display: 'none' }} readOnly />
    </div>
  );
};

export default TextEditor;
