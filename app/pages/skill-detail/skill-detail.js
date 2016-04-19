import {NavController, NavParams, Page} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/skill-detail/skill-detail.html'
})
export class SkillDetailPage {
    static get parameters() {
        return [[NavParams]];
    }
    constructor(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
    }
    goBack() {
        this.nav.pop();
    }
}
