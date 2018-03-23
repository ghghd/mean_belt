import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
newPet: any;
errors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newPet= {name: ' ', type: '', description: '', skill1: '', skill2: '', skill3: ''}
  }
  onSubmit(){
    let observable =  this._httpService.addPet(this.newPet);
    observable.subscribe(data => {
      this.errors = data['err'];
      console.log(this.errors);
      this.newPet= {name: ' ', type: '', description: '', skill1: '', skill2: '', skill3: ''}
      if(this.errors){

      }
      else{
        this.goHome();
      }
    })
  }
  goHome(){
    this._router.navigate(['/home']);
  }
  cancel(){
    this._router.navigate(['/home']);
  }
    
}
