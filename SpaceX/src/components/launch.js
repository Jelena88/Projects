import { create } from "domain";

class Launch{
    constructor(data){
        this.node=document.createElement('launch');

        this.data=data;

        this.mission_name = data.mission_name;
        this.launch_year =data.launch_year;
        this.launch_date_utc = data.launch_date_utc;
        this.rocket_name = data.rocket.rocket_name;
        this.site_name = data.launch_site.site_name;
        this.mission_patch = data.links.mission_patch;
        this.banner = document.createElement('h2');
        this.banner.textContent = this.mission_name;
        this.txtLauncYear = document.createElement('label');
        this.txtLauncYear.textContent = this.launch_year;
        this.txtLaunchDate = document.createElement('label');
        this.txtLaunchDate.textContent = this.launch_date_utc;
        this.txtRocketName = document.createElement('label');
        this.txtRocketName.textContent = this.rocket_name;
        this.txtSiteName = document.createElement('label');
        this.txtSiteName.textContent = this.site_name;
        this.picture = document.createElement('img');
        this.picture.src = this.mission_patch;
        this.node.appendChild(this.banner);
        this.node.appendChild(this.txtLauncYear);
        this.node.appendChild(this.txtLaunchDate);
        this.node.appendChild(this.txtRocketName);
        this.node.appendChild(this.txtSiteName);
        this.node.appendChild(this.picture);
    }
    getNode(){
        return this.node;
    }

}

export{
    Launch
}