import React, { createContext, useContext } from "react";

const CommentContext = createContext()

function  CommentContextProvider ({children, data})  {
    return <CommentContext.Provider value={data}>
    {children}
    </CommentContext.Provider>
}

function useComment() {
    const context = useContext(CommentContext);
    if (!context) {
       throw new Error ("there is no comment contex provider")
    }
    return context;
}

export {useComment, CommentContextProvider}