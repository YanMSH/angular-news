import {DataRecord} from "../models/Record";
import {ResourceData} from "../models/Resource";

export default class Utils {
  public static makeResourceURL(id: string | number): string {
    return `https://news.ycombinator.com/item?id=${id}`
  }

  public static makeURLfromDR(record: DataRecord): string {
    if (record.url) {
      return record.url
    } else {
      return `https://news.ycombinator.com/item?id=${record.objectID}`
    }
  }

  public static makeURLfromRD(record: ResourceData): string {
    if (record.url) {
      return record.url
    } else {
      return `https://news.ycombinator.com/item?id=${record.id}`
    }
  }

  public static makeCommentsLabel(record: DataRecord): string {
    return record.num_comments === 0 ? 'discuss' :
      record.num_comments === 1 ? '1 comment' : `${record.num_comments} comments`
  }

  public static substractDates(dateString: string) {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date(Date.now());
    const recordDate = new Date(dateString);
    const dateDifference = now.getTime() - recordDate.getTime();
    const seconds = dateDifference / 1000;
    if (seconds < 60) {
      return `${Math.floor(seconds)} seconds ago`
    }
    const minutes = seconds / 60;
    if (minutes < 60) {
      const wholeMinutes = Math.floor(minutes);
      return `${wholeMinutes} ${wholeMinutes === 1 ? 'minute' : 'minutes'} ago`
    }
    const hours = minutes / 60;
    if (hours < 24) {
      const wholeHours = Math.floor(hours)
      return `${wholeHours} ${wholeHours === 1 ? 'hour' : 'hours'} ago`
    }
    const days = hours / 24;
    if (days < 30) {
      const wholeDays = Math.floor(days);
      return `${wholeDays} ${wholeDays === 1 ? 'day' : 'days'} ago`;
    }
    const months = days / 30;
    if (months < 12) {
      const wholeMonths = Math.floor(months);
      return `${wholeMonths} ${wholeMonths === 1 ? 'month' : 'months'} ago`
    }
    return `on ${monthNames[recordDate.getMonth()]} ${recordDate.getDate()}, ${recordDate.getFullYear()}`
  }

  public static countChildren(obj: ResourceData): number {
    let counter = 0;

    function makeCount(arr: ResourceData[]) {
      if (arr.length > 0) {
        counter = counter + arr.length;
        arr.forEach(item => makeCount(item.children));
      }
    }
    makeCount(obj.children);
    return counter;
  }

  public static sliceURL(urlString: string){
    const url = new URL(urlString);
    const slicedURL = url.host;
    if(slicedURL === 'github.com'){
      return url.host + '/' + url.pathname.split('/')[1]
    }
    else {
      return slicedURL
    }
  }


}
