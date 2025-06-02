import React from 'react'
import 'instagramImage' from './assets/instagram-logo.svg.png';
import 'googlePlayImage' from './assets/googlePlay.png';
import 'appStoreImage' from './assets/appStore.png';
import 'facebookImage' from './assets/fb-icon.png';
import '../App'

const Login=()=> {
  return (
    <div className='login-container'>
      <div className='box-1'></div>
      <div classname='box-1-logo'>
        <img src={'instagramlogoImage'} alt='#' classname="instagra-logo"/>
      </div>
      <div classname="input-box">
        <input type='text' placeholder='phone number, username or email address'/>
      </div>
      <div classname="input-box">
       <input type="password" placeholder="Password"/>
      </div>
      <div className='input-box '>
        <input type="password" placeholder="Password"/>
      </div>

       <div className='login-button-box'>
        <button className="login-button">Login</button>
      </div>
      <div className='box-2'></div>
      <div className='get-app-box'></div>
      <div className='app-store-google-play-box'></div>
      
    </div>
  )
};

export default Login;
