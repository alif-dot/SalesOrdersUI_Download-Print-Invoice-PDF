import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{

  constructor(private readonly service:MasterService) { }
   test:any=[];
  ngOnInit(): void {
    this.service.GetAllInvoice().subscribe({
      next:(data)=>{
        console.log(data);
        
      }
    })
  }


  ratingcount=0;
  totalrating=0

  Finalrating:any;

  ratingcontrol=new FormControl(0);
  GetRating(){
    this.ratingcount++;
    this.totalrating +=this.ratingcontrol?.value || 0;
    //console.log(this.ratingcontrol.value);
    this.Finalrating= (this.totalrating/this.ratingcount).toFixed(2)
  }
}
