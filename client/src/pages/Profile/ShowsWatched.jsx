import { useUserDetailContext } from "../../context/UserDetailContext";
import { useUserListsContext } from "../../context/UserListsContext";
import LoadMorePanel from "../Common/LoadMorePagination";
import ShowCardSmall from "../Common/ShowCard";
import ListLoading from "../Common/LoadingList";
import { Header, HeaderName } from "../Home/Sections/SectionHeader";

const ShowsWatched = () => {
  const { userWatched, loadingWatched, loadNextWatchedPage } =
    useUserDetailContext();
  return (
    <div className="w-full flex-col justify-center items-center gap-3 flex">
      <Header>
        <HeaderName>
          <span className="title-text">Shows Watched </span>
          <span className="text-lighter-text title-text">
            ({userWatched && userWatched.totalCount})
          </span>
        </HeaderName>
      </Header>
      <div className="w-full inline-flex flex-wrap gap-3">
        {userWatched &&
          userWatched.watched.map((watchItem) => (
            <ShowCardSmall show={watchItem.show} />
          ))}
      </div>
      {loadingWatched && <ListLoading />}
      {!loadingWatched &&
        userWatched &&
        userWatched.watched.length < userWatched.totalCount && (
          <LoadMorePanel onClick={loadNextWatchedPage} />
        )}
    </div>
  );
};

export default ShowsWatched;
