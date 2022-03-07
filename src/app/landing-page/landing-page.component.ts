import {Component, ElementRef, OnInit, ViewEncapsulation} from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  selectedIndex = 0;
  constructor() { }

  ngOnInit(): void {
  }

  signingFunc() {
    /*wrong pass*/
      this.wrongPassword();
  }

  wrongPassword() {
    document.getElementById('passwordInput')!.classList.add('border-red-500');
    document.getElementById('wrongPass')!.classList.remove('hidden');
  }

  selectTab(index: number): void {
    this.selectedIndex = index;
  }
}
