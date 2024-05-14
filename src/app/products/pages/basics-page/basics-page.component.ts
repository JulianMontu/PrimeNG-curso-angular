import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLowe: string = 'julian';
  public nameUpper: string = 'ANDRES';
  public fullName: string = 'jUlIaN MOntUfAr'

  public customDate: Date = new Date();


}
