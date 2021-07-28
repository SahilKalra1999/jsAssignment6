var table=document.getElementById('myTable');
var myArray=[
    {"ID":"1", "Name":"Sahil", "Address":"Gurgaon"},
    {"ID":"2", "Name":"Sam", "Address":"Delhi"},
    {"ID":"3", "Name":"Sameer", "Address":"Gurgaon"},
    {"ID":"4", "Name":"Samar", "Address":"Delhi"},
    {"ID":"5", "Name":"Sania", "Address":"Goa"},
    {"ID":"6", "Name":"Sonia", "Address":"Mumbai"},
    {"ID":"7", "Name":"Sanjay", "Address":"Delhi"},
    {"ID":"8", "Name":"Shanky", "Address":"Gujrat"},
    {"ID":"9", "Name":"Simran", "Address":"Gurgaon"},
    {"ID":"10", "Name":"Saransh", "Address":"Gurgaon"}
      ];
      var row;
      addData(myArray);
       
function addData(data){
    
    for(var i=0; i<data.length; i++){
        row=`<tr>
            <td class="tdata">${data[i].ID}</td>
            <td class="tdata">${data[i].Name}</td>
            <td class="tdata">${data[i].Address}</td>
            </tr>`;
            table.innerHTML+=row;
    }
    
}