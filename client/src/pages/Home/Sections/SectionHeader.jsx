const SectionHeader = ({ 
    sectionName, 
    arrowLeftFunction, //() => setActive(i => i - 1)
    arrowRightFunction, //() => setActive(i => i + 1)
}) => {
    return (
        <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-gray-800 text-3xl font-bold">
                {sectionName}
            </div>
            <div className="h-full w-28 inline-flex justify-between items-start">
                <div className="h-12 w-12 rounded-3xl inline-flex justify-center items-center">

                    <button className='nav-left' onClick={arrowLeftFunction}>
                        <svg className="stroke-slate-500 hover:stroke-indigo-400 w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
                <div className="h-12 w-12 rounded-3xl inline-flex justify-center items-center">
                    <button className='nav-left' onClick={arrowRightFunction}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 stroke-slate-500 hover:stroke-indigo-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default SectionHeader;

