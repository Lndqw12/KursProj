function checklength(i){
    if (i<10)
        {i="0"+i;}
    return i;
}
function clock(){
    var now = new Date();
    var hours = checklength(now.getHours());
    var minutes = checklength(now.getMinutes());
    var seconds = checklength(now.getSeconds());
    var format = 1;  //0=24 hour format, 1=12 hour format
    var time;

    if (format == 1){
        if (hours >= 12){
            if (hours ==12){
                hours = 12;
            }else {
                hours = hours-12;
            }
            time=hours+':'+minutes+':'+seconds+' PM';
        }else if(hours < 12){
            if (hours ==0){
                hours=12;
            }
            time=hours+':'+minutes+':'+seconds+' AM';
        }
    }
    if (format == 0){
        time= hours+':'+minutes+':'+seconds;
    }
     document.getElementById("clock").innerHTML=time;
    setTimeout("clock();", 500);
}