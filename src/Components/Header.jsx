import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { USER_URL } from "../Utils/Constants";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch,useSelector } from "react-redux";
import { addUser,removeUser } from "../Utils/userSlice";
const Header = ({ location }) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert(error)
        navigate("/error");
      });
  };
  console.log(user,"user")
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-50 h-auto"
        alt="logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {location === "browse"&& user ? (
        <div className="flex p-2">
          <div className="flex flex-col m-4">
          <img className="w-12 h-12 self-center" alt="usericon" src={user.photoURL} />
          <span className="font-semibold text-white">{user.displayName}</span>
          </div>

          <button
            className="cursor-pointer font-bold text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : undefined}{" "}
    </div>
  );
};

export default Header;
