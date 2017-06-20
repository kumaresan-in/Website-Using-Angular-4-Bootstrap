import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-banner',
  templateUrl: './banner.component.html'
})
export class BannerComponent {
  title = 'app';

  private jbTitle:string;
  private jbDes:string;
  private jbBtnText:string;
  private jbBtnUrl:String;

  constructor() {

    this.jbTitle="Hello World";
    this.jbDes="Corporate Site : This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.";
    this.jbBtnText="Click Here";
    this.jbBtnUrl="/about";

  }
}
