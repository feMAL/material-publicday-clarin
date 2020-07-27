import { Component, OnInit } from '@angular/core';
import { PublicdaysService } from 'src/app/services/publicdays.service'
import { ActivatedRoute, Router } from '@angular/router'
import { PublicDay } from 'src/app/models/publicday';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public publicDayID: string
  public day :PublicDay

  constructor(
    private _servicePublicday : PublicdaysService,
    private _router           : Router,
    private _activatedRoute   : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( param => {
      this.publicDayID = param['id'];
      console.log(this.publicDayID);
      if(this.publicDayID && this.publicDayID.length == 24){
        this._servicePublicday.getPublicDay(this.publicDayID)
          .subscribe( (data: PublicDay)=>{
            this.day = data
          })
      }else{
        console.log('error en la url');
        this._router.navigate(['/lists']);
      }
    });
  }

}
