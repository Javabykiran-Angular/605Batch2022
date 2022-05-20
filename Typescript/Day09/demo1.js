//simple Json
// json => java script object Notation
// it store data in key & value format
var jsonobj = {
    fname: 'Sumit',
    "lname": 'Raokhande',
    id: 8
};
//retrive of json object data
//1 dot operator
//2 square operator
//1 dot operator
// console.log(`
//   First Name :: ${jsonobj.fname}
//   Last Name ::  ${jsonobj.lname}
//   ID         :: ${jsonobj.id}  
// `)
//2 square operator
// console.log(`
// First Name :: ${jsonobj["fname"]}
// Last Name ::  ${jsonobj['lname']}
// ID         :: ${jsonobj["id"]} 
// `)
//Array of Object
var arrobj = [
    {
        fname: 'Sumit',
        lname: 'Raokhande',
        id: 9,
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["jan", 'Feb', 'March'],
        result: [
            {
                subj: 'M1',
                marks: 40
            },
            {
                subj: 'M2',
                marks: 48
            },
            {
                subj: 'M3',
                marks: 65
            }
        ]
    },
    {
        fname: 'Kiran',
        lname: 'Raokhande',
        id: 6,
        country: {
            cid: 2,
            cname: "US"
        },
        month: ["May", 'Feb', 'March'],
        result: [
            {
                subj: 'M1',
                marks: 55
            },
            {
                subj: 'M2',
                marks: 58
            },
            {
                subj: 'M3',
                marks: 75
            }
        ]
    },
    {
        fname: 'Spruha',
        lname: 'Raokhande',
        id: 3,
        country: {
            cid: 3,
            cname: "Japan"
        },
        month: ["June", 'Dec', 'Aug'],
        result: [
            {
                subj: 'M1',
                marks: 65
            },
            {
                subj: 'M2',
                marks: 62
            },
            {
                subj: 'M3',
                marks: 85
            }
        ]
    }
];
// console.log(`
//   First Name  :: ${arrobj[0].fname}
//   Last Name   :: ${arrobj[0].lname}
//   ID          :: ${arrobj[0].id}
// `)
// console.log(arrobj[0]);
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n        First name :: ".concat(arrobj[i].fname, "\n        last Name  :: ").concat(arrobj[i].lname, "\n        Id         :: ").concat(arrobj[i].id, "\n        Country    :: ").concat(arrobj[i].country.cname, "\n        Month      :: ").concat(arrobj[i].month.join("  "), "\n\n  "));
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("----------Result--------------\n          Subject :: ".concat(arrobj[i].result[j].subj, "\n          Marks   :: ").concat(arrobj[i].result[j].marks, "\n    "));
    }
    // console.log("  First Name :: "+arrobj[i].fname)
    // console.log("  Last Name :: "+arrobj[i].lname)
    // console.log("  Id        :: "+arrobj[i].id)
}
