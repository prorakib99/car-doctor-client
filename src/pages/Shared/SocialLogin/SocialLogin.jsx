import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../provider/AuthProvider";

const SocialLogin = ({ page }) => {
  const { loginWithGoogle } = useContext(AuthContext);
  const handleGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <p className="text-center my-3 text-neutral-700 text-lg font-medium font-['Inter']">
        Or {page} with
      </p>
      <div className="flex justify-center gap-7">
        <button
          className="w-[55px] h-[55px] group/item btn border-none flex justify-center items-center bg-neutral-100 rounded-full"
          type="button"
        >
          <FaFacebookF className="text-[#3B5998] h-full group-hover/item:text-white" />
        </button>
        <button
          onClick={handleGoogle}
          className="w-[55px] h-[55px] group/item btn border-none flex justify-center items-center bg-neutral-100 rounded-full"
          type="button"
        >
          <FcGoogle className="text-[#EB4132] w-full h-full group-hover/item:text-white" />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
