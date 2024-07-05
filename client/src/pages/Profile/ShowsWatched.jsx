import { useUserDetailContext } from "../../context/UserDetailContext";
import { useUserListsContext } from "../../context/UserListsContext";
import LoadMorePanel from "../Common/LoadMorePagination";
import ShowCardSmall from "../Common/ShowCard";
import { Header, HeaderName } from "../Home/Sections/SectionHeader";

const ShowsWatched = () => {
  const { userWatched, loadingWatched } = useUserDetailContext();
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
      {userWatched &&
        userWatched.shows.map((show) => <ShowCardSmall show={show} />)}
      {loadingWatched && <loadingWatched />}
      {!loadingWatched &&
        userWatched &&
        userWatched.shows.length < userWatched.totalCount && (
          <LoadMorePanel onClick={() => {}} />
        )}
    </div>
  );
};

export default ShowsWatched;
