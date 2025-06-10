import React from "react";

export default function Authentication({isAuthenticated, children}){
    return (
        <>
            {isAuthenticated ? children[0] : children[1]}
            {/* children 0 welcome , children 1 es login */}
        </>
    )
}