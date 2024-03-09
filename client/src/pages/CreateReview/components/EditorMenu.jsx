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

const EditorOption = ({ children, fill, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex`}
    >
      <Icon fill={fill || 'fill-text-dark'}>{children}</Icon>
    </button>
  );
};

const EditorMenu = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="p-3 sm:p-4 w-full pb-4 border-b border-slate-200 justify-start items-start gap-2.5 inline-flex">
      <div className="justify-start flex-wrap items-start gap-4 flex">
        <EditorOption
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
        >
          <BoldIcon />
        </EditorOption>
        <EditorOption>
          <ItalicizeIcon />
        </EditorOption>
        <EditorOption>
          <UnderlineIcon />
        </EditorOption>
        <EditorOption fill="stroke-text-dark">
          <BulletIcon />
        </EditorOption>
        <EditorOption fill="stroke-text-dark">
          <AlignLeftIcon />
        </EditorOption>
        <EditorOption fill="stroke-text-dark">
          <AlignCenterIcon />
        </EditorOption>
        <EditorOption fill="stroke-text-dark">
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
