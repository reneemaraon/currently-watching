const EditorOption = ({children}) => {
  return (
    <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="w-[15px] h-[15px] relative">
        {children}
      </div>
    </div>
  );
}



const MainContentEditor = () => {
    return (  
        <div className="min-h-[300px] bg-theme-base rounded-[10px] border border-slate-200 flex-col justify-start items-start gap-2.5 flex">
          <div className="p-[15px] rounded-[10px] border-b border-slate-200 justify-start items-start gap-2.5 inline-flex">
            <div className="justify-start items-start gap-5 flex">
              <EditorOption>
                
              </EditorOption>
              <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-[15px] h-[15px] relative"></div>
              </div>
              <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-[15px] h-[15px] relative"></div>
              </div>
              <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-[15px] h-[15px] relative"></div>
              </div>
              <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-[15px] h-[15px] relative"></div>
              </div>
              <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-[15px] h-[15px] relative"></div>
              </div>
              <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-[15px] h-[15px] relative"></div>
              </div>
              <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="w-[15px] h-[15px] relative"></div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 px-[15px] py-[5px] justify-start items-start gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-base font-normal leading-tight">I am so cool wow<br/><br/>sdskdksjdaks<br/>lorem ipsum<br/><br/></div>
          </div>
        </div>
    );
}
 
export default MainContentEditor;