function DrawTool()
{
    this.icon = "/assets/paint-icon.svg";
    this.toolText = 'Draw';
    let prevX = null;
    let prevY = null;
    this.active = false;
    this.action = function()
    {
        if(!this.active) return;
        if(mouseIsPressed)
        {
            if(prevX == null || prevY == null)
            {
                prevX = mouseX;
                prevY = mouseY;
            }
            line(prevX, prevY, mouseX, mouseY);
            prevX = mouseX;
            prevY = mouseY;
        }
        else
        {
            prevX = prevY = null;
        }
    }
}