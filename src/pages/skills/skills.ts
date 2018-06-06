import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {
  coding = ['JavaScript','C/C++','Java(Basics)','HTML5 & CSS3','SQL'];
  dev = ['Angular 2+', 'Ionic 2+', 'Node.js', 'Bootstrap', 'SEO'];
  soft = ['Time Management', 'Self Motivation', 'Creativity', 'Team Work'];
  others = ['Hybrid Apps', 'SEO', 'PWA', 'Problem Solving']; //TODO

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }

}