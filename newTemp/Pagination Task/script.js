//Function which is creating  element
function createEle(eleName, eleClass = "", content = "", id = "") {
  var element = document.createElement(eleName);
  element.innerHTML = content;
  element.className = eleClass;
  element.id = id;

  return element;
}

//main container which is holding all the content of the page


var container = createEle("div", "container-fluid");
container.style.padding = "10px";


var h1=createEle("h1","display-5","Dom Pagination")

container.append(h1)

//table creation
var table = createEle("table", "table");

//table head
var thead = createEle("thead", "thead-dark");

var headingRow = createEle("tr");

var th1 = createEle("th", "", "ID");

var th2 = createEle("th", "", "Name");

var th3 = createEle("th", "", "Email");

headingRow.append(th1, th2, th3);

thead.append(headingRow);

//table body
var tbody = createEle("tbody", "", "", "tbody");

table.append(thead, tbody);

container.append(table);

document.body.append(container);

//function which is creating buttons

function createButton(id) {
  var btn = document.createElement("button");
  btn.innerHTML = id;
  btn.className = "btn btn-outline-secondary";
  btn.id = id;
  btn.addEventListener("click", change);
  container.append(btn);
}

createButton("1");
createButton("2");
createButton("3");
createButton("4");
createButton("5");
createButton("6");
createButton("7");
createButton("8");
createButton("9");
createButton("10");
createButton("First");
createButton("Last");
createButton("Previous");

//array stores which button is previously clicked
var arr = [];

// function trigerred when button is clicked
function change(e) {
  var req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
  );
  req.send();
  req.onload = function () {
    var data = JSON.parse(this.response);

    //two variables which decide from where the loop will began and end
    var i, j;

    if (e.target.id === "First") {
      i = 0;
      j = 10;

      arr.unshift(j);
    } else if (e.target.id === "Last") {
      i = 90;
      j = 100;

      arr.unshift(j);
    } else if (e.target.id === "Previous") {
      j = 110;
      arr.unshift(j);

      j = arr[1] - 10;
      arr.unshift(j);
      i = j - 10;
    } else {
      j = parseInt(e.target.id) * 10;
      i = j - 10;
      arr.unshift(j);
    }
console.log(arr)
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    if (i > -1) {
      for (ele = i; ele < j; ele++) {
        let id = data[ele].id;
        let name = data[ele].name;
        let email = data[ele].email;

        var bodyRow = createEle("tr", "", "", "bodyRow");

        var td1 = createEle("td");
        td1.innerHTML = id;
        bodyRow.append(td1);

        var td2 = createEle("td");
        td2.innerHTML = name;
        bodyRow.append(td2);

        var td3 = createEle("td");
        td3.innerHTML = email;

        bodyRow.append(td3);

        tbody.append(bodyRow);
      }
    }
  };
}

