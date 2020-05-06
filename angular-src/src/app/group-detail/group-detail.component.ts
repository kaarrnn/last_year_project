import { Component, OnInit } from '@angular/core';
import {GroupServiceService} from '../service/group-service.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {
  public company_name;
  public company_data;
  constructor( private groupService : GroupServiceService,
                private router : Router,      
                private activatedRoute : ActivatedRoute   ) { }
post_data ={
  company:this.company_name
}

  ngOnInit() {

    let name = this.activatedRoute.snapshot.paramMap.get('company');
    console.log("name:"+name);
    this.post_data.company = name;
    console.log(this.post_data.company);
    
    this.groupService.group1(this.post_data).subscribe(data=>{
      console.log("dataa")
        console.log(data);
        this.company_data = JSON.parse(JSON.stringify(data));

        console.log(this.company_data[0].company_name)
        console.log(this.company_data[0].company_discription)
        console.log(this.company_data[0].company_address)
        console.log(this.company_data[0].company_phone_number)
        console.log(this.company_data[0].company_logo)
    })

  }

}
