import React from "react";

import { App } from "./App";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Transition } from '@headlessui/react';

import { BSquaredTestnet,BSquared } from '@particle-network/chains';
import {
  ConnectProvider,
  OKXConnector,
  UnisatConnector,
  TokenPocketConnector,
  BybitConnector,
  BitgetConnector
} from '@particle-network/btc-connectkit';


import('buffer').then(({ Buffer }) => {
  window.Buffer = Buffer;
});

ReactDOM.render(
    <React.StrictMode>
      <ConnectProvider
      options={{
        projectId: "2509d133-0dd5-409a-bf0d-7db2b6648bbf",
        clientKey: "cbdskjEjAxMDhYksv0ubDZo51l599QCOHZqBpPA0",
        appId: "efb5c91d-cfae-49d5-bacb-8b30e35e83f9",
        aaOptions: {
          accountContracts: {
            BTC: [
              {
                chainIds: [BSquaredTestnet.id, BSquared.id],
                version: '2.0.0',
              }
            ]
          }
        },
        walletOptions: {
          visible: false
        }
      }}
      connectors={[new UnisatConnector(), new OKXConnector(), new TokenPocketConnector(), new BybitConnector(), new BitgetConnector()]}
    >
  
      <BrowserRouter>
      
        <Routes>
        
          <Route path="*" element={ <App /> }>
          
          </Route>
        </Routes>

       
      </BrowserRouter>
      
      <ToastContainer/>
      <Transition show={true}/>

      </ConnectProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  