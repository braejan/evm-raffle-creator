import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Web3 from 'web3';
import MainLayout from './layouts/main';
function App() {
  // useEffect(() => {
  //   if(window.ethereum) {
  //     window.ethereum.request(
  //       {
  //         method: 'eth_requestAccounts'
  //       }
  //       ).then(
  //         (accounts) => console.log("***** accounts: " + accounts)
  //       );
  //     const web3 = new Web3(window.ethereum);
  //     web3.eth.requestAccounts().then((accounts) => console.log('Total accounts: ' + accounts))

  //   }
  // }, [])
  return (
    <MainLayout>
      <Routes>
        <Route path="/" exact element={<Home/>} />
      </Routes>
    </MainLayout>

  );
}

export default App;
