import { Component } from '@angular/core';
import { MessageService } from './services/message/message.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPSI';

  ABoaNova;
  Title;
  constructor( public messageService: MessageService ){
    this.message();
  }



  message () {
    this.messageService.showMessage().subscribe(
      (res)=>{
        console.log(res);
        this.ABoaNova = res.message;
        this.Title = res.title;
      }, (error)=>{
        console.log(error);
      }
    )
  }
}
