import { useCurrentEditor } from '@tiptap/react';
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  BulletIcon,
  ItalicizeIcon,
  UnderlineIcon,
  UploadImageIcon,
} from '../../Common/IconList';
import Icon from '../../Common/Icon';

const EditorOption = ({ children, stroke, disabled, onClick, isActive }) => {
  const defaultStyle = stroke ? 'stroke-text-dark' : 'fill-text-dark';
  const selectedStyle = stroke ? 'stroke-theme-base' : 'fill-theme-base';
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      tabIndex={-1}
      className={`${
        isActive ? 'bg-brand-tq' : 'bg-main-bg'
      } w-[30px] h-[30px] rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex`}
    >
      <Icon fill={isActive ? selectedStyle : defaultStyle}>{children}</Icon>
    </button>
  );
};

const EditorMenu = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="w-full pb-4  justify-start items-start gap-2.5 inline-flex">
      <div className="justify-start flex-wrap items-start gap-4 flex">
        <EditorOption
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
        >
          <BoldIcon />
        </EditorOption>
        <EditorOption
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
        >
          <ItalicizeIcon />
        </EditorOption>
        <EditorOption
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          isActive={editor.isActive('underline')}
        >
          <UnderlineIcon />
        </EditorOption>
        <EditorOption
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={!editor.can().chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          stroke
        >
          <BulletIcon />
        </EditorOption>
        <EditorOption
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          disabled={!editor.can().chain().focus().setTextAlign('left').run()}
          stroke
        >
          <AlignLeftIcon />
        </EditorOption>
        <EditorOption
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          disabled={!editor.can().chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
          stroke
        >
          <AlignCenterIcon />
        </EditorOption>
        <EditorOption
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          disabled={!editor.can().chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
          stroke
        >
          <AlignRightIcon />
        </EditorOption>
        <EditorOption>
          <UploadImageIcon />
        </EditorOption>
      </div>
    </div>
  );
};

export default EditorMenu;
