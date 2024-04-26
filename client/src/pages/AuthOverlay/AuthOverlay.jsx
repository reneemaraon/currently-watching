import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import FullPageLoading from '../Common/FullPageLoading';

const AuthOverlay = () => {
  const { showToast } = useToast();
  const { isLoading, authToastMessage } = useAuthContext();

  useEffect(() => {
    if (authToastMessage) {
      const { message, type } = authToastMessage;
      showToast(message, type);
    }
  }, [authToastMessage]);

  return <></>;
};

export default AuthOverlay;
