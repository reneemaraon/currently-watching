import React from 'react';
import { AuthProvider } from './AuthContext';
import { ShowsProvider } from './ShowsContext';
import { ReviewsProvider } from './ReviewContext';
import { SearchProvider } from './SearchContext';
import { ShowDetailProvider } from './ShowDetailContext';
import { CreateReviewContext } from './CreateReviewContext';
import { ToastProvider } from './ToastContext';
import { ReviewDetailProvider } from './ReviewDetailContext';
import { DeleteReviewProvider } from './DeleteReviewContext';

export const ContextContainer = ({ children }) => (
  <ToastProvider>
    <AuthProvider>
      <ShowsProvider>
        <ReviewsProvider>
          <ShowDetailProvider>
            <CreateReviewContext>
              <ReviewDetailProvider>
                <DeleteReviewProvider>
                  <SearchProvider>{children}</SearchProvider>
                </DeleteReviewProvider>
              </ReviewDetailProvider>
            </CreateReviewContext>
          </ShowDetailProvider>
        </ReviewsProvider>
      </ShowsProvider>
    </AuthProvider>
  </ToastProvider>
);
