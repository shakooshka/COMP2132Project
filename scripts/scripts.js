const output = document.getElementById('output');

const notAnArray = 23;
const arrayTooSmall = ["Shania"];
const arrayOk = ["Shania", "Joe", "Jane", "Sandy"];

let function_results = "";

output.innerHTML += "<h2>Providing invalid parameter (not an array)</h2>";

function_results = makeListFromArray(notAnArray);

output.innerHTML += function_results;

output.innerHTML += "<h2>Providing invalid parameter (array is too small)</h2>";
function_results = makeListFromArray(arrayTooSmall);
output.innerHTML += function_results;

output.innerHTML += "<h2>Providing invalid second parameter (can only make 'ul' or 'ol' lists)</h2>";
function_results = makeListFromArray(arrayOk, "cheeseburger");
output.innerHTML += function_results;

output.innerHTML += "<h2>Providing valid parameter array, using default second parameter for list type 'ul'</h2>";
function_results = makeListFromArray(arrayOk);
output.innerHTML += function_results;

output.innerHTML += "<h2>Providing valid parameter array, using default second parameter for list type 'ol'</h2>";
function_results = makeListFromArray(arrayOk, "ol");
output.innerHTML += function_results;

