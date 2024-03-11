import { EditorProvider, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import Underline from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';
import TextAlign from '@tiptap/extension-text-align';
import Paragraph from '@tiptap/extension-paragraph';

import Text from '@tiptap/extension-text';

// define your extension array
const extensions = [
  StarterKit,
  ListItem,
  BulletList,
  Underline,
  Document,
  Paragraph,
  Text,
  TextAlign.configure({
    types: ['paragraph'],
  }),
];

import EditorMenu from './EditorMenu';

const MainContentEditor = ({ value, setContent }) => {
  const editor = useEditor({
    extensions: extensions,
    content: value,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });
  return (
    <div
      className={`${
        editor.isFocused && 'border-brand-gray'
      } min-h-[300px] w-full input-area flex-col justify-start items-start gap-4 flex`}
    >
      <div className="w-full">
        <EditorMenu editor={editor} />
      </div>
      <div className="w-full" spellcheck="false">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default MainContentEditor;
