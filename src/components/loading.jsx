import React from "react";

function Loading() {
    return(
        <div style={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' ,alignItems: 'center', justifyContent: 'center'}}>
            <div>
            <h2 style={{color: '#F59115'}}>NeoFranxx</h2>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                <div class="spinner-border text-warning" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Loading;