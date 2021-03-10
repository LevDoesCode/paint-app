function ToolManager()
{
    this.tools = [];
    this.activeTool = null;
    let self = this;

    this.addTool = function(newTool)
    {
        let tool = createDiv('<img src="' + newTool.icon + '" class="tool-icon"><span>' + newTool.toolText + '</span>');
        tool.addClass('tool');
        let parentElent = select('.tool-list');
        tool.parent(parentElent);
        tool.parent('asdf');
        if(this.activeTool == null)
            this.activeTool = newTool;
        this.tools.push(newTool);

        tool.mouseClicked(function()
        {
            //console.log(this);  //The html element we're clicking on
            //console.log(self.tools);  //this ToolManger object we created
            
            let allTools = selectAll('.tool');
            for(let i=0; i<allTools.length; i++)
            {
                allTools[i].removeClass('selected-tool');
            }
            this.addClass('selected-tool');
            
            let selectTool = this.child()[1].innerHTML;
            for(let i=0; i<self.tools.length; i++)
            {
                if(self.tools[i].toolText == selectTool)
                {
                    self.activeTool = self.tools[i];
                    break;
                }
            }
        });
    }
}