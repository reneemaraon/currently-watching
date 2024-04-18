import React, { useEffect } from "react";
import CircularButton from "../Common/CircleButton";
import { ShareIcon, TwitterIcon } from "../Common/IconList";
import CustomButton from "../Common/CustomButton";
import Icon from "../Common/Icon";
import ReviewsListItem from "../Reviews/ReviewListItem";
import List from "../MyLists/List";
import ImageWithOpacityTransition from "../Common/ImageTransition";
import LoadMorePanel from "../Common/LoadMorePagination";
import { useAuthContext } from "../../context/AuthContext";
import formatDateTime from "../../utils/formatDate";
import { useUserDetailContext } from "../../context/UserDetailContext";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { id } = useParams();
  const {
    user,
    setUserId,
    loadNextPage,
    userReviews: { reviews, totalCount },
  } = useUserDetailContext();
  const { user: loggedInUser } = useAuthContext();

  useEffect(() => {
    if (id) {
      setUserId(id);
    }
  }, [id]);

  const openTwitter = () => {
    const { screenName } = user;
    window.open(`http://twitter.com/${screenName}`, "_blank");
  };

  if (user) {
    const { profilePhotoUrl, screenName, name, joinedDate } = user;
    return (
      <div className="w-full inline-flex flex-col items-center relative">
        <div className="container-center-card pt-4 sm:pt-10">
          {/* Main contentt */}
          <div className="z-10 Main large-white-card py-2 sm:py-6 px-3.5 sm:px-6">
            <div className="ReviewWriteContainer w-full bg-white rounded-[15px]  flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="TitleLine w-full pt-2.5 items-start inline-flex">
                <div className="w-full sm:px-2 md:px-4 items-start flex">
                  <div className="ProfileDetails grow pb-[15px] flex-col justify-start items-start gap-[15px] inline-flex">
                    <div className="Profile justify-start items-start gap-4 sm:gap-6 inline-flex">
                      <ImageWithOpacityTransition
                        styleAttach="w-12 h-12 sm:h-16 sm:w-16 md:w-[70px] md:h-[70px] relative rounded-full"
                        src={profilePhotoUrl}
                      />
                      <div className="Text self-stretch flex-col justify-center items-start gap-0.5 sm:gap-2 inline-flex">
                        <div className="justify-start gap-2 flex-wrap inline-flex">
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
                        <div className="paragraph-text">
                          Joined {formatDateTime(joinedDate)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ReviewActions justify-start items-center gap-[15px] flex">
                    <CircularButton>
                      <ShareIcon />
                    </CircularButton>
                  </div>
                </div>
              </div>
              <div className="Footer self-stretch pb-4 rounded-[17px]  flex-col justify-center items-start gap-[30px] flex">
                <div className="ReviewSection self-stretch pt-[30px] flex-col justify-center items-center gap-[15px] flex">
                  <div className="Header self-stretch border-b pb-4 sm:pb-6 justify-between items-start inline-flex">
                    <div className="Reviews20">
                      <span className="title-text">Reviews </span>
                      <span className="text-lighter-text title-text">
                        ({totalCount})
                      </span>
                    </div>
                    <div className="ActionsList w-[146px] justify-end items-start gap-2.5 flex" />
                  </div>
                  <div className="CommentList w-full flex-col justify-center items-start gap-[15px] flex">
                    {reviews.map((review) => (
                      <ReviewsListItem review={review} />
                    ))}
                    {reviews && totalCount > reviews.length && (
                      <LoadMorePanel onClick={loadNextPage} />
                    )}
                  </div>
                </div>
                {/* <div className="Lists w-full flex-col justify-center items-center gap-[15px] flex">
                  <div className="Header self-stretch border-b pb-4 sm:pb-6 justify-between items-start inline-flex">
                    <div className="Reviews20">
                      <span className="title-text">Lists </span>
                      <span className="text-lighter-text title-text">(20)</span>
                    </div>
                    <div className="ActionsList w-[146px] justify-end items-start gap-2.5 flex" />
                  </div>
                  <List />
                  <div className="LoadMorePanel self-stretch h-[65px]  flex-col justify-end items-center gap-2.5 flex">
                    <CustomButton
                      styleSet="light"
                      size="defaultResize"
                      edge="rounded"
                    >
                      Load more lists
                    </CustomButton>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
