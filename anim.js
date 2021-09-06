
function names()
{
    alert("Hey " + document.getElementById("p1").value +", "+  document.getElementById("p2").value  );
  var p1=document.getElementById("p1").value;
    var p2=document.getElementById("p2").value;
    document.location.href="game.html";
    window.sessionStorage.setItem("varkey1", p1);
    window.sessionStorage.setItem("varkey2", p2);
}
var turn=1;
var a= document.getElementsByClassName("cell");
var p1=window.sessionStorage.getItem("varkey1");
var p2=window.sessionStorage.getItem("varkey2");
function pla()
{
    if(turn==1)
    document.getElementById("result").innerHTML=p1+"'s turn";
    else
    document.getElementById("result").innerHTML=p2+"'s turn";
}
function put(x)
{
    
    if(turn==1)
    {

        z="X";
   
    } 
   else if(turn==-1)
   {
       z="O";
   
   }
   a[x-1].innerHTML=z;
   turn*=-1;
   pla();
   a[x-1].onclick="null";
   check(); 
}

function check()
{
   
    var i=0;
    var num=0;
    var num2=0;
    for( var q=0;q<9;q=q+3)
    {
        if(a[q].innerHTML==z && a[q+1].innerHTML==z && a[q+2].innerHTML==z)
        num=1;
    }
    for(var q=0;q<3;q++)
    {
        if(a[q].innerHTML==z && a[q+3].innerHTML==z && a[q+6].innerHTML==z)
        num2=1;
    }
    if(a[2].innerHTML==z && a[4].innerHTML==z && a[6].innerHTML==z)
    {
        num2=1;
    }
    if( num2==1 || num==1 || (a[0].innerHTML==z && a[4].innerHTML==z && a[8].innerHTML==z) )
    {
        document.getElementById("result").style.backgroundColor="rgba(0,0,0,0.15)";
        if(turn==-1)
        {
            
            document.getElementById("result").innerHTML=p1+" wins";
        setTimeout(() => { alert(p1); } , 20);
        i=1;
        }
        else
        {
            document.getElementById("result").innerHTML=p2 +" wins";
            setTimeout(() => { alert(p2); } , 20);
        i=1;
        }
        if(i==1)
        {
            for(j=0;j<9;j++)
            { a[j].onclick=null;
             a[j].style.cursor="unset";
           }
    }

        
    }
}
function reset()
{
    document.location.href="game.html";
}


