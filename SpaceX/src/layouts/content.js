import { Launches } from "../components/launches";
import { getAllLaunches } from "../utilities/space-x-service";

class Content {
    constructor() {
        this.node = document.createElement('div');
        this.selectYear = document.createElement('select');
        let dateNow = new Date();
        for (let i = 2002; i <= dateNow.getFullYear(); i++) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            this.selectYear.appendChild(option);
        }

        this.btnAsc = document.createElement('button');
        this.btnAsc.textContent = 'Rastuce';

        this.btnDsc = document.createElement('button');
        this.btnDsc.textContent = 'Opadajuce';

        this.launches = new Launches();

        this.selectYear.addEventListener('change', () => {
            //povucemo podatke s beka
            getAllLaunches().then(data => {
                //filtriramo podatke po godini
                data = data.filter(x => x.links.mission_patch != null && x.launch_year == this.selectYear.value)
                //posaljemo u this.launches podatke koje zelimo da prikazemo
                this.launches.loadData(data);
            })
        })
        this.btnDsc.addEventListener('click',()=> {
            //povucemo podatke s beka
            getAllLaunches().then(data => {
                //sortiramo podatke po godini
                data = data.filter(x => x.links.mission_patch != null)
                data = data.sort((a, b) => b.launch_year - a.launch_year);
                //posaljemo u this.launches podatke koje zelimo da prikazemo

                this.launches.loadData(data);
            })


        })
        this.btnAsc.addEventListener('click',()=> {
            //povucemo podatke s beka
            getAllLaunches().then(data => {
                //sortiramo podatke po godini
                data = data.filter(x => x.links.mission_patch != null)
                data = data.sort((a, b) => a.launch_year - b.launch_year);
                //posaljemo u this.launches podatke koje zelimo da prikazemo
                this.launches.loadData(data);
            })


        })
        this.node.appendChild(this.selectYear);
        this.node.appendChild(this.btnAsc);
        this.node.appendChild(this.btnDsc);
        this.node.appendChild(this.launches.getNode());

    }
    getNode() {
        return this.node;
    }
    
}
export {
    Content
}