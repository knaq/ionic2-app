import {Page, NavController} from 'ionic-angular';
import {SkillsDetailPage} from '../skill-detail/skill-detail';

@Page({
  templateUrl: 'build/pages/portfolio-detail/portfolio-detail.html'
})
export class PortfolioDetailPage {
  nav: NavController;
  
  constructor(nav: NavController) {
    this.nav = nav;
  }
    goToSkillsPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.nav.push(SkillsDetailPage);
  }
}