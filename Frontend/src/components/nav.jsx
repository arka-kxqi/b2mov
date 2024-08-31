import React, { useState, useEffect } from "react";
import Tg from "./toggle";
import { UseAlchemy } from './Hooks/Connection';
import SideMenu from './Sidemenu';


import { useETHProvider, useBTCProvider, useConnectModal } from '@particle-network/btc-connectkit';

function Nav() {

  const {accountAddress,provider, handleLogin,loading,Logout} = UseAlchemy();
  const [isOpen, setIsOpen] = useState(false);
  // alert(accountAddress)
  function logout(){
    alert("Logout")
    localStorage.clear();
    Logout();
  }



  return (
    <>




  <div className='navbar navbar-expand navbar-light bg-white topbar mb-4  shadow fixed-top-bar'>
    <div className=" text-lg mx-3 no-underline">
  <a
  className="flex items-center justify-center alchemy-link"
  href="/"
>
  
  <div className=" mmh text-lg mx-3">BTC Club</div>
</a>
</div>
  <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
            onClick={Tg}
          >
              <i className="fa fa-bars" />
            </button>
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Search Dropdown (Visible Only XS) */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw" />
                </a>
                {/* Dropdown - Messages */}
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              {accountAddress !== null && !isOpen && (
              <>
              <div className=' name flex'>
              {accountAddress}
                 </div>
              </>
              )
              }
              <div className="topbar-divider d-none d-sm-block" />
              {/* Nav Item - User Information */}
              
              {accountAddress && !isOpen && (
            <>
              
              <li className="nav-item dropdown no-arrow">
                <div
                  className="nav-link dropdown-toggle"
                  onClick={() => setIsOpen(true)}
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img

                    className="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                  />
                </div>
                {/* Dropdown - User Information */}

              </li>
              </>
              )}
            </ul>
   
            <div className='maincomp flex'>
          {accountAddress && isOpen && (
            <SideMenu
              address={accountAddress}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              logout={logout}
              userInfo={accountAddress}
            />
          )}
          {!accountAddress && !loading && (
            
            <button onClick={() => handleLogin()}  class=" font-semibold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">LOGIN</button>
            
          )}
          
     
    
          {loading && <button className="btn bg-gradient-1 text-gray-900 transition ease-in-out duration-500 transform hover:scale-110">Loading...</button>}
        </div>
  </div>
</>
  )
}

export default Nav


