import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-4">Find Us On</h2>
      <div className="join join-vertical flex">
        <button className="btn join-item bg-transparent justify-start"><FaFacebook />Facebook</button>
        <button className="btn join-item bg-transparent justify-start"><FaTwitter />Twitter</button>
        <button className="btn join-item bg-transparent justify-start"><AiFillInstagram />instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
