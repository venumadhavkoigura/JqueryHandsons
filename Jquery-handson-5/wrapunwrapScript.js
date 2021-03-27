$(document).ready(function(){
    var p=$('#para')
    $('#btn').click(function(){
        if(p.parent().is("div")){
            p.unwrap();
        }
        else{
            p.wrap("<div id='wrapper'></div>");
        }
    })
})