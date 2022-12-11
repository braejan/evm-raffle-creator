import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useState } from "react";
import useRaffleCreator from "../../hooks/useRaffleCreator";

const Home = () => {
    const { active, account } = useWeb3React();
    const [connectionCounter, setConnectionCounter] = useState();
    const [owner, setOwner] = useState();
    const raffleCreatorEVMApp = useRaffleCreator();    
    const getVisitCount = useCallback(async () => {
        if (raffleCreatorEVMApp && account) {
            const counter = await raffleCreatorEVMApp.methods.connectionCounter(account).call({from: account});
            setConnectionCounter(counter);
            const addr = await raffleCreatorEVMApp.methods.owner().call({from: account});
            setOwner(addr);
        }
    }, [raffleCreatorEVMApp, account]);
    useEffect(() => {
        getVisitCount();
    }, [getVisitCount]);

    if (!active) {
        return (
            <>
            <p>You really need to connect your wallet.</p>
            </>
        )
    }
    return (
        <>
        <p>Hello there, you have {connectionCounter} visits on this EVM Application.</p>
        <p>The owner of this bussiness is {owner}</p>
        </>
    );
}

export default Home;