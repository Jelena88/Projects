import { Header } from "./header";
import { Content } from "./content";

class Dashboard{
    constructor(){
        this.node=document.createElement('dashboard');

        this.header=new Header();
        this.node.appendChild(this.header.getNode());

        this.content=new Content();
        this.node.appendChild(this.content.getNode());

    }

    getNode(){
        return this.node;
    }
}

export{
    Dashboard
}