"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(f, l, id, sal, role) {
        this.fname = f;
        this.lname = l;
        this.id = id;
        this.salary = sal;
        this.dept = new department_1.Department(role);
    }
    EmployeeDetails.prototype.Display = function () {
        console.log("\n          First Name  :: ".concat(this.fname, "\n          Last Name   :: ").concat(this.lname, "\n          ID          :: ").concat(this.id, "\n          Salary      :: ").concat(this.salary, "\n          Role        :: ").concat(this.dept.getRole(), "\n        \n        "));
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
