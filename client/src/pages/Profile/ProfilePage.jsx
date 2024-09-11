import React, { useEffect } from 'react';
import CircularButton from '../Common/CircleButton';
import { ShareIcon, TwitterIcon } from '../Common/IconList';
import CustomButton from '../Common/CustomButton';
import FullPageLoading from '../Common/FullPageLoading';
import Icon from '../Common/Icon';
import ReviewsListItem from '../Reviews/ReviewListItem';
import List from '../UserLists/List';
import ImageWithOpacityTransition from '../Common/ImageTransition';
import LoadMorePanel from '../Common/LoadMorePagination';
import { useAuthContext } from '../../context/AuthContext';
import formatDateTime from '../../utils/formatDate';
import { useUserDetailContext } from '../../context/UserDetailContext';
import { useParams } from 'react-router-dom';
import { Header, HeaderName } from '../Home/Sections/SectionHeader';
import DeleteReview from '../Reviews/DeleteReview';
import { useDeleteReviewContext } from '../../context/DeleteReviewContext';
import ListLoading from '../Common/LoadingList';
import { useToast } from '../../context/ToastContext';
import { useUserListsContext } from '../../context/UserListsContext';
import ShowsWatched from './ShowsWatched';

export default function ProfilePage() {
  const { id } = useParams();
  const {
    user,
    setUserId,
    loadNextPage,
    loadingReviews,
    loading,
    userReviews: { reviews, totalCount },
  } = useUserDetailContext();
  const { showToast } = useToast();
  const {
    setUserId: setUserList,
    loading: listLoading,
    userLists,
    loadNextPage: loadNextListPage,
  } = useUserListsContext();
  const { setShowDeleteModal, setReviewToDelete } = useDeleteReviewContext();

  useEffect(() => {
    if (id) {
      setUserId(id);
      setUserList(id);
    }
  }, [id]);

  const openTwitter = () => {
    const { screenName } = user;
    window.open(`http://twitter.com/${screenName}`, '_blank');
  };

  const onAttemptDelete = (id) => {
    setReviewToDelete(id);
    setShowDeleteModal(true);
  };

  const copyPathToClipboard = () => {
    const fullPath = window.location.href;
    navigator.clipboard
      .writeText(fullPath)
      .then(() => {
        showToast('Copied link to clipboard', 'success');
      })
      .catch((error) => {
        console.error('Failed to copy path to clipboard', error);
      });
  };

  if (loading) {
    return <FullPageLoading />;
  }

  if (user) {
    const { profilePhotoUrl, screenName, name, joinedDate } = user;
    return (
      <div className="w-full inline-flex flex-col items-center relative">
        <DeleteReview />
        <div className="container-center-card pt-4 sm:pt-10">
          {/* Main contentt */}
          <div className="z-10 Main large-white-card py-2 sm:py-6 px-3.5 sm:px-6">
            <div className="ReviewWriteContainer w-full rounded-[15px]  flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="TitleLine w-full pt-2.5 items-start inline-flex">
                <div className="w-full sm:px-2 md:px-4 items-start flex">
                  <div className="ProfileDetails grow pb-[15px] flex-col justify-start items-start gap-[15px] inline-flex">
                    <div className="Profile justify-start items-start gap-4 sm:gap-6 inline-flex">
                      <ImageWithOpacityTransition
                        styleAttach="w-12 h-12 sm:h-16 sm:w-16 md:w-[70px] md:h-[70px] relative rounded-full"
                        src={profilePhotoUrl}
                      />
                      <div className="Text self-stretch flex-col justify-center items-start sm:gap-0.5 inline-flex">
                        <div className="justify-end gap-2 items-end flex-wrap inline-flex">
                          <div className="title-text">{name}</div>
                          <CustomButton
                            onClick={openTwitter}
                            styleSet="inverse"
                            size="smallResize"
                          >
                            <Icon
                              sizeRules="h-2.5 w-2.5 sm:h-3 sm:w-3"
                              fill="fill-current"
                            >
                              <TwitterIcon />
                            </Icon>
                            <span className="sm:block hidden">
                              Open on Twitter
                            </span>
                          </CustomButton>
                        </div>
                        <div className="paragraph-text text-light-text">
                          @{screenName}
                        </div>
                        <div className="subtext">
                          Joined {formatDateTime(joinedDate)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ReviewActions justify-start items-center gap-[15px] flex">
                    <CircularButton onClick={copyPathToClipboard}>
                      <ShareIcon />
                    </CircularButton>
                  </div>
                </div>
              </div>
              <div className="Footer self-stretch pb-4 rounded-[17px]  flex-col justify-center items-start gap-12 flex">
                <div className="ReviewSection self-stretch pt-[30px] flex-col justify-center items-center gap-4 flex">
                  <Header>
                    <HeaderName>
                      <span className="title-text">Reviews </span>
                      <span className="text-lighter-text title-text">
                        ({totalCount})
                      </span>
                    </HeaderName>
                  </Header>
                  <div className="CommentList w-full flex-col justify-start items-center gap-[15px] flex">
                    {reviews.map((review) => (
                      <ReviewsListItem
                        onDelete={() => onAttemptDelete(review._id)}
                        review={review}
                        key={review._id}
                      />
                    ))}
                    {loadingReviews && <ListLoading />}
                    {reviews && totalCount > reviews.length && (
                      <LoadMorePanel onClick={loadNextPage} />
                    )}
                  </div>
                </div>
                <ShowsWatched />
                <div className="Lists w-full flex-col justify-center items-center gap-3 flex">
                  <Header>
                    <HeaderName>
                      <span className="title-text">Lists </span>
                      <span className="text-lighter-text title-text">
                        ({userLists && userLists.totalCount})
                      </span>
                    </HeaderName>
                  </Header>
                  {userLists &&
                    userLists.lists.map((list, index) => (
                      <List index={index} key={list._id} list={list} />
                    ))}
                  {listLoading && <ListLoading />}
                  {!listLoading &&
                    userLists &&
                    userLists.lists.length < userLists.totalCount && (
                      <LoadMorePanel onClick={loadNextListPage} />
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
