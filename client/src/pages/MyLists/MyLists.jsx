import List from './List';

const MyListsPage = () => {
  return (
    <div className="w-full max-w-[1200px] px-10 max-[900px]:px-8 max-[600px]:px-5 max-[400px]:px-2 py-2 sm:py-8 flex-col justify-start items-center gap-24 inline-flex">
      <div className="Header self-stretch pb-[30px] justify-center items-end gap-5 inline-flex">
        <div className="SecitonHeader grow shrink basis-0 h-[39px] justify-start items-start gap-2.5 flex">
          <div className="MyLists text-[32px] font-medium font-['Inter']">
            My Lists
          </div>
        </div>
        <div className="AddReviewContainer flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="Button px-5 py-[15px] bg-gray-800 rounded-lg justify-center items-center gap-2 inline-flex">
            <div className="Button grow shrink basis-0 text-center text-white text-base font-semibold font-['Inter']">
              + Add Custom List
            </div>
          </div>
        </div>
      </div>
      <div className="ListArea self-stretch flex-col justify-start items-center gap-[50px] flex">
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default MyListsPage;
