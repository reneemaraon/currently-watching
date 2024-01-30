import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Home/Header';
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

function App() {
  const { isLoading } = useAuthContext();
  if (isLoading) {
    return (
      <section className='page page-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <div className="antialiased flex-col justify-start items-start inline-flex bg-main-bg font-poppins text-gray-800">
      <div className="justify-start items-start inline-flex w-screen"> 

      <div className="fixed bg-main-bg w-screen h-screen z-0 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <img src="src/assets/overlay.jpg" className="blur-lg opacity-25 w-full overflow-hidden" />
      </div>
        <SideBar/>
        <div className="main_body_container relative z-10 xl:pl-60 flex-col w-full justify-start items-center inline-flex">
          <TopNavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/create-review" element={<CreateReview />} />
            <Route path="/my-lists" element={<MyListsPage />} />
            <Route path="/reviews/:id" element={<ReviewDetail />} />
            <Route path="/shows/:id" element={<ShowDetail />} />
            <Route path="/users/:id" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
{/* <Header /> */}

export default App;
