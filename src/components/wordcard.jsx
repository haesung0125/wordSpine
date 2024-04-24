import { useSigma, useCamera } from "@react-sigma/core";
import Highlighter from "react-highlight-words";

function WordCard(props){

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    const sigma = useSigma();
    const camera = useCamera();

    const Highlight = ({ children, highlightIndex }) => (
        <mark className="card-text" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="가장 중요한 단어입니다.">{children}</mark>
    );

    return(
        <div id="wordInfo" className="card mb-auto z-3" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">명사</h6>
                {/* <mark className="card-text" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="가장 중요한 단어입니다.">test</mark> */}
                <Highlighter highlightTag={Highlight} className="card-text" searchWords={[props.parent]} textToHighlight={props.definition} />
                <hr />
                <a href="#" className="card-link float-start" onClick={()=>{props.setWordCard(props.parent); camera.gotoNode(props.parent); sigma.getGraph().setNodeAttribute(props.parent, "highlighted", true);}}>부모찾기</a>
                <a href="#" className="card-link float-end" data-bs-toggle="modal" data-bs-target="#detailModal">더 알아보기</a>
            </div>
        </div>
    );
}

export default WordCard;