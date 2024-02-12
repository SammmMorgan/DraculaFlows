import { AppState } from "../AppState.js"
import { DracFlow } from "../models/DracFlow.js"
import { loadState, saveState } from "../utils/Store.js"

function _saveFlows() {
    saveState('DracFlows', AppState.DracFlows)
}



class DracFlowService {
    loadFlows() {
        const currentFlows = loadState('DracFlows', [DracFlow])
        AppState.DracFlows = currentFlows
    }

    killFlow(flowID) {
        const removedFlow = AppState.DracFlows.findIndex(flow => flow.id == flowID)

        AppState.DracFlows.splice(removedFlow, 1)
        _saveFlows()

    }
    createFlow(newFlowData) {
        const newFlow = new DracFlow(newFlowData)

        AppState.DracFlows.push(newFlow)
        console.log(newFlow);
        _saveFlows()
        // return newFlow
        this.setCurrentFlow(newFlow.id)
    }
    updateFlow(updatedFlow) {
        const activeFlow = AppState.currentFlow

        activeFlow.body = updatedFlow
        _saveFlows()
        // console.log(updatedFlow);
        AppState.emit('currentFlow')
    }

    setCurrentFlow(flowId) {
        const workingFlow = AppState.DracFlows.find(flow => flow.id == flowId)

        // console.log('working flow', workingFlow.title);

        AppState.currentFlow = workingFlow
    }
}






export const dracFlowService = new DracFlowService()