import { Info } from "../components/info";
import { getCompanyInfo } from "../utilities/space-x-service";

class Header {
    constructor() {
        this.node = document.createElement('header');
        this.info =null;
        getCompanyInfo().then(data=>{

            this.info=new Info(data);
            this.node.appendChild(this.info.getNode());
        });
    }
    getNode(){
        return this.node;
    }

}

export{
    Header
}