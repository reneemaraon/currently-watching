import { Link } from 'react-router-dom';
import useLocalState from '../../utils/localState';


function LoginPage() {

  const onTwitterLogin = async (e) => {
    window.open("http://127.0.0.1:3000/api/v1/auth/twitter/", "_self");
  };

  return (
    <div className="flex flex-col w-100% items-center lg:text-left text-center">
      <div className="flex flex-col justify-center gap-5 lg:gap-8 p-6 w-full md:w-96 h-[70vh] md:mx-8">
        <div className="flex flex-col">
          <span className="text-2xl font-light lg:text-3xl">Login/Sign up to</span>
          <span className="text-2xl lg:text-3xl text-light-blue">
            Currently Watching
          </span>
          <div className="my-3 lg:my-5 flex flex-col">
            <span className="text-sm text-slate-300 font-light">
              Give better reviews for all your favorite shows.
            </span>
            <span className="text-sm text-slate-300 font-light">
              See which shows everyone loves.
            </span>
          </div>
        </div>
          <button onClick={onTwitterLogin} className="rectangular-button">
            Connect with Twitter
          </button>
      </div>
    </div>
  );
}

export default LoginPage;
