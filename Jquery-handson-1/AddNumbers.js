$(document).ready(function(){
    $("#SubmitBtn").click(function(){
        var num1=Number($('#number1').val());
        var num2=Number($('#number2').val());

        if(num1=="" || num2==""){
            $('#message').css("color","red");
            $('#message').text("Pls.Enter the Values");
        }
        else{
            var sum=num1+num2;
            $('#result').val(sum);
            $('#result').css("color","green");
            $('#message').text(sum);
        }
    })
})