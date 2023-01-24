import {Component, Input} from '@angular/core';
import {DataRecord} from "../../models/Record";
import Utils from "../../utils/Utils";

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
})
export class RecordItemComponent {
  @Input() dataRecord: DataRecord;
  makeURL = Utils.makeURLfromDR;
  sliceURL = Utils.sliceURL;
  makeHnUrl = Utils.makeResourceURL;
  makeCommentsLabel = Utils.makeCommentsLabel;
  substractDates = Utils.substractDates;

  makeRoute(id: string | number) {
    return `/item?itemId=${id}`
  }

  get url(): string | null{
    return this.dataRecord.url;
  }

  get itemURL(): string {
    return this.makeURL(this.dataRecord);
  }

  get itemNumber(): string {
    return this.dataRecord.serial_number.toString();
  }

  get title(): string | null {
    return this.dataRecord.title;
  }

  get slicedURL(): string {
    return this.sliceURL(this.dataRecord.url!)
  }

  get pointsAmount(): number | null {
    return this.dataRecord.points;
  }

  get author():string {
    return this.dataRecord.author;
  }

  get itemID():string {
    return this.dataRecord.objectID;
  }

  get createAtDate(): string {
    return this.substractDates(this.dataRecord.created_at);
  }
}
