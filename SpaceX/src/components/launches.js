import { getAllLaunches } from "../utilities/space-x-service";
import { Launch } from "./launch";

class Launches{
    constructor(){
        this.node=document.createElement('launches');
        getAllLaunches().then(data=>{
            data=data.filter(element=> element.links.mission_patch!=null)
            this.loadData(data);
        })
    }

    loadData(data){
        this.node.innerHTML='';
        data.forEach(element=>{
            let launch=new Launch(element);
            this.node.appendChild(launch.getNode());
        })
    }
    getNode(){
        return this.node;
    }


}

export{
    Launches
}