import React from "react";
import { AuthProvider } from "./AuthContext";
import { ShowsProvider } from "./ShowContext";
import { ReviewsProvider } from "./ReviewContext";

export const ContextContainer = ({ children }) => (
  <AuthProvider>
    <ShowsProvider>
      <ReviewsProvider>{children}</ReviewsProvider>
    </ShowsProvider>
  </AuthProvider>
);
