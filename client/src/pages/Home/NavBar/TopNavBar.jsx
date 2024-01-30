import React from 'react'
import { useAuthContext } from '../../../context/AuthContext';
import ProfileView from './ProfileDropdown';
import CustomButton from '../../Common/CustomButton';

const LogInButton = ({ login }) => (
    <>
      <CustomButton 
        onClick={login}
        styleSet="gradient"
        size="defaultResize"
      >
          <svg className="fill-white h-full p-0.5" viewBox="0 0 22 21" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-white" d="M17.3263 0.666504H20.6998L13.3297 9.09L22 20.5525H15.2112L9.89404 13.6005L3.80995 20.5525H0.434432L8.31743 11.5426L0 0.666504H6.96111L11.7674 7.02083L17.3263 0.666504ZM16.1423 18.5333H18.0116L5.94539 2.57964H3.93946L16.1423 18.5333Z" fill="#242C39"/>
          </svg>

          Login with Twitter
      </CustomButton>
    </>
)



const TopNavBar = () => {
  const { user } = useAuthContext();

  const onTwitterLogin = async (e) => {
    window.open("http://127.0.0.1:3000/api/v1/auth/twitter/", "_self");
  };

  return (
    <div className="top_nav z-20 w-full h-20 max-[600px]:h-14 px-[50px] max-[600px]:px-6 bg-zinc-100 bg-opacity-25 backdrop-blur-sm border-b border-zinc-300 justify-between items-center inline-flex sticky top-0">
      <div className="left_side justify-start items-center gap-[30px] flex">
        <div className="xl:hidden move_icon px-1.5 py-1.5 rounded hover:bg-main-bg hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>

        {/* searchbar */}
        <div className="max-[600px]:hidden w-64 h-10 px-5 py-[15px] bg-theme-base rounded-[10px] justify-start items-center gap-5 flex">
          <div className="pr-2.5 justify-start items-center gap-2.5 flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>

              <div className="text-gray-800 text-[15px] font-normal leading-tight">Search by Keyword</div>
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