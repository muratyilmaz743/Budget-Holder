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
    /*  const firstWelcome = document.getElementById("WelcomingFirst");
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
        }*/
    window.addEventListener('wheel', function (e) {
      // @ts-ignore
      console.log(elementInViewport('.containerSecond'));
      if (elementInViewport('.containerSecond')){
        $('.registerFormWrapper').css('left','80vw');
      }
      else {
        $('.registerFormWrapper').css('left','65vw'); /*this shouldnt be static*/
      }
    });

   function elementInViewport(el: string) {
     var offsets = $(el).offset();
     var elementTop = offsets.top;
     var elementBottom = elementTop + $(el).outerHeight();

     var viewportTop = $(window).scrollTop();
     var viewportBottom = viewportTop + $(window).height();

     return (
       elementBottom > viewportTop && elementTop < viewportBottom
     );
     /*says  if second element is in the viewport or not*/
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
