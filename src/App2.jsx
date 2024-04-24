import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import { useEffect } from "react";

import Graph from "graphology";
import Title from "./components/title";

const sigmaSettings = {
  allowInvalidContainer: true,
  defaultEdgeType: "arrow",
  labelDensity: 0.07,
  labelGridCellSize: 60,
  labelRenderedSizeThreshold: 15,
  labelFont: "Lato, sans-serif",
  zIndex: true,
};

export const LoadGraph = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();
    graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
    graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
    graph.addEdge("1", "2", { size: 5, color: "purple" });
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

function App2() {

  return (
    <div id="container" className="vh-100 vw-100 d-flex flex-column" style={{fontFamily:'GowunBatang-Regular'}}>
      <nav className="navbar">
      <Title/>
      </nav>
      <div className="container">
          네트워크는 요소 사이의 연결관계를 나타내는 뭔가... 입니다.
      </div>
      <div className="container">
          이 연구에서는 국어사전의 형식과 논문 사이의 유사성에 주목하여
      </div>
      <div className="container">
          이 연구에서는 국어사전의 형식과 논문 사이의 유사성에 주목하여
      </div>
      <div className="container">
          국어사전에서도 마찬가지로 한 단어를 정의하는데 다른 단어의 의미를 "인용"합니다.
      </div>
      
    </div>
  );
}

export default App2;