import {Page, NavController} from 'ionic-angular';
import {SkillDetailPage} from '../skill-detail/skill-detail';

@Page({
  templateUrl: 'build/pages/profile/profile.html'
})
export class Profile {
  nav: NavController;
  constructor(nav: NavController) {
    this.nav = nav;
  }

  goToSkillsPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.nav.push(SkillDetailPage);
  }
}