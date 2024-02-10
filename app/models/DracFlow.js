import { generateId } from "../utils/GenerateId.js";

export class DracFlow {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.body = data.body
        this.firstAccessed = data.firstAccessed == undefined ? new Date() : new Date(data.firstAccessed)
        this.lastAccessed = data.lastAccessed == undefined ? new Date() : new Date(data.firstAccessed)
        this.color = data.color
    }
    get DracFlowList() {
        return `     
         <p  class="d-flex justify-content-center" role="button">
              <div onclick="app.DracFlowController.setCurrentFlow('${this.id}')" style="text-decoration: ${this.color} underline" class="fs-2 font selectable width-100">
                     <span class="px-3 text-start">${this.title}</span>
                     <span class="px-3 text-end">${this.accessDate}, ${this.accessTime}</span>
             </div>
      </p>`
    }
    get CurrentFlowBox() {
        return `
    <div class="container markerfont">
      <section class="row card justify-content-between card-light" style="border-style: solid; border-color: ${this.color}; border-width: 5px">
        <div class="col-12 fs-3 d-flex justify-content-between">
          <p class="px-3">${this.title}</p>
          <p class="px-3">Made On: ${this.makeDate}, ${this.makeTime}</p>
          <p class="px-3">Last Edited on: ${this.accessDate}, ${this.accessTime}</p>
          <button onclick="app.DracFlowController.killFlow('${this.id}')" class="btn btn-danger" > Delete Flow </button>
        </div>
        <div class="col-10 p-5">
          <div class="form-floating">
            <textarea onblur="app.DracFlowController.saveCurrentFlow()" id="currentFlowTextArea"  class="form-control fs-4" placeholder="Leave a comment here" style="height: 400px"> ${this.body} </textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
        </div>
      </section>
    </div>
    `
    }


    get accessTime() {
        return this.lastAccessed.toLocaleTimeString()
    }
    get accessDate() {
        return this.lastAccessed.toLocaleDateString()
    }


    get makeTime() {
        return this.firstAccessed.toLocaleTimeString()
    }
    get makeDate() {
        return this.firstAccessed.toLocaleDateString()
    }
    get saveActiveFlow() {
        return `
        
        `
    }


}