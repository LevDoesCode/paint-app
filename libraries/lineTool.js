function LineTool()
{
    this.icon = "/assets/line-icon.png";
    this.toolText = 'Line';
    let prevX = null;
    let prevY = null;
    let drawing = false;
    this.active = false;
    this.action = function()
    {
        if(!this.active) return;
        if(mouseIsPressed)
        {
            if(prevX == null || prevY == null)
            {   
                drawing = true;
                prevX = mouseX;
                prevY = mouseY;
                loadPixels(); // Saves the appearance of the canvas before we start drawing
            }
            updatePixels();  //Load pixel from the saved state when we used loadPixels()
            line(prevX, prevY, mouseX, mouseY);
        }
        else if(drawing)
        {
            updatePixels();
            line(prevX, prevY, mouseX, mouseY); 
            prevX = prevY = null;
            drawing = false;
        }
    }
}