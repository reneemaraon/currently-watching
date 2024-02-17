import CustomButton from "../Common/CustomButton";
import List from "./List";

const MyListsPage = () => {
  return (
    <div className="w-full max-w-[1200px] px-10 max-[900px]:px-8 max-[600px]:px-5 max-[400px]:px-2 py-2 sm:py-8 flex-col justify-start items-center gap-6 sm:gap-8 md:gap-12 inline-flex">
      <div className="Header self-stretch px-2 py-2 sm:py-4 justify-center items-center gap-5 inline-flex">
        <div className="grow shrink basis-0 justify-start items-start gap-2.5 flex">
          <div className="title-text">My Lists</div>
        </div>
        <CustomButton styleSet="dark" size="defaultResize">
          + Add Custom List
        </CustomButton>
      </div>
      <div className="ListArea self-stretch flex-col justify-start items-center gap-11 sm:gap-12 flex">
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default MyListsPage;
