import Panel from "../Panel/Panel"
import PixiJsCanvas from "./PixiJsCanvas"

export default () => {
    return (
        <Panel title={"MyTitle"} width={1000} height={1000}>
            <PixiJsCanvas />
        </Panel>
    )
}