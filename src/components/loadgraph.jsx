import { useLoadGraph } from "@react-sigma/core";
import { useEffect } from "react";
import Graph from "graphology";
import gexf from "graphology-gexf"

function LoadGraph(){
    const loadGraph = useLoadGraph();
    let graph = new Graph();
    useEffect(() => {
        fetch("/data.gexf").then((response) =>
            response.text()
        ).then((str) => {
            graph=gexf.parse(Graph,str);
            loadGraph(graph);
        }
        )
    }, [loadGraph]);
  
    return null;
}

export default LoadGraph;
