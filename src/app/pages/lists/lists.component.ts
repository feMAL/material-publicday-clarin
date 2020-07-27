import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PublicdaysService } from 'src/app/services/publicdays.service';
import { PublicDay } from 'src/app/models/publicday'

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  public displayedColumns: string[] = ['fecha', 'motivo', 'tipo', 'opcional', 'acciones'];
  public dataSource: MatTableDataSource<PublicDay>
  public year = new Date().getFullYear()

  @ViewChild( MatPaginator, {static: true} ) paginator: MatPaginator;

  constructor(
    private _publicdayService: PublicdaysService,
    private _navigater       : Router
  ) {}

  ngOnInit() {
    this.getDataTable();
  }

  getDataTable = () => {  
    this._publicdayService.getAllPublicDays()
      .subscribe( (data: PublicDay [] ) => {
        this.dataSource = new MatTableDataSource<PublicDay>(data);
        this.dataSource.paginator = this.paginator;
      },err=>{
        console.log(err);
      });
  }

  gotoElement(element){
    console.log(element);
    this._navigater.navigateByUrl(`../edit/${element}`);
  }

}
