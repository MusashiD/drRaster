import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Component, OnChanges, SimpleChanges,ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'DrRaster';
  isMenuOpen = false;
  width = screen.width;
   constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer,
    private cdr: ChangeDetectorRef
   ){
      console.log(this.width);
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/marca real rastreamento.svg')
    )
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }


   openMenu(){
    this.isMenuOpen = !this.isMenuOpen;
   }


}
