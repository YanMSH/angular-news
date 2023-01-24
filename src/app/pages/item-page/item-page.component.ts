import {Component, OnDestroy, OnInit} from '@angular/core';
import ItemService from "../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import Utils from "../../utils/Utils";
import {ResourceData} from "../../models/Resource";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
})
export class ItemPageComponent implements OnInit, OnDestroy {
  itemId: null | number = null;
  loading = false;
  makeURL = Utils.makeURLfromRD;
  makeHnUrl = Utils.makeResourceURL;
  makeCommentsLabel = Utils.makeCommentsLabel;
  substractDates = Utils.substractDates;
  countComments = Utils.countChildren;
  sliceURL = Utils.sliceURL;
  queryParamsSubscription: Subscription;
  constructor(
    public itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params) => {
      this.itemId = params['itemId'];
      this.loading = true;
      if (this.itemId) {
        this.itemService.getItemData(this.itemId).subscribe(() => {
          this.loading = false;
        });
      }
    })
  }

  ngOnDestroy(): void{
    this.queryParamsSubscription.unsubscribe();
  }

  get title(): string | null {
    return this.itemService.itemData.title
  }

  get url(): string | null {
    return this.itemService.itemData.url
  }

  get slicedURL(): string {
    return this.sliceURL(this.url!)
  }

  get hackerNewsURL():string {
    return this.makeHnUrl(this.itemService.itemData.id)
  }

  get text(): string | null {
    return this.itemService.itemData.text
  }

  get pointsAmount():number {
    return this.itemService.itemData.points || 0
  }

  get author(): string | null{
    return this.itemService.itemData.author;
  }

  get createAtDate(): string {
    return this.substractDates(this.itemService.itemData.created_at);
  }

  get comments(): ResourceData[] {
    return this.itemService.itemData.children;
  }

}
