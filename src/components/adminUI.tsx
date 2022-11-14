import { useAuthContext } from '@asgardeo/auth-react';
import React from 'react'

export default function AdminUI() {
  const {
    state,
    signIn,
    signOut,
    getBasicUserInfo,
    getIDToken,
    getDecodedIDToken,
    getAccessToken,
    on
} = useAuthContext();

let handleActivation = async ()=>{
  let accessToken = await getAccessToken();
  console.log(accessToken)
}

  return (
    <div>
        <h1>Admin UI</h1>
        <button onClick={handleActivation}>
          Get Id token
        </button>
    </div>
  )
}
