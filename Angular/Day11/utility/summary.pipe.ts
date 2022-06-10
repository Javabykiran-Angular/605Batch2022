import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'summary'
})
export class SummaryPipe implements PipeTransform
{
      transform(value: any,start:number=0,end:number=20) 
      {
          //use type assertion
          let temp=(<string> value);
            // if(start==undefined)
            //  return (temp.substring(0,20)+"... ")

            // return (temp.substring(start,end)+"... ")

            return (this.MySybstringLogic(temp,start,end));

      }


      MySybstringLogic(temp:string,start:number,end:number){
        
        return (temp.substring(start,end)+"... ")
      }

}