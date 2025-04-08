import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({children})=>{
    const [name, setName] = useState("");

    return <Context.Provider value={{name, setName}}>
        {children}
    </Context.Provider>
}

export default ContextProvider;