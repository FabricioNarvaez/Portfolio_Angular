import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio Angular';
  showScrollButton = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    console.log('test')
    const scrollPosition = window.scrollY;
    this.showScrollButton = scrollPosition > 20;
  }

  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
