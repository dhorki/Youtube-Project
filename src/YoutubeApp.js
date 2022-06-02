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

  const initUser = user
    ? {
        uid: user.uid,
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
        const q = query(collection(db, 'users'), where('uid', '==', user.uid));
        const docs = await getDocs(q);
        const [doc] = docs.docs;
        const data = doc.data();

        const action = {
          type: environmentActions.setUser,
          payload: {
            user: {
              uid: user.uid,
              name: data.name,
              email: user.email,
              photo: user.photoURL,
              favoritesList: data.favoritesList,
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
      setTimeout(fetchUserName, 1000);
    }
  }, [user]);

  const [environment, dispatchEnv] = useReducer(appReducer, initEnvironment);

  return (
    <EnvironmentContext.Provider value={{ environment, dispatchEnv }}>
      <AppRouter />
    </EnvironmentContext.Provider>
  );
};
