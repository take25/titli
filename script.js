let thisPageTitle = document.title;
console.log(thisPageTitle);

let addDiv = document.createElement("div");
addDiv.id = "addDiv";
//let ttest = '<div class="titli">sample</div>';
addDiv.innerHTML = thisPageTitle;
document.body.appendChild(addDiv);

//thisPageTitle;
//alert(thisPageTitle);