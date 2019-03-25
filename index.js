function readfile(filename){

    let txt = '';
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.status === 200 && xmlhttp.readyState === 4){
            txt = xmlhttp.responseText;
            console.log(txt);
            document.getElementById("text").innerHTML = txt;
        }
    };
    xmlhttp.open("GET","sample.txt",true);
    xmlhttp.send();

}

readfile("sample.txt");