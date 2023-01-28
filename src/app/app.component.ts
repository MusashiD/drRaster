import { TesteService } from './teste.service';
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
  window = window;
  login:any = '';
  senha:any = '';


   constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer,
    private cdr: ChangeDetectorRef,
    private postTest: TesteService
   ){
      console.log(this.width);
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/marca-real-rastreamento.svg")
    )

    this.matIconRegistry.addSvgIcon(
      'apple',
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/appStore.svg")
    )

    this.matIconRegistry.addSvgIcon(
      'play',
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/playstore.svg")
    )
   }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }


   openMenu(){
    this.isMenuOpen = !this.isMenuOpen;
   }

   postTeste(event:any){
   let request = {
      app:"PORTAL",
      password: event.target.password.value,
      username: event.target.login.value
    }

    this.postTest.postTest(request).subscribe(
      (res:any) =>{
        let url = `https://www.realrastreamento.com.br/auth/${res.token}`
        const w = window.open(url, '_blank');
          if (w) {
          w.focus(); // okay now
            }
      }
    )
     }


}
