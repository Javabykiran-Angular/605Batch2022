import {Employee} from './employee';
import {Department} from './department';

export class EmployeeDetails implements Employee
{
      fname: string;
      lname: string;
      id: number;
      salary:number;
      dept:Department;


      constructor(f:string,l:string,id:number,sal:number,role:string){

        this.fname=f;
        this.lname=l;
        this.id=id;
        this.salary=sal;
        this.dept=new Department(role);

      }

      Display(): void {
        console.log(`
          First Name  :: ${this.fname}
          Last Name   :: ${this.lname}
          ID          :: ${this.id}
          Salary      :: ${this.salary}
          Role        :: ${this.dept.getRole()}
        
        `)
      }

}