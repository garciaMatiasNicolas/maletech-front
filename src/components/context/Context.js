import { createContext, useState } from "react";

const FetchContext = createContext( [] );

const FetchProvider = ( {children} ) => {
    const [response, setResponse] = useState({});

    const context = {
        response, 
        setResponse
    }

    return(
        <FetchContext.Provider value={context}>
            { (children) }
        </FetchContext.Provider> 
    )
}

export {FetchContext, FetchProvider}