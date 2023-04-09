import React, { createContext, useContext } from "react";

const CommentContext = createContext()

function CommentContextProvider = ({children, data}) => {
    return <CommentContext.Provider value={data}>
    {children}
    </CommentContext.Provider>
}

function useComment() {
    const context = useContext(CommentContext);
    if (!context) {
        return <></>
    }
}