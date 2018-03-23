import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
pets: any;
id: any;
likes: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = params['id']);
    console.log(this.id);
    this.getPet();
  }
  getPet(){
    let observable = this._httpService.getPet(this.id);
    observable.subscribe(data => {
      this.pets= data['pets'];
      console.log(this.pets);
      this.likes = data['pets'][0].likes;
    })
  }
  voteUp(id){
    let up = this.likes;
    up += 1;
    console.log(up);
    let observable = this._httpService.addLike(id, up);
    observable.subscribe(data => {
      console.log(data);
    })
    this.ngOnInit();
  }
  edit(id){
    this._router.navigate(['/edit/'+ id]);
  }
  deletePet(id){
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
    })
    this._router.navigate(['/home']);
  }

}
