var lists = [
  {
    "name":"Travel Sights",
      "ListItems":[
         {
            "name":"Indiana Dunes",
            "checked":false,
            "category":"Beach"
         },
         {
            "name":"Prophetstown State Park",
            "checked":false,
            "category":"State Park"
         },
         {
            "name":"Monroe Lakes",
            "checked":false,
            "category":"Lake"
         }
      ]
   },
   {
      "name":"Resorts",
      "ListItems":[
         {
            "name":"French Lick Resort",
            "checked":false,
            "category":""
         },
         {
            "name":"Oakwood Resort",
            "checked":false,
            "category":""
         },
         {
            "name":"Potawatomi Inn Resort",
            "checked":false,
            "category":""
         }
      ]
   },
   {
      "name":"groceries",
      "ListItems":[
         {
            "name":"Apples",
            "checked":false,
            "category":""
         },
         {
            "name":"Bannanas",
            "checked":false,
            "category":""
         },
         {
            "name":"Carrots",
            "checked":false,
            "category":""
         }
      ]
   },
   {
      "name":"Dairy",
      "ListItems":[
         {
            "name":"Milk",
            "checked":false,
            "category":""
         },
         {
            "name":"Cheese",
            "checked":false,
            "category":""
         },
         {
            "name":"Cottage Cheese",
            "checked":false,
            "category":""
         }
      ]
   },
   {
      "name":"Meat",
      "ListItems":[
         {
            "name":"Chicken",
            "checked":false,
            "category":""
         },
         {
            "name":"Beef",
            "checked":false,
            "category":""
         },
         {
            "name":"Pork",
            "checked":false,
            "category":""
         }
      ]
   },
   {
      "name":"Bakery",
      "ListItems":[
         {
            "name":"Bread",
            "checked":false,
            "category":""
         },
         {
            "name":"Bagels",
            "checked":false,
            "category":""
         },
         {
            "name":"Croissants",
            "checked":false,
            "category":""
         }
      ]
   },
   {
      "name":"Canned Goods",
      "ListItems":[
         {
            "name":"Soup",
            "checked":false,
            "category":""
         },
         {
            "name":"Beans",
            "checked":false,
            "category":""
         },
         {
            "name":"Tomatoes",
            "checked":false,
            "category":""
         }
      ]
   },
   {
      "name":"Frozen Foods",
      "ListItems":[
         {
            "name":"Ice Cream",
            "checked":false,
            "category":""
         },
         {
            "name":"Pizza",
            "checked":false,
            "category":""
         },
         {
            "name":"Broccoli",
            "checked":false,
            "category":""
         }
      ]
   },
   {
      "name":"snacks",
      "ListItems":[
         {
            "name":"chips",
            "checked":false,
            "category":""
         },
         {
            "name":"Cookies",
            "checked":false,
            "category":""
         },
         {
            "name":"Crackers",
            "checked":false,
            "category":""
         }
      ]
   },
   {
      "name":"Cookies",
      "ListItems":[
         {
            "name":"Oreos",
            "checked":false,
            "category":""
         },
         {
            "name":"Chocolate Chip",
            "checked":false,
            "category":""
         },
         {
            "name":"Sugar Cookies",
            "checked":false,
            "category":""
         }
      ]
   }
 ];



 function itemchecked(element, ListIndex, ItemIndex){
    $(element).parent().toggleClass("strike");
    let checkedValue = !lists[ListIndex].ListItems[ItemIndex].checked;
    lists[ListIndex].ListItems[ItemIndex].checked = checkedValue;
    console.log("checked ", lists);
 }

 function addItem(ListIndex){
  let newItemName = $("#addItem").val();
  let newItemObject = {
    name: newItemName,
    checked: false,
    category: "",
  };

  console.log(lists);
  lists[ListIndex].ListItems.push(newItemObject);
  LoadListItems(ListIndex);
 }

 function deleteItem(ListIndex){
  lists[ListIndex].ListItems.splice(ListIndex, 1);
  LoadListItems(ListIndex);

 }

 function LoadListItems(ListIndex){
  console.log (ListIndex);
  let listString = `<button onclick="loadData()">Back</button><ul>`;
  $.each(lists[ListIndex].ListItems, function(index, ListItem){
    listString += `<li id="${index}" class= "${ListItem.checked ? "strike" : ""}"><input ${ListItem.checked ? (checked = "checked") : ""} type="checkbox" id="${index}" name="${ListItem.name}" onclick="itemchecked(this, ${ListIndex}, ${index})"><span>${ListItem.name}</span>
    <span class="delete" onclick="deleteItem(${ListIndex}, ${index})">Delete</span
    </li>`;
  });

  listString += `<ul>
  <div class="addItemInput">
  <input id="addItem" type="text">
  <button onclick="addItem(${ListIndex})">Add Item</button>
  </div>`;
  $("#app").html(listString);

  initlisteners();

 }

function loadData (){
  let listString = "<ul>";
  $.each(lists, function(index, list){
    /* This is a template literal. It is a way to create a string with variables. */
    listString += `<li id="${index}" onclick="LoadListItems(${index})">${list.name} 
    <span class="right"> Items: ${list.ListItems.length}</span></li>`;
  });

  listString += "<ul>";
  $("#app").html(listString);
}

function initlisteners(){
    $("ul li").click(function(e){
      let ItemIndex = e.currentTarget.id;
      console.log("hi");

      $("#app").html(
         `
         <div class="wrapper">
         <div class= "camp">
         <h4>${lists[ItemIndex]}</h4>
         <div class="camp-img">
           <img src="images/full/${lists[ItemIndex].name}" alt="" />
         </div>
         <div class="description "><span>Description: </span>${lists[ItemIndex]}</div>
         <div class="price"><span>Price: </span>${lists[ItemIndex]}</div>
         <button>Add to Cart</button>
         </div>
         </div>
         `
      )
   })
    
}




$(document).ready(function(){
    // loadData();
});
