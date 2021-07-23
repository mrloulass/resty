import React from 'react';

import './results.scss';

function Results (props) {
    return (
      <section>
        <pre data-testid="resultsData">{props.response ? JSON.stringify(props.response, undefined, 2) : props.data}</pre>
      </section>
    );
}

export default Results;
