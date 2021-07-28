var selectedRow=null
function onFormSubmit(){
var formData=readFromData();
if(selectedRow==null)
insertNewData(formData);
else
updateData(formData);
resetForm();
}
function readFromData(){
var formData={};
   formData["fullName"]=document.getElementById("fullName").value;
   formData["empCode"]=document.getElementById("empCode").value;
   formData["address"]=document.getElementById("address").value;
   return formData;
   

}
function insertNewData(data){
var table=document.getElementById("employeeList").getElementsByTagName('tbody')[0];
var newRow=table.insertRow(table.length);
cell1=newRow.insertCell(0);
cell1.innerHTML=data.fullName;
cell2=newRow.insertCell(1);
cell2.innerHTML=data.empCode;
cell3=newRow.insertCell(2);
cell3.innerHTML=data.address;
cell4=newRow.insertCell(3);
cell4.innerHTML=`<a class="aEdit" onClick="onEdit(this)">Edit</a>
                   <a class="aEdit" onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
    document.getElementById('fullName').value="";
    document.getElementById('empCode').value="";
    document.getElementById('address').value="";
    selectedRow=null;
}

function onEdit(td){
selectedRow=td.parentElement.parentElement;
document.getElementById('fullName').value=selectedRow.cells[0].innerHTML;
document.getElementById('empCode').value=selectedRow.cells[1].innerHTML;
document.getElementById('address').value=selectedRow.cells[2].innerHTML;
}

function updateData(formData){
    selectedRow.cells[0].innerHTML=formData.fullName;
    selectedRow.cells[1].innerHTML=formData.empCode;
    selectedRow.cells[2].innerHTML=formData.address;
}

function onDelete(td){
    if(confirm('Are you sure to delete this record ?')){
        row=td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}