let myCanvas = null;
let canvasParent = null;
let toolBox = null;
let tool1 = null;

function setup()
{
    myCanvas = createCanvas(600, 600);
    
    canvasParent = select('.canvas-wrapper');
    myCanvas.parent(canvasParent);
    background(150);
    toolBox = new ToolManager();
    toolBox.addTool(new LineTool());
    toolBox.addTool(new DrawTool());

    if(toolBox != null)
    {
        myCanvas.mouseOver(function()
        {
            toolBox.activeTool.active = true;
        });
        myCanvas.mouseOut(function()
        {
            toolBox.activeTool.active = false
        });
    }
}

function draw()
{
    if(toolBox != null)
    {
        toolBox.activeTool.action();
    }
}