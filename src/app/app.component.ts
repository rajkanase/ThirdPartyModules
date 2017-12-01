import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
    public dateTimeExample = null
    public dateExample = null
    public timeExample = null
  
    constructor() {
    };
  
    setToNow(): void{
      this.dateExample = new Date();
      this.timeExample = `${this.dateExample.getHours()}:${this.dateExample.getMinutes()}`;
      this.dateTimeExample = new Date();
    }

  
}
