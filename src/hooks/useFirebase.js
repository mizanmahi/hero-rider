import { useEffect, useState } from 'react';
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
   getIdToken,
   updateProfile,
} from 'firebase/auth';
import initializeFirebase from '../firebase/firebase.config';

// initializing firebase app
initializeFirebase();

const auth = getAuth();

const useFirebase = () => {
   const [user, setUser] = useState(null);
   const [userLoading, setUserLoading] = useState(true);
   const [authError, setAuthError] = useState('');

   const joinWIthEmailAndPassword = async (
      { userEmail, password, userName },
      navigate
   ) => {
      try {
         setUserLoading(true);
         setAuthError('');

         // register user
         const {user} = await createUserWithEmailAndPassword(auth, userEmail, password);
         console.log(user);
         // update user profile
         await updateProfile(auth.currentUser, {
            displayName: userName,
         });

         navigate('/profile');

      } catch (err) {
         setAuthError(err.message);
      } finally {
         setUserLoading(false);
      }
   };

   //@ OBSERVING AUTH STATE CHANGES
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(
         auth,
         (user) => {
            if (user) {
               setUser(user);
               console.log(user);
               getIdToken(user).then((token) => {
                  localStorage.setItem('idToken', token);
               });
            } else {
               setUser(null);
            }
            setUserLoading(false);
         },
         (err) => {
            console.log(
               'Error from auth state changed error callback',
               err.message
            );
            setAuthError(err.message);
         }
      );

      return () => unSubscribe;
   }, []);

   return {
      joinWIthEmailAndPassword,
      user,
      userLoading,
      authError,
   };
};

export default useFirebase;
