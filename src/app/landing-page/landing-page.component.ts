import {Component, OnInit, ViewEncapsulation} from "@angular/core";

declare var $: any;

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  selectedIndex = 0;

  constructor() {
  }

  ngOnInit(): void {
    const firstWelcome = document.getElementById("WelcomingFirst");
    const secondWelcome = document.getElementById("WelcomingSecond");

    window.addEventListener('wheel', function (e) {
      var wheelDir = wheelCalculator(e.deltaY);

      $(firstWelcome).css("opacity", wheelDir);
      $(secondWelcome).css("opacity", -wheelDir);
    });

      function wheelCalculator(wheelDelta: number) {
        if (wheelDelta > 0) return -1;
        else if (wheelDelta < 0) return 1;
        else return 0;
      }

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
