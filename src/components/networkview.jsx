import { SigmaContainer } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import LoadGraph from "./loadgraph";

function NetworkView(){
    return(
        <SigmaContainer>
            <LoadGraph />
        </SigmaContainer>
    );
}

export default NetworkView;