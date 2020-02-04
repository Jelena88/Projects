class Info {
    constructor({name, ceo, founded, founder}) {
        this.node = document.createElement('section');

        //Data
        this.name = name;
        this.ceo = ceo;
        this.founded = founded;
        this.founder = founder;

        this.banner=document.createElement('h1');
        this.banner.textContent=this.name;

        this.txtFounder=document.createElement('label');
        this.txtFounder.textContent=this.founder;

        this.txtFounded=document.createElement('label');
        this.txtFounded.textContent=this.founded;
        
        this.txtCeo=document.createElement('label');
        this.txtCeo.textContent=this.ceo;

        this.node.appendChild(this.banner);
        this.node.appendChild(this.txtFounder);
        this.node.appendChild(this.txtFounded);
        this.node.appendChild(this.txtCeo);

    }

    getNode(){
        return this.node;
    }
}

export{
    Info
}