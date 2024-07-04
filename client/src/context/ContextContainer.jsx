import React from "react";
import { AuthProvider } from "./AuthContext";
import { ShowsProvider } from "./ShowsContext";
import { ReviewsProvider } from "./ReviewContext";
import { SearchProvider } from "./SearchContext";
import { ShowDetailProvider } from "./ShowDetailContext";
import { CreateReviewContext } from "./CreateReviewContext";
import { ToastProvider } from "./ToastContext";
import { ReviewDetailProvider } from "./ReviewDetailContext";
import { DeleteReviewProvider } from "./DeleteReviewContext";
import { HomepageProvider } from "./HomepageContext";
import { UserDetailProvider } from "./UserDetailContext";
import { UpdateReviewContext } from "./UpdateReviewContext";
import { UserListsProvider } from "./UserListsContext";
import { ListDetailProvider } from "./ListDetailContext";
import { WatchShowProvider } from "./WatchShowContext";

export const ContextContainer = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <ShowsProvider>
        <ReviewsProvider>
          <ShowDetailProvider>
            <CreateReviewContext>
              <ReviewDetailProvider>
                <DeleteReviewProvider>
                  <HomepageProvider>
                    <UserDetailProvider>
                      <UpdateReviewContext>
                        <UserListsProvider>
                          <ListDetailProvider>
                            <WatchShowProvider>
                              <SearchProvider>{children}</SearchProvider>
                            </WatchShowProvider>
                          </ListDetailProvider>
                        </UserListsProvider>
                      </UpdateReviewContext>
                    </UserDetailProvider>
                  </HomepageProvider>
                </DeleteReviewProvider>
              </ReviewDetailProvider>
            </CreateReviewContext>
          </ShowDetailProvider>
        </ReviewsProvider>
      </ShowsProvider>
    </ToastProvider>
  </AuthProvider>
);
