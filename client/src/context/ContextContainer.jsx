import React from 'react';
import { AuthProvider } from './AuthContext';
import { ShowsProvider } from './ShowContext';
import { ReviewsProvider } from './ReviewContext';
import { SearchProvider } from './SearchContext';

export const ContextContainer = ({ children }) => (
  <AuthProvider>
    <ShowsProvider>
      <ReviewsProvider>
        <SearchProvider>{children}</SearchProvider>
      </ReviewsProvider>
    </ShowsProvider>
  </AuthProvider>
);
