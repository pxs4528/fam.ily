import React, {  useState, useEffect} from "react";
import ReactFamilyTree from "react-family-tree";
import { PinchZoomPan } from "./PinchZoomPan";
import FamilyNode  from "./FamilyNode";
import { getNodeStyle } from "./utils";
import tree from "../treenew.json";
import css from "../css/tree.module.css";

export default function Tree({ shape }) {
  const [nodes, setNodes] = useState(shape);
  const [firstNodeId, setFirstNodeId] = useState(nodes[0].id);
  const [rootId, setRootId] = useState(firstNodeId);


  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {nodes? 
        <div className={css.root}>
          <PinchZoomPan
            min={0.5}
            max={2.5}
            captureWheel
            className={css.wrapper}
          >
            <ReactFamilyTree
              nodes={nodes}
              rootId={rootId}
              width={160}
              height={160}
              className={css.tree}
              renderNode={(node) => (
                <FamilyNode
                  key={node.id}
                  node={node}
                  style={getNodeStyle(node)}
                />
              )}
            />
          </PinchZoomPan>
        </div>
        : <div>loading</div>}
      </div>
    </div>
  );
}
