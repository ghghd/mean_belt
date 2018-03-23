import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id: any;
pets: any;
errors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = params['id']);
    this.getPet();
    
  }
  getPet(){
    let observable = this._httpService.getPet(this.id);
    observable.subscribe(data => {
      this.pets= data['pets'];
    })
  }
  onSubmit(id){
    console.log(id);
    console.log(this.pets);
    let observable = this._httpService.updatePet(id, this.pets)
    observable.subscribe(data => {
      this.errors = data['err'];
    })
    this.goEdit();
  }
  goEdit(){
    this._router.navigate(['/details/'+this.id]);
  }
}
