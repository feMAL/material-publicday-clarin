import { Component, OnInit, Input } from '@angular/core';
import { PublicDay } from 'src/app/models/publicday';
import { PublicdaysService } from 'src/app/services/publicdays.service';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  @Input() feriado: PublicDay
  public mes: number
  public dia: number
  public tipoferiado: String[] = [ 'inamovible', 'trasladable', 'nolaborable', 'puente' ]
  public feriadodate = new Date()

  constructor(
    private _publicdayService:PublicdaysService
  ) { }

  ngOnInit(): void {
    this.mes = Number(this.feriado.mes)
    this.dia = Number(this.feriado.dia)
    this.feriadodate.setDate(this.dia)
    this.feriadodate.setMonth(this.mes - 1)
  }

  updateFeriado(): void {
    if(this.feriado){
      this.feriado.dia = this.feriadodate.getDate();
      this.feriado.mes = this.feriadodate.getMonth();
      this._publicdayService.updatePublicDay(this.feriado)
        .subscribe( (data: PublicDay ) => {
          console.log('actualizado correctamente')
        },err=>{
          console.log(err);
        });
    }
  }
}
