import { Navigate, Outlet } from "react-router-dom";

function userAuth() {
  const user = sessionStorage.getItem("login");
  // const user = true;
  return user && user;
}

function protectedRouter() {
  const isAuth = userAuth();
  return (
    isAuth ? <Outlet /> : <Navigate to='/' />
  );
}

export default protectedRouter;