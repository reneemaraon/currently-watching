import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';


const Header = () => {
  const { user, logoutUser } = useAuthContext()


  return (
    <div className="overflow-x-hidden sticky top-0 z-40 backdrop-blur flex-none lg:z-10 border-b  border-slate-50/[0.1]  supports-backdrop-blur:bg-white/60 bg-transparent">
      <header className="flex items-center w-full justify-between text-white h-8 lg:px-40 px-10 py-8">
        <Link to="/" className="flex items-center content-center gap-4 w-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 fill-white min-w-fit"
          >
            <path
              fillRule="evenodd"
              d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z"
              clipRule="evenodd"
            />
          </svg>

          <span className="lg:visible invisible font-bold text-xl whitespace-nowrap">
            Currently Watching.
          </span>
        </Link>
        <div className="sm:visible invisible flex justify-between items-center min-w-min w-96">
          <a href="" className="">
            Trending
          </a>
          <a href="" className="">
            My Lists
          </a>
          <a href="" className="">
            Profile
          </a>
          { user ? (
            <button onClick={() => logoutUser()} className="bg-light-blue rounded-full p-1 min-h-full">
              <span className="mx-6 my-22 text-dark-blue">Logout</span>
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-light-blue rounded-full p-1 min-h-full">
                <span className="mx-6 my-22 text-dark-blue">Login</span>
              </button>
            </Link>
          )}
          
        </div>
      </header>
    </div>
  );
}

export default Header;
