
         var getEl= document.getElementById("para");
          
         var list = [
             {"ID":"1", "Name":"Sahil", "Address":"Gurgaon"},
             {"ID":"2", "Name":"Sameer", "Address":"Saket"},
             {"ID":"3", "Name":"Deep", "Address":"Noida"},
             {"ID":"4", "Name":"Rohan", "Address":"Delhi"},
             {"ID":"5", "Name":"Samar", "Address":"Saket"},
             {"ID":"6", "Name":"Amar", "Address":"Delhi"},
             {"ID":"7", "Name":"Tahir", "Address":"Mumbai"},
             {"ID":"8", "Name":"Karan", "Address":"New Delhi"},
             {"ID":"9", "Name":"Anju", "Address":"Gurgaon"},
             {"ID":"10", "Name":"Kavit", "Address":"Goa"}
            
         ];
           
         getEl.innerHTML = "Click on the button to create the "
                 + "table from the JSON data.<br><br>" 
                 + JSON.stringify(list[0]) + "<br>" 
                 + JSON.stringify(list[1]) + "<br>" 
                 + JSON.stringify(list[2]) + "<br>"
                 + JSON.stringify(list[3]) + "<br>"
                 + JSON.stringify(list[4]) + "<br>"
                 + JSON.stringify(list[6]) + "<br>"
                 + JSON.stringify(list[7]) + "<br>"
                 + JSON.stringify(list[8]) + "<br>"
                 + JSON.stringify(list[9]) ;

           
         function fn1() {
             var cols = [];
               
             for (var i = 0; i < list.length; i++) {
                 for (var k in list[i]) {
                     if (cols.indexOf(k) === -1) {
                           
                         // Push all keys to the array
                         cols.push(k);
                     }
                 }
             }
               
             // Create a table element
             var table = document.createElement("table");
               
             // Create table row tr element of a table
             var tr = table.insertRow(-1);
               
             for (var i = 0; i < cols.length; i++) {
                   
                 // Create the table header th element
                 var theader = document.createElement("th");
                 theader.innerHTML = cols[i];
                   
                 // Append columnName to the table row
                 tr.appendChild(theader);
             }
               
             // Adding the data to the table
             for (var i = 0; i < list.length; i++) {
                   
                 // Create a new row
                 trow = table.insertRow(-1);
                 for (var j = 0; j < cols.length; j++) {
                     var cell = trow.insertCell(-1);
                       
                     // Inserting the cell at particular place
                     cell.innerHTML = list[i][cols[j]];
                 }
             }
               
             // Add the newely created table containing json data
             var el = document.getElementById("table");
             el.innerHTML = "";
             el.appendChild(table);
         }    