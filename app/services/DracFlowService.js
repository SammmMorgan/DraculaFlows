import { AppState } from "../AppState.js"
import { DracFlow } from "../models/DracFlow.js"

class DracFlowService {
    killFlow(flowID) {
        throw new Error("Method not implemented.");
    }
    createFlow(newFlowData) {
        const newFlow = new DracFlow(newFlowData)

        AppState.DracFlows.push(newFlow)
        console.log(newFlow);
        return newFlow
    }
    updateFlow(updatedFlow) {
        const activeFlow = AppState.currentFlow

        activeFlow.body = updatedFlow
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