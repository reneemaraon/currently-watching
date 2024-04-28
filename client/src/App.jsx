import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SideBar from './pages/Home/SideBar';
import TopNavBar from './pages/Home/NavBar/TopNavBar';
import ReviewsPage from './pages/Reviews/Reviews';
import CreateReview from './pages/CreateReview/CreateReview';

import { useAuthContext } from './context/AuthContext';
import ReviewDetail from './pages/ReviewDetail/ReviewDetail';
import ShowDetail from './pages/ShowDetail/ShowDetail';
import ProfilePage from './pages/Profile/ProfilePage';
import MyListsPage from './pages/MyLists/MyLists';
import { useState, useEffect, useRef } from 'react';
import PopupSidebar from './pages/Home/PopupSidebar';
import FullPageLoading from './pages/Common/FullPageLoading';
import ImageWithOpacityTransition from './pages/Common/ImageTransition';
import LoginCallback from './pages/Callback/LoginCallback';
import AuthOverlay from './pages/AuthOverlay/AuthOverlay';

function App() {
  const { isLoading } = useAuthContext();
  const [showSidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!showSidebar);
  };

  const sidebarRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  if (isLoading) {
    return <FullPageLoading />;
  }
  return (
    <div className="antialiased flex-col justify-start items-start inline-flex bg-main-bg font-inter text-gray-800">
      <AuthOverlay />
      <div className="relative justify-start items-start inline-flex w-screen">
        <div className="fixed w-screen h-screen z-0 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
          <img
            src="/src/assets/overlay.jpg"
            className="opacity-20 blur-2xl w-full overflow-hidden"
          />
        </div>
        <SideBar />
        {showSidebar && (
          <PopupSidebar anchor={sidebarRef} toggleSidebar={toggleSidebar} />
        )}
        <div className="main_body_container relative min-h-[100vh] z-10 xl:pl-60 flex-col w-full justify-start items-center inline-flex">
          <TopNavBar toggleSidebar={toggleSidebar} />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login/callback" element={<LoginCallback />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/my-lists" element={<MyListsPage />} />
            <Route path="/reviews/:id" element={<ReviewDetail />} />
            <Route path="/shows/:id/create-review" element={<CreateReview />} />
            <Route path="/shows/:id" element={<ShowDetail />} />
            <Route path="/users/:id" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
