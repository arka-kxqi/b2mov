
import { useETHProvider, useBTCProvider, useConnectModal } from '@particle-network/btc-connectkit';

import { notification } from 'antd';
import React, { useState, useEffect, useContext, useMemo } from "react";


const ethers = require("ethers")

const AlchemyContext = React.createContext({
  accountAddress: undefined,
  provider: undefined,
  handleLogin: undefined,
  loading: undefined,
  Logout: undefined,
  balance: undefined,
});


export const UseAlchemy = () => {
  return useContext(AlchemyContext);
};

export const BiconomyProvider = ({ children }) => {


   const [loading, setLoading] = useState(false);

  const { provider, account, chainId, smartAccount } = useETHProvider();
  const { openConnectModal, disconnect } = useConnectModal();
  const { accounts, sendBitcoin, getNetwork } = useBTCProvider();




  const customProvider = new ethers.providers.Web3Provider(provider, "any");
  const [balance, setBalance] = useState(null);


  useEffect(() => {
   
    if (!customProvider || !accounts)  return;
   


    const fetchBalance = async () => {
      const balanceResponse = await customProvider.getBalance(account);

      localStorage.setItem("filWalletAddress",account);


      localStorage.setItem("smartbal",parseFloat(ethers.formatEther(balanceResponse)).toFixed(3));
      
      console.log(parseFloat(ethers.formatEther(balanceResponse)).toFixed(3))
    };
      fetchBalance();

  }, [account,accounts]);

  

  const handleLogin = () => {
    
    setLoading(true);

    if (!accounts.length) {
      openConnectModal();
    }
    setLoading(false);
  };

  const  Logout = async  () => {
     disconnect();
     window.location.reload();
  };

  return (
        <AlchemyContext.Provider
      value={{
        accountAddress: account,
        provider: customProvider,
        handleLogin,
        loading,
        Logout,
        balance,
      }}
    >
      {children}
    </AlchemyContext.Provider>
  );
   
};