import React from 'react';

const ChirpSyntax = (props) => {
    return (<><div className="card text-left my-2">
        <div className="card w-100">
            <div className="card-header">
                <div className="media-body">
                    <h5 className="d-inline font-weight-bold">@{props.username}</h5>
                    {/* <h5 className="text-muted"> {props.msg}</h5> */}
                </div>
            </div>
        </div>
        <p className="card-text p-1 m-1">{props.msg}</p>
    </div>
    </>
    )
}

export default ChirpSyntax;