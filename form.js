$(function() {
    //fetch userList from REST API
    retreiveFormData();
   
});

 function retreiveFormData() {
    $.getJSON('/getFormData?_=' + new Date().getTime(), function(data) {
        
       CreateTableFromFormData(data) ;
        
    })
}
    function CreateTableFromFormData(data) 
    {
        
       
        $(data.employee).each(function(index, element)
        {

         $('#employee').append('<tr><td> '+element[0]+' </td> <td> '+element[1]+' </td> <td> '+element[2]+'</td> <td> '+element[3]+'</td> <td> '+element[4]+'</td> <td> '+element[5]+'</td> <td> '+element[6]+'</td> <td> '+element[7]+'</td> <td> '+element[8]+' </td></tr>');       
        })
    }
