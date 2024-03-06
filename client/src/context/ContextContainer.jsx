import React from 'react';
import { AuthProvider } from './AuthContext';
import { ShowsProvider } from './ShowsContext';
import { ReviewsProvider } from './ReviewContext';
import { SearchProvider } from './SearchContext';
import { ShowDetailProvider } from './ShowDetailContext';

export const ContextContainer = ({ children }) => (
  <AuthProvider>
    <ShowsProvider>
      <ReviewsProvider>
        <ShowDetailProvider>
          <SearchProvider>{children}</SearchProvider>
        </ShowDetailProvider>
      </ReviewsProvider>
    </ShowsProvider>
  </AuthProvider>
);
