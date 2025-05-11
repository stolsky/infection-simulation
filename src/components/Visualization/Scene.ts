import { Application, Assets, Sprite } from 'pixi.js'

const init = async (app: Application) => {

    console.log("init scene")

    const texture = await Assets.load('https://pixijs.com/assets/bunny.png')

    // Create a bunny Sprite
    const bunny = new Sprite(texture)

    // Center the sprite's anchor point
    bunny.anchor.set(0.5)

    // Move the sprite to the center of the screen
    bunny.x = app.screen.width / 2
    bunny.y = app.screen.height / 2

    app.stage.addChild(bunny)

    app.ticker.add((time) => {
        bunny.rotation += 0.1 * time.deltaTime;
    })
}

export default init