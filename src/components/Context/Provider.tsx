import { createContext, useContext, type JSX } from "solid-js"
import { createStore } from "solid-js/store"

import { type AppStateType } from "./Types"

const Context = createContext<AppStateType>({} as AppStateType)

export default (props: { children: JSX.Element }) => {

    const [state, setState] = createStore({
        isSimulationRunning: false,
      })
    
    const AppState: AppStateType = [
        state,
        {
            startSimulation() {
                setState("isSimulationRunning", (isRunning) => {
                    isRunning = true
                    return isRunning
                })
            },
            pauseSimulation() {
                setState("isSimulationRunning", (isRunning) => {
                    isRunning = false
                    return isRunning
                })
            }
        }
    ]

    return (
        <Context.Provider value={ AppState }>
            { props.children }
        </Context.Provider>
    )
}

const useAppState = () => useContext(Context)

export {
    useAppState
}