import {NavController, NavParams, Page} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/skill-detail/skill-detail.html'
})

export class SkillDetailPage {
    nav: NavController;
    
    constructor(nav: NavController) {
        this.nav = nav;
    }
    
    goBack() {
        this.nav.pop();
    }
}
