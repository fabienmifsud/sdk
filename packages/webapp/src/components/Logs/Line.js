import React, { useRef } from 'react';
import { Icon, Tooltip } from 'saagie-ui/react';
import PropTypes from 'prop-types';

const propTypes = {
  index: PropTypes.number.isRequired,
  line: PropTypes.shape({
    log: PropTypes.string.isRequired,
    stream: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
};

const STREAM = Object.freeze({
  STDOUT: 'stdout',
  STDERR: 'stderr',
});

export const Line = ({ index, line }) => {
  const contentRef = useRef();

  return (
    <div className="sdk-a-logs__line">
      <Tooltip defaultPlacement="left" label={line.time ? line.time : 'Not available'}>
        <div className="sdk-a-logs__line-clock"><Icon name="fa-clock-o" /></div>
      </Tooltip>
      <div className="sdk-a-logs__line-index">{index + 1}</div>
      <div
        className={`sdk-a-logs__line-content ${line.stream === STREAM.STDERR ? 'as--error' : ''}`}
        ref={contentRef}
      >
        {line.log}
      </div>
    </div>
  );
};

Line.propTypes = propTypes;
