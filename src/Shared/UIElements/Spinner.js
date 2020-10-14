import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = ({variant}) => {
    return (
        <div className="spinner">
            <CircularProgress style={{width: "200px", height: "200px", color: "#111", margin: "auto", display:"block"}} variant={variant} aria-describedby="loading" aria-busy={true} />
        </div>
    )
}

export default Spinner
