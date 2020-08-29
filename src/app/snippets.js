// ------------------------------DATA MANIPULATION------------------------------

// ARRAYS FLATTEN, REDUCE AND CONCAT
// https://medium.com/@sub.metu/advanced-data-manipulation-javascript-b309fd008c6d


// DATA MANIPULATION - ARRAYS, SETS, MAP, CONVERT SETS TO ARRAYS, LENGTHS, DELETES, REMOVING DUPLICATES, INCLUDES, SORTS, SEARCH
// https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b


// SERIALIZE/STRINGIFY OBJECT TO JSON
// var obj = { name: "John", age: 30, city: "New York" };
// var myJSON = JSON.stringify(obj);
// LOGS {"name":"John","age":30,"city":"New York"}

// PARSE FROM JSON
// const obj1 = JSON.parse(myJSON);


// MAP
// this.mapExample = this.data.map((item) => {
//   return item.id;
// });
// SHORT MAP
// const shortMap = this.data.map(item => item.id);


// CONVERT MAP TO ARRAY
// https://stackoverflow.com/questions/56795743/how-to-convert-map-to-array-of-object


//FILTER
// this.filteredNumber = this.data.filter((value) => {
//   return value.id === 4;
// });


// OBJECT KEYS
// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// };
// console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
// OBJECT VALUES
// console.log(Object.values(object1));


// EVEN, UNEVEN, CONTAINS STRING
// const even = this.data.filter((value) => {
//     return value.id % 2 == 0;;
//   });
//   console.log('even values are', even);

//   const uneven = this.data.filter((value) => {
//     return value.id % 2 !== 0;
//   });
//   console.log('uneven values are', uneven);
  
//   const letters = uneven.filter((value) => {
//     return value.title.includes("non");
//   });
//   // letters.replace("non", "yoyo");
//   console.log('value contains non ', letters);


// STARTS WITH LETTER Q
// this.filteredNumber = data.filter((value) => {
//     return value.title.startsWith("q");
//   })


// FILTER BY NUMBER LESS  THAN 10
// function isEnough(value) {
//   return value >= 10;
// }
// var filtered = [13, 5, 8, 130, 74].filter(isEnough);
// filtered is [13, 130, 74]


// ONLY RETURNS UNIQUE ELEMNTS IN AN ARRAY
//var array = [“blue”, “green”, “green”, “black”, “orange”, “blue”, “green”, “red”];
// var uniqueArray = [];
// uniqueArray = array.filter((element, index, array)=>{
//  return array.indexOf(element) === index;
// })
// console.log(uniqueArray)
// ["blue", "green", "black", "orange", "red"]


// ------------------------------API CALLS------------------------------


// GET HEADERS
// let headers = new Headers();
// headers.append('Content-Type', 'application/json');
// headers.append('projectid', this.id);
// let params = new URLSearchParams();
// params.append("someParamKey", this.someParamValue)
// this.http.get('http://localhost:63203/api/CallCenter/GetSupport', { headers: headers, search: params })


// TOKEN REQUIRED FOR GET
// https://stackoverflow.com/questions/47400929/how-to-add-authorization-header-to-angular-http-request


// POST EXAMPLES
// https://jasonwatmore.com/post/2019/11/21/angular-http-post-request-examples

