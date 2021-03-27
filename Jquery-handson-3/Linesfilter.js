$(document).ready(function(){
    $('#search').click(function(){
        var stext=$('#tbox').val();
        var ta1words=$('#tarea1').val();
        var words=stext.split(",");
        var ans="";
        var lines=ta1words.split("\n");
        for(j=0;j<lines.length;j++){
        for(var i=0;i<lines.length;i++){
        if(lines[i].includes(words[j])){
            var lineWords=lines[i].split(" ");
            for(var k=0;k<lineWords.length;k++){
                if(words[j].localeCompare(lineWords[k])){
                    if(k==lineWords.length-1)
                    ans=ans.concat(lineWords[k]).concat(", ");

                    else
                    ans=ans.concat(lineWords[k].concat(" "));
                }
                else{
                    if(k==lineWords.length-1)
                    ans=ans.concat("<b>").concat(lineWords[k]),concat("</b>,");
                    else
                    ans=ans.concat("<b>").concat(lineWords[k]).concat("</b>");
                }
            }
        }
        }
    }
    console.log(ans.substring(0,ans.length-2));
    $('#tarea2').val(ans.substring(0,ans.length-2));
    })
})