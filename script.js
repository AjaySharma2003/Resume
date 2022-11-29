let count = 0;
let c = 5;
function btn()
{
    let image = document.getElementById('image');
    let images = ["..Images/Certificates/Fundamentals LinkedIn Learning Certificate-1.jpg","../Images/Certificates/HTML LinkedIn Learning Certificate-1.jpg","../Images/Certificates/coursera-python.jpg","../Images/Certificates/Programming_Hero_Certificate_intermediate.png","../Images/Certificates/Graphics Design.jpg","../Images/Certificates/data_analytics-1.jpg"]
    if(count>4)
    {
        count = 0;
    }
    count++;
    image.src = images[count]; 
}