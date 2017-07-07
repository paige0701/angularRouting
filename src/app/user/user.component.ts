import {Component, Injector, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  constructor(private router: Router,
              private route: ActivatedRoute){
  }

  ngOnInit() {
  }


  public navigateUser(number:Number){
    console.info("hello");
    if(number==1) {

      // if using routerLink relativeTo is not necessary. However if using the router relativeTo : is mandatory to navigate
      this.router.navigate(['register'], {relativeTo: this.route});
    }else if ( number == 2){
      this.router.navigate(['findpw'], {relativeTo: this.route})

    }

  }


}
