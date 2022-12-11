import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import RaffleCreatorArtifact from "../../config/web3/artifacts/RaffleCreator";

const {address, abi} = RaffleCreatorArtifact;

const useRaffleCreator = () => {
    const { active, library, chainId } = useWeb3React();
    const raffleCreator = useMemo(() => {
        if (active) {
            return new library.eth.Contract(abi, address[chainId]);
        }
    }, [active, chainId, library?.eth?.Contract]);
    return raffleCreator;
};

export default useRaffleCreator;