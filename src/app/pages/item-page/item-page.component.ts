import {Component, OnInit} from '@angular/core';
import ItemService from "../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import Utils from "../../utils/Utils";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
})
export class ItemPageComponent implements OnInit {
  itemId: null | number = null;
  loading = false;
  makeURL = Utils.makeURLfromRD;
  makeHnUrl = Utils.makeResourceURL;
  makeCommentsLabel = Utils.makeCommentsLabel;
  substractDates = Utils.substractDates;
  countComments = Utils.countChildren;
  sliceURL = Utils.sliceURL;

  constructor(
    public itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.itemId = params['itemId'];
      this.loading = true;
      if (this.itemId) {
        this.itemService.getItemData(this.itemId).subscribe(() => {
          this.loading = false;
        });
      }
    })
  }
}
