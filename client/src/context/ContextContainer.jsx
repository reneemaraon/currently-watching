import React from 'react';
import { AuthProvider } from './AuthContext';
import { ShowsProvider } from './ShowContext';

export const ContextContainer = ({ children }) => (
    <AuthProvider>
        <ShowsProvider>
            { children }
        </ShowsProvider>
    </AuthProvider>
);
