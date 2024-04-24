import { SigmaContainer, ControlsContainer, ZoomControl, FullScreenControl, SearchControl, useLoadGraph, } from "@react-sigma/core";
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";
import { useState, useEffect } from "react";
import LoadGraph from "./loadgraph";
import Title from "./title";
import GraphEvents from "./graphevents"
import WordCard from "./wordcard";
import WordDetail from "./worddetail";
import dictionaryData from "/src/data/dictionary.json";
import parentData from "/src/data/parent.json";

import "@react-sigma/core/lib/react-sigma.min.css";

const sigmaSettings = {
    allowInvalidContainer: true,
    defaultEdgeType: "arrow",
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
    labelFont: "Lato, sans-serif",
    zIndex: true,
};

function SigmaComponent(){

    let [isVisible,setVisibility] = useState(false);
    let [wordName,setWordName] = useState('광물');
    let [parentName,setParentName] = useState('광물');
    let [wordDefinition,setWordDefinition] = useState("대충 정의가 쓰여져있음. 대충 정의가 쓰여져있음. 대충 정의가 쓰여져있음. 대충 정의가 쓰여져있음.");

    function setWordCard(word,x,y){
        setVisibility(true);
        setWordName(word);
        setWordDefinition(dictionaryData[word]);
        setParentName(parentData[word])
    }

    function hideWordCard(){
        setVisibility(false);
        setWordName("");
    }

    return(
        <SigmaContainer settings={sigmaSettings}>
            <ControlsContainer position={"top-left"} style={{border:"0", backgroundColor:"transparent", fontFamily:'GowunBatang-Regular'}}>
                <Title/>
            </ControlsContainer>
            <ControlsContainer position={"top-right"} style={{fontFamily:'GowunBatang-Regular'}}>
                <SearchControl labels={{placeholder:"단어찾기", text:"단어찾기"}} style={{ width: "200px" }}/>
            </ControlsContainer>
            <GraphEvents setWordCard={setWordCard} hideWordCard={hideWordCard}/>
            <LoadGraph />
            <ControlsContainer position={"bottom-right"}>
                <ZoomControl labels={{zoomIn:"다가가기",zoomOut:"멀리하기", reset:"리셋"}}/>
                <FullScreenControl label={{}}/>
                <LayoutForceAtlas2Control />
            </ControlsContainer>
            <ControlsContainer style={{border:"0", backgroundColor:"transparent", fontFamily:'GowunBatang-Regular', visibility:(isVisible? 'visible':'hidden')}}>
                  <WordCard name={wordName} parent={parentName} setWordCard={setWordCard} definition={wordDefinition}/>
            </ControlsContainer>
            <WordDetail word={wordName} parent={parentName} setWordCard={setWordCard} definition={wordDefinition} style={{fontFamily:'GowunBatang-Regular'}} />
        </SigmaContainer>
    );
}

export default SigmaComponent;
