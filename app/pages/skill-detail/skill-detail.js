import {Page} from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/skills-detail/skill-detail.html'
})
export class SkillsDetailPage {
    constructor(nav: NavController) {
        this.nav = nav;
    }
    goBack() {
        this.nav.pop();
    }
}
