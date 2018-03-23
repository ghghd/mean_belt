import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pets: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getPets();
  }
  getPets(){
    let observable = this._httpService.getAll();
    observable.subscribe(data => {
      this.pets= data['pet'];
      console.log(this.pets);
    })
  }
  details(id){
    this._router.navigate(['/details/'+ id]);

  }
  edit(id){
    this._router.navigate(['/edit/'+id]);
  }
}
