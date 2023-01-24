import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataRecord} from "../../models/Record";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
})
export class RecordsComponent implements OnInit{
  @Input() sortType: 'date' | 'points';
  @Input() tags: string[];
  loading = false;
  pageCounter = 0;
  isLastPage = false;
  isFirstPage = true;
  isComments = false;
  constructor(public dataService: DataService, private router: Router, private route: ActivatedRoute) {
  }



  ngOnInit(): void {
    this.isComments = this.tags[0] === 'comment';
    this.route.queryParams.subscribe((params)=>{
      this.pageCounter = +params['page'] ? + params['page'] : 0;
      this.loading = true
      this.dataService.getData(this.sortType, this.tags, this.pageCounter).subscribe(() => {
        this.loading = false;
        this.isLastPage = this.pageCounter + 1 === this.dataService.allPages;
        if(this.pageCounter > 0) {
          this.isFirstPage = false;
        }
        if(this.pageCounter === 0) {
          this.isFirstPage = true;
        }
      })
    })

  }

  get records(): DataRecord[]{
    return this.dataService.data;
  }


  changePage(val: number){
    this.router.navigate([], {
      relativeTo:this.route,
      queryParams: {
        page:this.pageCounter + val,
      },
      queryParamsHandling:'merge'
    })
  }
}
