import React from 'react';
import classNames from 'classnames';
import css from '../css/FamilyNode.module.css';



export default function FamilyNode({ node, style }) {

    return (
      <div className={css.root} style={style}>
        <div
          className={classNames(
            css.inner,
          )}
        >
          <img width="200px" alt='hehe' src={node.img}></img>
        </div>
      </div>
    );
  }

