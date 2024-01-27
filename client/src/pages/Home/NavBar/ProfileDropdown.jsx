import React, { 
    useState,
    useRef,
    useEffect,
} from 'react'
import { useAuthContext } from '../../../context/AuthContext';
import Dropdown from '../../Common/Dropdown';

const ProfileView = ({ name, profile_photo }) => {
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
        console.log('hi')
    }

    const onLogout = () => {
        logoutUser()
        window.location.reload()
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);


    return (
        <div onClick={toggleDropdown} className="hover:bg-main-bg relative hover:cursor-pointer rounded-lg px-2.5 py-2.5 justify-end items-center gap-2.5 flex select-none">
            <img className="w-8 h-8 rounded-full" src={profile_photo} />
            <div className="text-sm leading-tight">{name}</div>
            {isDropdownVisible && (
                <div ref={dropdownRef} className="absolute w-40 top-full right-0 mt-1 z-40">
                    <Dropdown options={[
                        { name: 'Profile', type:'redirect', onSelect: onProfileClick }, 
                        { name: 'Logout', type: '', onSelect: onLogout}
                    ]} />
                </div>
            )}
        </div>
  )
}
    
export default ProfileView;