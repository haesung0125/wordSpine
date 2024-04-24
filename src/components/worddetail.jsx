import { useSigma, useCamera } from "@react-sigma/core";
import Highlighter from "react-highlight-words";

function WordDetail(props){

    const sigma = useSigma();
    const camera = useCamera();

    return(
        <div className="modal fade" id="detailModal" tabIndex="-1" aria-labelledby="detailModalLabel" aria-hidden="true" style={props.style}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">{props.word}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <Highlighter className="card-text" searchWords={[props.parent]} textToHighlight={props.definition} />
                <hr />
                <p>{sigma.getGraph().hasNode(props.word)? sigma.getGraph().inDegree(props.word): 0}개의 단어에서 가장 중요한 단어입니다.</p>
                <p>{(sigma.getGraph().hasNode(props.word)? sigma.getGraph().inNeighbors(props.word): []).map(word => (<a key={word} onClick={()=>{props.setWordCard(word); camera.gotoNode(word); sigma.getGraph().setNodeAttribute(word, "highlighted", true)}}>{word} </a>))} </p>
                <a href="#" className="card-link float-start" onClick={()=>{let parent=(sigma.getGraph().hasNode(props.word)? sigma.getGraph().outNeighbors(props.word): []); props.setWordCard(parent); camera.gotoNode(parent); sigma.getGraph().setNodeAttribute(parent, "highlighted", true);}}>부모찾기</a>
                <a href="/howto.html" className="card-link float-end" target="_blank">분석 방법 알아보기</a>
              </div>
            </div>
          </div>
        </div>
    );
}

export default WordDetail;