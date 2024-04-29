import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  constructor(private translateservice:TranslateService) { 
    this.translateservice.setDefaultLang('en');
    this.translateservice.use(set)
  }
lang=''
  ngOnInit(): void {

  }

  changeLang(lang:any){
const selectLang=lang.target.value
  }

}
