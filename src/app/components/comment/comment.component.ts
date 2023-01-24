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

  makeRoute(id: string | number | null) {
    if (id) {
      return `/item?itemId=${id}`
    } else return null
  }

  get author(): string {
    return this.dataRecord.author;
  }

  get storyTitle(): string | null {
    return this.dataRecord.story_title;
  }

  get commentText():string | null {
    return this.dataRecord.comment_text;
  }

  get commentID():string {
    return this.dataRecord.objectID;
  }

  get createAtDate(): string {
    return this.substractDates(this.dataRecord.created_at);
  }
}
