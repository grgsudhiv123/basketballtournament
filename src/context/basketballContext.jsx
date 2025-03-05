import { useContext, createContext, useState } from "react";

const BasketBallContext = createContext();

export const useBasketballContext = () => useContext(BasketBallContext)

const BasketBallContextProvider = ({children}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <BasketBallContext.Provider value={{toggle, setToggle}}>
            {children}
        </BasketBallContext.Provider>
    )
}

export default BasketBallContextProvider;