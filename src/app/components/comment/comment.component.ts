import {Component, Input} from '@angular/core';
import {DataRecord} from "../../models/Record";
import Utils from "../../utils/Utils";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent {
  @Input() dataRecord: DataRecord;
  sliceURL = Utils.sliceURL;
  substractDates = Utils.substractDates;
  makeRoute(id:string | number | null){
    if(id){
      return `/item?itemId=${id}`
    }
    else return null
  }
}
