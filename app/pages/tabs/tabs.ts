import {Page} from 'ionic-angular';
import {LoginPage} from '../login/login';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  loginPage: Type = LoginPage;

  constructor() {}
}
