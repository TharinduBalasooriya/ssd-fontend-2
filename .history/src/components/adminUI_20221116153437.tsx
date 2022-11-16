import { useAuthContext } from '@asgardeo/auth-react';
import React from 'react'
import Addmessage from "../pages/Addmessage";
import ButtonAppBar from "../components/ButtonAppBar"


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
      <ButtonAppBar></ButtonAppBar>
       <div style={{paddingRight:'20vh'}}>
       <h1>Loged In As Admin</h1>
       </div>

        <button onClick={handleActivation}>
          Get Id token
        </button>
    </div>
  )
}
