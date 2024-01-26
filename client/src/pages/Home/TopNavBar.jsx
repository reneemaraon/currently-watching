import React from 'react'
import { useAuthContext } from '../../context/AuthContext';

const LogInButton = ({ login }) => (
    <button onClick={login} className="px-6 py-[10px] bg-gradient-to-b from-teal-400 to-indigo-400 rounded-[90px] justify-center items-center gap-2.5 inline-flex">
      <div className="text-white text-base font-medium font-['Inter']">
        Login with Twitter
      </div>
    </button>
)

const ProfileView = ({ name, profile_photo }) => (
  <div className="w-[142px] px-2.5 py-7 justify-end items-center gap-2.5 flex">
      <img className="w-8 h-8 rounded-full" src={profile_photo} />
      <div className="text-gray-800 text-[15px] font-normal font-['Inter'] leading-tight">{name}</div>
  </div>
)



const TopNavBar = () => {
  const { user, logoutUser } = useAuthContext();

  const onTwitterLogin = async (e) => {
    window.open("http://127.0.0.1:3000/api/v1/auth/twitter/", "_self");
  };

  return (
    <div className="top_nav z-20 w-full h-20 px-[50px] bg-zinc-100 bg-opacity-25 backdrop-blur-sm border-b border-zinc-300 justify-between items-center inline-flex sticky top-0">
      <div className="left_side justify-start items-center gap-[30px] flex">
        <div className="xl:hidden move_icon px-1.5 py-1.5 rounded hover:bg-main-bg hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

        {/* searchbar */}
        <div className="w-64 h-10 px-5 py-[15px] bg-white rounded-[10px] justify-start items-center gap-5 flex">
          <div className="pr-2.5 justify-start items-center gap-2.5 flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

              <div className="text-gray-800 text-[15px] font-normal font-['Inter'] leading-tight">Search by Keyword</div>
          </div>
        {/* searchbar end */}
      </div>
    </div>
    { user ? (
      <ProfileView name={user.screenName} profile_photo={user.profilePhotoUrl} />
    ): (
      <LogInButton login={onTwitterLogin} />
    )}
</div>
  )
}


export default TopNavBar;