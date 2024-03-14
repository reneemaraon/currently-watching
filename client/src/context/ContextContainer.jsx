import React from 'react';
import { AuthProvider } from './AuthContext';
import { ShowsProvider } from './ShowsContext';
import { ReviewsProvider } from './ReviewContext';
import { SearchProvider } from './SearchContext';
import { ShowDetailProvider } from './ShowDetailContext';
import { CreateReviewContext } from './CreateReviewContext';
import { ToastProvider } from './ToastContext';

export const ContextContainer = ({ children }) => (
  <AuthProvider>
    <ShowsProvider>
      <ReviewsProvider>
        <ShowDetailProvider>
          <CreateReviewContext>
            <ToastProvider>
              <SearchProvider>{children}</SearchProvider>
            </ToastProvider>
          </CreateReviewContext>
        </ShowDetailProvider>
      </ReviewsProvider>
    </ShowsProvider>
  </AuthProvider>
);
