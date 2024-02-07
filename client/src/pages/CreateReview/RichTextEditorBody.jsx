import Icon from "../Common/Icon";
import { 
  AlignCenterIcon, 
  AlignLeftIcon, 
  AlignRightIcon, 
  BoldIcon, 
  BulletIcon, 
  ItalicizeIcon, 
  UnderlineIcon, 
  UploadImageIcon 
} from "../Common/IconList";

const EditorOption = ({children, fill}) => {
  return (
    <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
      <Icon fill={fill || "fill-text-dark"}>
        {children}
      </Icon>
    </div>
  );
}



const MainContentEditor = () => {
    return (
      <div className="min-h-[300px] w-full bg-theme-base rounded-[10px] border border-slate-200 flex-col justify-start items-start gap-2.5 flex">
        <div className="w-full p-[15px] rounded-[10px] border-b border-slate-200 justify-start items-start gap-2.5 inline-flex">
          <div className="justify-start flex-wrap items-start gap-4 flex">
            <EditorOption><BoldIcon /></EditorOption>
            <EditorOption><ItalicizeIcon /></EditorOption>
            <EditorOption><UnderlineIcon /></EditorOption>
            <EditorOption fill="stroke-text-dark"><BulletIcon /></EditorOption>
            <EditorOption fill="stroke-text-dark"><AlignLeftIcon /></EditorOption>
            <EditorOption fill="stroke-text-dark"><AlignCenterIcon /></EditorOption>
            <EditorOption fill="stroke-text-dark"><AlignRightIcon /></EditorOption>
            <EditorOption><UploadImageIcon /></EditorOption>
          </div>
        </div>
        <div className="grow shrink basis-0 px-[15px] py-[5px] justify-start items-start gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-base font-normal leading-tight">
            I am so cool wow
            <br />
            <br />
            sdskdksjdaks
            <br />
            lorem ipsum
            <br />
            <br />
          </div>
        </div>
      </div>
    );
}
 
export default MainContentEditor;