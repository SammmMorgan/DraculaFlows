import { AppState } from "../AppState.js";
import { DracFlow } from "../models/DracFlow.js";
import { dracFlowService } from "../services/DracFlowService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawActiveFlow() {
    const flow = AppState.currentFlow
    setHTML('currentFlow', flow.CurrentFlowBox)

}

function _drawFlowList() {

    const draculaFlows = AppState.DracFlows
    let htmlString = ''
    draculaFlows.forEach(draculaFlow => htmlString += draculaFlow.DracFlowList)
    setHTML('dracFlowList', htmlString)
    // console.log(htmlString);
}

export class DracFlowController {
    constructor() {
        dracFlowService.loadFlows()
        _drawFlowList()
        this.setCounter()
        AppState.on('DracFlows', _drawFlowList)
        AppState.on('DracFlows', this.setCounter)
        AppState.on('currentFlow', _drawActiveFlow)
    }

    setCurrentFlow(flowId) {
        // console.log('setting flow', flowId);
        dracFlowService.setCurrentFlow(flowId)
    }

    setCounter() {
        const counterElement = document.getElementById('counter')
        counterElement.innerText = `Current Flows: ${AppState.DracFlows.length}`
    }

    saveCurrentFlow() {
        const textAreaElement = document.getElementById('currentFlowTextArea')

        const currentFlow = AppState.currentFlow
        currentFlow.lastAccessed = new Date()
        // @ts-ignore
        console.log(textAreaElement.value);

        // @ts-ignore
        const updatedFlow = textAreaElement.value


        dracFlowService.updateFlow(updatedFlow)
    }

    createNewFlow() {
        try {
            event.preventDefault()
            console.log('checking vibe');
            const form = event.target
            // console.log(form);
            const newFlowData = getFormData(form)
            // console.log(newFlowData);
            dracFlowService.createFlow(newFlowData)

            // AppState.currentFlow = dracFlowService.createFlow
        }

        catch {
            Pop.error
        }
    }

    async killFlow(flowID) {
        const sureToRemove = await Pop.confirm('U sure u wanna do that blud?')

        if (!sureToRemove) {
            return
        }
        dracFlowService.killFlow(flowID)
    }

}