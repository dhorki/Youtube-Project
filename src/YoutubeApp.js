import React, { useEffect, useReducer } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { auth, db } from './firebase';
import { EnvironmentContext } from './contexts/EnvironmentContext';
import { AppRouter } from './routers/AppRouter';
import { environmentActions, modalTypes, styles } from './constants/constants';
import { appReducer } from './reducers/appReducer';

export const YoutubeApp = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const initUser = user
    ? {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        favoritesList: [],
      }
    : null;

  const initEnvironment = {
    theme: styles.colors.light,
    sidebarShow: false,
    q: '',
    modalShow: modalTypes.none,
    user: initUser,
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();

        const action = {
          type: environmentActions.setUser,
          payload: {
            user: {
              name: data.name,
              email: user.email,
              photo: user.photoURL,
              favoritesList: user.favoritesList,
            },
          },
        };

        dispatchEnv(action);
      } catch (err) {
        console.error(err);
        alert('An error occured while fetching user data');
      }
    };

    if (user) {
      fetchUserName();
    }
  }, [user]);

  const [environment, dispatchEnv] = useReducer(appReducer, initEnvironment);

  return (
    <EnvironmentContext.Provider value={{ environment, dispatchEnv }}>
      <AppRouter />
    </EnvironmentContext.Provider>
  );
};
