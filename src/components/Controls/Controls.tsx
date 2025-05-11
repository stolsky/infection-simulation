import { Show } from "solid-js"

import { useAppState } from "../Context/Provider"

import "./Controls.css"

export default (props: {
    useLeave?: boolean,
    useSpeedUp?: boolean,
    useSlowDown?: boolean,
    useMultiplier?: boolean,
    useShowTime?: boolean
}) => {
    const [state, { startSimulation, pauseSimulation }] = useAppState()
    return (
        <div class="Controls">
            <Show when={ !state.isSimulationRunning }>
                <button onclick={ () => startSimulation() }>play</button>
            </Show>
            <Show when={ state.isSimulationRunning }>
                <button onclick={ () => pauseSimulation() }>stop</button>
            </Show>
            <Show when={ props.useSlowDown || false }>
                <button>slow down</button>
            </Show>
            <Show when={ props.useMultiplier || false }>
                <p>1x</p>
            </Show>
            <Show when={ props.useSpeedUp || false }>
                <button>speed up</button>
            </Show>
            <Show when={ props.useShowTime || true }>
                <p>00:00:00.000</p>
            </Show>
            <Show when={ props.useLeave || false }>
                <button>leave</button>
            </Show>
        </div>
    )
}