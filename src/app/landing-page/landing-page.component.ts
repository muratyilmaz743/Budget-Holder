import {Component, OnInit} from '@angular/core';
import * as KUTE from 'kute.js'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
    var tween = KUTE.to('#blob1', {path: '#blob1'}, {path: '#blob2'}).start();
// OR
  }

  signingFunc() {
    /*wrong pass*/
    this.wrongPassword();
  }

  wrongPassword() {
    document.getElementById('passwordInput')!.classList.add('border-red-500');
    document.getElementById('wrongPass')!.classList.remove('hidden');
  }
}
