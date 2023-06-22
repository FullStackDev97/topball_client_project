import React, {useState, createContext, useContext, useMemo, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = props => {

  const navigate = useNavigate()
  const [authUser, setAuthUser] = useState({
    user_id:'',
    email:'',
    user_name:'',
    role:'',
    token: '',
    profil_pic:''
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = async (key, userData) => {
    const { token } = userData;
    const { logged, role, user_id, email,user_name,profil_pic } = userData;
    saveUserToLocalStorage({token, logged, role, user_name,user_id, email,profil_pic})

    setIsLoggedIn(true)
    setAuthUser({user_id, email, token,user_name, role, logged,profil_pic})
    //navigate('/profil')
    
  };

  const logout = async () => {
    localStorage.setItem('user', null);
    setAuthUser({});
    setIsLoggedIn(false);
    navigate('/');
  }

  const signup = async (key, userData) => {
    const { token } = userData;
    const { logged, role, user_id, email,user_name,profil_pic  } = userData;
    saveUserToLocalStorage({user_id, email, token,user_name, role, logged,profil_pic})
    setIsLoggedIn(true)
    setAuthUser({user_id, email, token,user_name, role, logged,profil_pic})
    navigate('/')
    /*if(role === 'baller') {
      navigate('/')
    } else if (role === 'admin'){
      navigate('/admin')
    }*/
  }

  const saveUserToLocalStorage = (userInfo) => {
    localStorage.setItem('user', JSON.stringify(userInfo));
  };

  const value = useMemo(
    () => ({
      authUser,
      setAuthUser,
      isLoggedIn,
      setIsLoggedIn,
      login,
      logout,
      signup,
    }), [authUser]
    )

    useEffect(() => {
      const getAuthUserInLocalStorage = () => {
        const res = JSON.parse(localStorage.getItem('user'));
        //console.log(res)
        if(res) {
          setAuthUser(res)
          setIsLoggedIn(true)
        } else {
          setAuthUser({})
          setIsLoggedIn(false)
        }
      }
      getAuthUserInLocalStorage()
    }, []);

    return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}
