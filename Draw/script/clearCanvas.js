function clearCanvas()  
{  
    var c = document.getElementById('canv');  
    var cC = c.getContext('2d');  
    
//    cC.clearRect(0,0,c.width,c.height);

    cC.fillStyle = '#FFFFFF';  
    cC.beginPath();  
    cC.fillRect(0,0,c.width,c.height);  
    cC.closePath(); 
}  