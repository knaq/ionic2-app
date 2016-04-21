import {Page, NavController} from 'ionic-angular';
import {SkillsDetailPage} from '../skill-detail/skill-detail';

@Page({
  templateUrl: 'build/pages/profile/profile.html'
})
export class Profile {
  constructor() {
    console.log('Lol what the fuck')
    // console.log(nav);
    // this.nav = nav;
  }

  goToSkillsPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.nav.push(SkillsDetailPage);
  }
}