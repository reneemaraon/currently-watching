import { useUserListsContext } from "../../context/UserListsContext";
import CustomButton from "../Common/CustomButton";
import { Header, HeaderName } from "../Home/Sections/SectionHeader";
import List from "./List";
import LoadMorePanel from "../Common/LoadMorePagination";
import ListLoading from "../Common/LoadingList";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

const UserListsPage = () => {
  const { id } = useParams();
  const { user, actionRequireLogIn } = useAuthContext();
  const { setUserId, loading, userLists, addList, loadNextPage } =
    useUserListsContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setUserId(id);
    }
  }, [id]);

  const renderMyList = () => (
    <Header>
      <HeaderName>My Lists</HeaderName>
      <CustomButton onClick={addList} styleSet="dark" size="defaultResize">
        + Add Custom List
      </CustomButton>
    </Header>
  );

  const renderUserDetails = () => (
    <Header>
      <HeaderName>
        {userLists.user && (
          <div className="cursor-pointer h-full inline-flex items-center gap-2">
            <img
              onClick={() => navigate(`/users/${userLists.user._id}`)}
              className="hover:opacity-80 cursor-pointer w-6 h-6 relative rounded-full"
              src={userLists.user.profilePhotoUrl}
            />
            <p className="font-light">
              <span
                onClick={() => navigate(`/users/${userLists.user._id}`)}
                className="hover:text-brand-dark-purple font-medium"
              >
                {userLists.user.screenName}
              </span>
              {`'s lists`}
            </p>
          </div>
        )}
      </HeaderName>
      {!loading && (
        <CustomButton
          onClick={actionRequireLogIn(() =>
            navigate(`/users/${user && user._id}/lists/`)
          )}
          styleSet="dark"
          size="defaultResize"
        >
          Go to my lists
        </CustomButton>
      )}
    </Header>
  );

  return (
    <div className="w-full pb-96 max-w-[1200px] px-10 max-[900px]:px-8 max-[600px]:px-5 max-[400px]:px-2 pt-2 sm:pt-8 flex-col justify-start items-center gap-6 sm:gap-8 md:gap-12 inline-flex">
      {user && id == user._id ? renderMyList() : renderUserDetails()}
      <div className="px-0 sm:px-1 w-full flex-col justify-start items-center gap-11 sm:gap-12 flex">
        {userLists &&
          userLists.lists.map((list, index) => (
            <List index={index} key={list._id} list={list} />
          ))}
        {loading && <ListLoading />}
        {!loading &&
          userLists &&
          userLists.lists.length < userLists.totalCount && (
            <LoadMorePanel onClick={loadNextPage} />
          )}
      </div>
    </div>
  );
};

export default UserListsPage;
