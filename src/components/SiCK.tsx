import Provider from "./Context/Provider"
import Controls from "./Controls/Controls"
import Visualization from "./Visualization/Visualization"

export default () => {
    return (
        <div class="SiCK">
            <Provider>
                <Visualization />
                <Controls />
            </Provider>
        </div>
    )
}