import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./app.component.css']
})
export class AppComponent {
  title = 'DrRaster';
  isMenuOpen = false;
   constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer
   ){
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/marca real rastreamento.svg')
    )
   }


   openMenu(){
    this.isMenuOpen = !this.isMenuOpen;
   }
}
