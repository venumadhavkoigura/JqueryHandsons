$(document).ready(function(){
    var list="";
    var p=$('#para').text();
    console.log('rendered')
    $('#addTaskBtn').click(function(){
        
        var key=$('#todo').val();
    
        if(key==""){
        alert("Enter task details!!");
        }
        else{
            list+='<br>'+key;
            $('#todo').val("");
            $('#para').html(p+list);
        }
    })
})