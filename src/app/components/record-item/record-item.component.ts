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
  makeRoute(id:string | number){
    return `/item?itemId=${id}`
  }
}
