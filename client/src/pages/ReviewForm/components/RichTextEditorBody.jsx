import { EditorContent, useEditor } from '@tiptap/react';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import Underline from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';
import TextAlign from '@tiptap/extension-text-align';
import Paragraph from '@tiptap/extension-paragraph';
import Image from '@tiptap/extension-image';

import Text from '@tiptap/extension-text';

// define your extension array
const extensions = [
  Bold,
  Italic,
  ListItem,
  BulletList,
  Underline,
  Document,
  Paragraph,
  Text,
  Image.configure({
    HTMLAttributes: {
      class: 'editorImage',
    },
  }),
  TextAlign.configure({
    types: ['paragraph'],
  }),
];

import EditorMenu from './EditorMenu';
import ErrorMessage from './ErrorMessage';
import { useEffect } from 'react';

const MainContentEditor = ({ value, setContent, errorMessage }) => {
  const editor = useEditor({
    extensions: extensions,
    content: value,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  if (editor) {
    return (
      <div className="inline-flex flex-col w-full">
        <div
          className={`${
            editor.isFocused && 'border-brand-gray'
          } min-h-[300px] w-full input-area flex-col justify-start items-start gap-4 flex`}
        >
          <div className="w-full">
            <EditorMenu editor={editor} />
          </div>
          <div className="w-full" spellCheck="false">
            <EditorContent editor={editor} />
          </div>
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
};

export default MainContentEditor;
