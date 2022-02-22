import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signingFunc() {
    /*wrong pass*/

    document.getElementById('signingBtn')?.classList.add(' border-red-500');
    document.getElementById('wrongPass')?.classList.remove('hidden');
  }
}
