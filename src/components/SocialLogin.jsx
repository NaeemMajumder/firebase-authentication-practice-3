import { FaGoogle,FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-4'>Login With</h2>
            <div className="flex flex-col gap-3">
                <button className="btn border-2 text-sky-600 bg-none border-sky-400"><FaGoogle /> Login with Google</button>
                <button className="btn border-2 border-black"><FaGithub /> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;