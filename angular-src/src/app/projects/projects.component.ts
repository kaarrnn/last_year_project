import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  company1 = "Afcons"
  company2 = " Tata Group"
  company3 = "Hindustan Construction Company"
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  groupDetail(com){
      this.router.navigate(['/groupdetail',com]);
  }

  
  group2Detail(){
    this.router.navigate(['/groupdetail',' Shobha Developers']);
}

}
