import { DracFlow } from './models/DracFlow.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {



  DracFlows = [
    new DracFlow({
      title: 'The Hardest of em all',
      body: `They must have amnesia, they forgot that I'm Him`,
      color: '#4287f5'
    }),
    new DracFlow({
      title: 'Somthin bout the hoes',
      body: `B*tch threw it back at an Egregious angle`,
      color: '#497520'
    }),
    new DracFlow({
      title: `opps`,
      body: `F*ck it I smoked the opps, meat came right off the bone`,
      color: '#f78d99'
    }),
  ]

  currentFlow = null
}

export const AppState = createObservableProxy(new ObservableAppState())