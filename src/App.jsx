import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionauthenticationSlice } from "./redux/slices/authentication";
import AppRoutes from "./routes/AppRoutes";
import { GADJEDTARIUM_LOGIN_INFO } from "./utils/constants/fetch";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const autoAuthenticated = JSON.parse(
      localStorage.getItem(GADJEDTARIUM_LOGIN_INFO)
    );

    if (autoAuthenticated?.token) {
      dispatch(ActionauthenticationSlice.getUserData(autoAuthenticated));
    }
  }, []);

  return <AppRoutes />;
};

export default App;
