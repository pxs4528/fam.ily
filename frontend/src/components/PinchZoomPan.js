import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { create } from 'pinch-zoom-pan';

import css from '../css/PinchZoomPan.module.css';



export const PinchZoomPan = React.memo(
  function PinchZoomPan({ min, max, captureWheel, className, style, children }) {
    const root = useRef(null);

    useEffect(() => {
      const element = root.current;
      if (!element) return;
      return create({ element, minZoom: min, maxZoom: max, captureWheel });
    }, [min, max, captureWheel]);

    return (
      <div ref={root} className={classNames(className, css.root)} style={style}>
        <div className={css.point}>
          <div className={css.canvas}>
            {children}
          </div>
        </div>
      </div>
    );
  },
);
