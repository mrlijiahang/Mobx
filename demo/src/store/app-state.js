import {observable, computed,autorun,action} from 'mobx'
class Appstate{
    @observable count =0
    @observable name ="lijiahang"
    @computed get msg(){
        return `${this.name} say conut is ${this.count}`
    }
    @action add(){
        this.count +=1
    }
}
const appState =new Appstate()
autorun(()=>{
    console.log(appState.msg)
})
setInterval(()=>{
    appState.add()

})
export default appState