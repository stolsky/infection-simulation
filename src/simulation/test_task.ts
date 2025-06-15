import { Assets, Sprite } from "pixi.js"

import { PixiTask, type TPixiRenderer } from "simulation-construction-kit"


class TestTask extends PixiTask {

    private bunny: Sprite = new Sprite()

    protected update = (delta_time: number) => {
        this.bunny.rotation += 0.1 * delta_time;
    }

    protected render = () => {}

    init = async (application: TPixiRenderer) => {

        const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

        // Create a new Sprite from an image path.
        this.bunny = new Sprite(texture)

        // Add to stage.
        const app = application.get_renderer()
        app.stage.addChild(this.bunny)

        // Center the sprite's anchor point.
        this.bunny.anchor.set(0.5)

        // Move the sprite to the center of the screen.
        this.bunny.x = app.screen.width / 2
        this.bunny.y = app.screen.height / 2

    }
    

}

export default TestTask
