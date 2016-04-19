import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/portfolio-detail/portfolio-detail.html'
})
export class PortfolioDetailPage {
  constructor() {

  }
    goToSkillsPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.nav.push(SkillsDetailPage);
  }
}