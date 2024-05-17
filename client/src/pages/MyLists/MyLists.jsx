import { useMyListsContext } from '../../context/MyListsContext';
import CustomButton from '../Common/CustomButton';
import FullPageLoading from '../Common/FullPageLoading';
import { Header, HeaderName } from '../Home/Sections/SectionHeader';
import List from './List';
import LoadMorePanel from '../Common/LoadMorePagination';
import ListLoading from '../Common/LoadingList';

const MyListsPage = () => {
  const { loading, myLists, addList, loadNextPage } = useMyListsContext();

  return (
    <div className="w-full pb-96 max-w-[1200px] px-10 max-[900px]:px-8 max-[600px]:px-5 max-[400px]:px-2 pt-2 sm:pt-8 flex-col justify-start items-center gap-6 sm:gap-8 md:gap-12 inline-flex">
      <Header>
        <HeaderName>My Lists</HeaderName>
        <CustomButton onClick={addList} styleSet="dark" size="defaultResize">
          + Add Custom List
        </CustomButton>
      </Header>
      <div className="ListArea self-stretch flex-col justify-start items-center gap-11 sm:gap-12 flex">
        {myLists &&
          myLists.lists.map((list, index) => (
            <List index={index} key={list._id} list={list} />
          ))}
        {loading && <ListLoading />}
        {!loading && myLists && myLists.lists.length < myLists.totalCount && (
          <LoadMorePanel onClick={loadNextPage} />
        )}
      </div>
    </div>
  );
};

export default MyListsPage;
