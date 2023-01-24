import {Component, Input} from '@angular/core';
import {ResourceData} from "../../models/Resource";
import Utils from "../../utils/Utils";

@Component({
  selector: 'app-page-comment',
  templateUrl: './page-comment.component.html',
})
export class PageCommentComponent {
  @Input() commentData: ResourceData;
  visible = true;
  substractDates = Utils.substractDates;
  countComments = Utils.countChildren;
  makeShowLabel(branchData:ResourceData): string{
    const commentsAmount = this.countComments(branchData);
    if(commentsAmount > 0){
      if(commentsAmount === 1) {
        return 'show 1 comment'
      } else {
        return `show ${commentsAmount} comments`
      }
    } else {
      return 'show'
    }
  }

  get author():string | null {
    return this.commentData.author;
  }

  get createdAtDate():string {
    return this.substractDates(this.commentData.created_at)
  }

  get commentsLabel():string {
    return this.makeShowLabel(this.commentData)
  }

  get commentText():string | null {
    return this.commentData.text
  }

  get replies(): ResourceData[] {
    return this.commentData.children
  }

  hideBranch(){
    this.visible = !this.visible;
  }
}
