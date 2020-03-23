var a=[];
var b=[];
var i=-1;
var min=0;
var j=1;
var mina=0;
var minb=0;
var noOfnodes=7;
var currentNode=0;
function setup() {
  createCanvas(1200, 700);
  for(var i=0;i<noOfnodes;i++)
  {
    var v= createVector(random(width),random(height));
  a[i]=v;
    
  }
  b=a.slice();  
var i=0;
  frameRate(1);

}

function draw() {

drawNodes()
strokeWeight(4);
stroke(0,255,0);
line(a[mina].x,a[mina].y,a[minb].x,a[minb].y)
 

if(i<=noOfnodes-1 &&  j==noOfnodes || i==-1) {
  i++
  j=i+1
  currentNode=i
  min=int(dist(a[i].x,a[i].y,a[j].x,a[j].y))*2
drawNodes()

}
if(i==noOfnodes-2){
drawA();}
else{

strokeWeight(10);
stroke(255,0,0);

strokeWeight(4);
stroke(255,0,255);
line(a[i].x,a[i].y,a[j].x,a[j].y)

var xyz=int(dist(a[i].x,a[i].y,a[j].x,a[j].y))

if(int(min)>xyz){

min=dist(a[i].x,a[i].y,a[j].x,a[j].y)

temp=a[i+1]
a[i+1]=a[j]
a[j]=temp
mina=i
minb=i+1

  
}
  j++
}
drawB()

}


function drawNodes()
{
  background(0);//displays all vertex and curent node
  for(var i=0;i<a.length;i++)
  {
        if(i==0)
    {
      
   fill(0,255,0);//draw vertex a
    ellipse(a[i].x,a[i].y,15,15)
    
    }
    
    if(i==currentNode)
    {
      
   fill(0,0,255);//draw vertex a
    ellipse(a[i].x,a[i].y,15,15)
    
    }
    else
    {
       fill(255);//draw vertex a
    ellipse(a[i].x,a[i].y,10,10)
    }
  }

}


function drawA()
{
  for(var i=0;i<a.length-1;i++){
          stroke(255,0,0);
    strokeWeight(5)
  line(a[i].x,a[i].y,a[i+1].x,a[i+1].y)


  }
}

function drawB()
{
  for(var j=0;j<b.length;j++)
{
  for(var i=0;i<b.length;i++){
          stroke(255);
    strokeWeight(1);
  line(b[i].x,b[i].y,b[j].x,b[j].y)

  }
  
}
}


