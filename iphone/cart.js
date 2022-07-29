var arr=[10];
var ar=[10];
var p_total=0;
var n,p;
sessionStorage.setItem("p_name","");
sessionStorage.setItem("p_price","");

var total=0;
	function cart(name,price)
{
document.getElementById("t1").disabled=false;
document.getElementById("t1").value="";
n=sessionStorage.getItem("p_name");
p=sessionStorage.getItem("p_price");
n=n+name+" ";
p=p+price+" ";
p_total=p_total+parseInt(price,10);
sessionStorage.setItem("p_name",n);
sessionStorage.setItem("p_price",p);	

}

function disable()
{
	
	document.getElementById("t1").disabled=true;

}
function vcart(bname)
{
n=sessionStorage.getItem("p_name");
p=sessionStorage.getItem("p_price");
 arr=[50];
 ar=[50];
var txt;
arr=n.split(" ");
ar=p.split(" ");
document.write("<br>");
txt=bname;
document.write("<u><center>"+"<h1>"+txt.fontcolor("darkmagenta")+"</h1>"+"</center></u>");
document.write("<br><br>");
 txt="Name: ";
document.write("<u><center>"+"<h2>"+txt.fontcolor("darkviolet")+"</h2>"+"</center></u>");
for(i=0;i<arr.length;i++)
{
txt=arr[i]+" ";
document.write("<center>"+"<h3>"+txt.fontcolor("magenta")+"</h3>"+"</center>");
}
document.write("<br><br>");
txt="Price: ";
document.write("<u><center>"+"<h2>"+txt.fontcolor("darkviolet")+"</h2>"+"</center></u>");
for(i=0;i<ar.length;i++)
{
txt=ar[i]+" ";
document.write("<center>"+"<h2>"+txt.fontcolor("magenta")+"</h2>"+"</center>");

}
document.write("<br>");
txt="Total cost of your purchase: "+p_total;
document.write("<br>"+"<center>"+"<h2>"+txt.fontcolor("darkmagenta")+"</h2>"+"</center>");
alert("Thanks for your purchase");

}
function rcart(bname)
{
	
	
	var name=document.getElementById("t1").value;
	n=sessionStorage.getItem("p_name");
p=sessionStorage.getItem("p_price");
arr=n.split(" ",2);
ar=p.split(" ",2);
var txt;
var counter=0;
document.write("<br><br>");
txt=bname;
document.write("<u><center>"+"<h1>"+txt.fontcolor("darkmagenta")+"</h1>"+"</center></u>");
for(i=0;i<arr.length;i++)
{
if(name==arr[i])
{
delete arr[i];
delete ar[i];

counter=1;
break;
}
}
if(i==ar.length)
{
	alert("product not found.");
}
var str=ar.join(" ");
var str1=arr.join(" ");
sessionStorage.setItem("p_name","str");
sessionStorage.setItem("p_price","str");
txt="Name: ";
document.write("<center>"+"<h3>"+txt.fontcolor("darkorchid")+"</h3>"+"</center>");
for(i=0;i<arr.length;i++)
{

	if(arr[i]!=undefined)
	{
txt=arr[i]+" ";
document.write("<center>"+"<h3>"+txt.fontcolor("magenta")+"</h3>"+"</center>");

	}
	
}
document.write("<br><br>");
txt="Price: ";
document.write("<br>"+"<center>"+"<h2>"+txt.fontcolor("darkorchid")+"</h2>"+"</center>");
for(i=0;i<ar.length;i++)
{

	if(ar[i]!=undefined)
	{
txt=ar[i]+" ";
document.write("<center>"+"<h3>"+txt.fontcolor("magenta")+"</h3>"+"</center>");

	}
	
}
document.write("<br>");
txt="Total cost of your purchase: "+p_total;
document.write("<br>"+"<center>"+"<h2>"+txt.fontcolor("darkmagenta")+"</h2>"+"</center>");
}