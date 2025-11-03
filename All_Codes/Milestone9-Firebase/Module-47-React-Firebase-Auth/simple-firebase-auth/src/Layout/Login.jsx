// import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// import React, { useState } from 'react';
// import { auth } from '../firebase/firebase.config';

// const googleProvider = new GoogleAuthProvider();

// const Login = () => {
//   const [user, setUser] = useState(null);

//   const handleGoogleSignIn = ()=> {
//     // console.log('google button clicked')
//     signInWithPopup(auth, googleProvider)
//     .then(result => {
//       console.log(result.user)
//       setUser(result.user)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }

//   const handleSignOut = () => {
//     signOut(auth)
//     .then(()=> {
//       console.log('sign out done')
//       setUser(null)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }

//   return (
//     <div>
//       <h2>Please Login</h2>
//       {
//         user ? <button onClick={handleSignOut}>Sign Out</button>: <button onClick={handleGoogleSignIn}>Sign in with Google</button>
//       }
//       {user && <div>
//         <h3>UserName: {user.displayName}</h3>
//         <img src={user.photoURL} alt="" />
//         <h3>Email ID: {user.email}</h3>
//       </div>}
//     </div>
//   );
// };

// export default Login;







// import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// import React, { useState } from 'react';
// import { auth } from '../firebase/firebase.config';

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

// const Login = () => {
//   const [user, setUser] = useState(null)

//   const handleSignIn = () => {
//     signInWithPopup(auth, googleProvider)
//     .then(result => {
//       console.log(result)
//       setUser(result.user)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }

//   const handleSignOut = () => {
//     signOut(auth)
//     .then(()=> {
//       setUser(null)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }

//   const handleGithubSignIn = () => {
//     signInWithPopup(auth, githubProvider)
//     .then(result => {
//       console.log(result)
//       const loggedInUser = result.user;
//       if(!loggedInUser.email) {
//         if(loggedInUser.providerData) {
//           const gitProvider = loggedInUser.providerData.find(p=> p.providerId === 'github.com');
//           if(gitProvider && gitProvider.email) {
//             loggedInUser.email = gitProvider.email
//             // setUser(loggedInUser)
//           }
//         }
//       }
//       setUser(result.user)
//     })
//     .catch(error => {
//       console.log(error)
//     })
//   }


//   return (
//     <div>
//       <h2>This is login</h2>
//       {
//         user? 
//         <button onClick={handleSignOut}>Sign Out</button>:
//         <>
//           <button onClick={handleSignIn}>Sign in with google</button>
//           <button onClick={handleGithubSignIn}>Sign in with github</button>
//         </>
//       }
//       {
//         user && <div>
//         <h2>UserName: {user.displayName}</h2>
//         <img src={user.photoURL} alt="" />
//         <h2>Email: {user?.email}</h2>
//       </div>
//       }
//     </div>
//   );
// };

// export default Login;






import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null)

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      console.log(result.user)
      setUser(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleSignOut = ()=> {
    signOut(auth)
    .then(()=> {
      setUser(null)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleSignIn}>Sign in with google</button>
      <button onClick={handleSignOut}>Sign Out</button>
      {
        user && <div>
          <h2>{user.displayName}</h2>
        </div>
      }
    </div>
  );
};

export default Login;