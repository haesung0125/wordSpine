import { SigmaContainer, ControlsContainer, ZoomControl, FullScreenControl, SearchControl, useLoadGraph, useSigma } from "@react-sigma/core";
import { createElement, useEffect, useState } from "react";
import { useRegisterEvents, useCamera } from "@react-sigma/core";

function GraphEvents(props){
    const registerEvents = useRegisterEvents();
    const sigma = useSigma();
    useEffect(()=>{
        registerEvents({
            clickNode: (event) => {
                sigma.getGraph().forEachNode((node, attributes) => {
                    sigma.getGraph().setNodeAttribute(node, "highlighted", false);
                });
                sigma.getGraph().setNodeAttribute(event.node, "highlighted", true);
                props.setWordCard(event.node,event.event.x,event.event.y);
            },
            clickStage: (event) => {
                sigma.getGraph().forEachNode((node, attributes) => {
                    sigma.getGraph().setNodeAttribute(node, "highlighted", false);
                });
                props.hideWordCard();
            }
        })
    },[registerEvents]);

    return null;

}

export default GraphEvents;