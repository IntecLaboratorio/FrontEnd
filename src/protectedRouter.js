import { Navigate, Outlet } from "react-router-dom";


const userAll = () => {
  if(sessionStorage.getItem('login') === 'true'){
    const user = true;
    return user;
  }
  return false;
}

function userProf() {
  if(sessionStorage.getItem('typeUser') === '1' || sessionStorage.getItem('typeUser') === '2' && sessionStorage.getItem('login') === 'true'){
      const user = true
      return user;
  }
  return false;
}

function userCoordenador() {

  if(sessionStorage.getItem('typeUser') === '1' && sessionStorage.getItem('login') === 'true'){
      const user = true
      return user;
  }
  return false;
}

const ProtectedAll = () => {
  const isAuth = userAll();
  return (
    isAuth ? <Outlet /> : <Navigate to='/' />
  );
}

function ProtectedProf() {
  const isAuth = userProf();
  return (
    isAuth ? <Outlet /> : <Navigate to='/' />
  );
}

function ProtectedCoordenador() {
  const isAuth = userCoordenador();
  return (
    isAuth ? <Outlet /> : <Navigate to='/' />
  );
}

export { ProtectedProf, ProtectedCoordenador, ProtectedAll};