import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';
import Dropdown, { Option } from '../../Common/Dropdown';
import ImageWithOpacityTransition from '../../Common/ImageTransition';

const ProfileView = ({ name, profile_photo }) => {
  const navigate = useNavigate();
  const { logoutUser } = useAuthContext();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const onProfileClick = () => {
    navigate('/users/1');
  };

  const onLogout = async () => {
    await logoutUser();
    window.location.reload();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      onClick={toggleDropdown}
      ref={dropdownRef}
      className="hover:bg-main-bg relative hover:cursor-pointer rounded-lg px-2.5 py-2.5 justify-end items-center gap-2.5 flex select-none"
    >
      <ImageWithOpacityTransition
        styleAttach="w-8 h-8 rounded-full"
        src={profile_photo}
      />
      <div className="text-sm leading-tight">{name}</div>
      {isDropdownVisible && (
        <div className="absolute w-40 top-full right-0 mt-1 z-40">
          <Dropdown
            options={[
              { name: 'Profile', type: 'redirect', onSelect: onProfileClick },
              { name: 'Logout', type: '', onSelect: onLogout },
            ]}
          >
            <Option key="Profile" text="Profile" onSelect={onProfileClick} />
            <Option key="Logout" text="Logout" onSelect={onLogout} />
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default ProfileView;
