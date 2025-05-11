type AppStateType = [
    {
        isSimulationRunning: boolean
    },
    {
        startSimulation(): void,
        pauseSimulation(): void
    }
]

export {
    type AppStateType
}