const cds = require('@sap/cds');
const { spawn } = require('child_process');
module.exports = cds.service.impl(async function () {
    let {
        parent,
        child
    } = this.entities;
      

    this.on('DELETE', parent, async (req,next) => {
        debugger
        const data = req.data;
       if(data.p_id%2 == 0)
       {
        req.error
        ({
            message: `Cannot delete ${data.p_id}`,
        });  
       }
       return next(); 
    }); 
    
    this.on('EDIT', parent, async (req,next) => 
    {
        debugger
        const id = req._params[0].p_id;
        if(id%2 != 0)
        {
            return next();            
        }
        else
        {
            req.error
            ({
                message: `Cannot edit id ${req._params[0].p_id}`
            })
        }
    });

});