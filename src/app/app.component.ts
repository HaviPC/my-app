import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  title1 = 1;
  value2:number=3;
  value3:number;
  ngOnInit(){
    localStorage.setItem('whatever', 'title1');
    localStorage.setItem('whatever2', JSON.stringify(this.value2));
    console.log(localStorage.getItem('whatever'));
    console.log(localStorage.getItem('whatever2'));
    this.value3 =JSON.parse(localStorage.getItem('whatever2'));
    console.log( this.value3);
  }

}
