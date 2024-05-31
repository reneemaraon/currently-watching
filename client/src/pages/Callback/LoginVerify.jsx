import { useParams } from 'react-router-dom';
import FullPageLoading from '../Common/FullPageLoading';
import { useEffect } from 'react';
import { useToast } from '../../context/ToastContext';
import { useAuthContext } from '../../context/AuthContext';

const LoginVerify = () => {
  const { oauth_token, oauth_verifier } = useParams();
  const { verify } = useAuthContext();

  useEffect(() => {
    console.log('hi');
    if (oauth_token && oauth_verifier) {
      verify(oauth_token, oauth_verifier);
    }
  }, [oauth_token, oauth_verifier]);

  return <FullPageLoading />;
};

export default LoginVerify;
