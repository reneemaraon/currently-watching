import { useNavigate, useLocation } from 'react-router-dom';
import FullPageLoading from '../Common/FullPageLoading';
import { useEffect } from 'react';
import { useToast } from '../../context/ToastContext';

const LoginCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();

  useEffect(() => {
    const lastPage = localStorage.getItem('lastPage');
    showToast('You are logged in.', 'success');
    if (lastPage && location.pathname !== lastPage) {
      console.log(lastPage);
      navigate(lastPage);
    } else {
      navigate('/');
    }
  }, []);

  return <FullPageLoading />;
};

export default LoginCallback;
