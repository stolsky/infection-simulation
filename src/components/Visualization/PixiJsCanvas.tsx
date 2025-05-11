import { Application } from 'pixi.js'
import { createEffect, createSignal } from 'solid-js'

import { useAppState } from '../Context/Provider'
import init_scene from "./Scene"

export default () => {

    let initializing = false

    const [canvas, setCanvas] = createSignal<HTMLCanvasElement>()

    const app = new Application()
    app.init({ background: '#1099bb', resizeTo: window })
        .then(() => { setCanvas(app.canvas) })

    const [state] = useAppState()

    createEffect(() => {
        if (state.isSimulationRunning) {
            if (app.stage.children.length === 0 && !initializing) {
                initializing = true
                init_scene(app).then(() => {
                    initializing = false
                })
            }
            // start
            app.start()
        } else if (canvas()) {
            // pause
            app.stop()
        }
    }, [state])
    
    return (
        <>
            { canvas }
        </>
    )
}