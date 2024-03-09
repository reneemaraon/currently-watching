import { EditorProvider, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

// define your extension array
const extensions = [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
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
    <div className="relative editor min-h-[300px] w-full flex-col gap-4 flex">
      <div className="z-50 absolute top-0 w-full">
        <EditorMenu editor={editor} />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default MainContentEditor;
