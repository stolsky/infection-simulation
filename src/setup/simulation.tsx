import { Controls, Overlay, Page, Panel, Visualization } from "simulation-construction-kit"

import "./simulation.css"
import TestTask from "../simulation/test_task"


export default () => {

    const options = {
        iterations: 250,
        cell_size: 2
    }

    const canvas_width = 1200
    const canvas_height = 1000

    return (
        <Page>
            <div class="Grid">
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new TestTask() }
                />
            </div>
            <Controls slow_down speed_up multiplier show_time />
        </Page>
    )
}