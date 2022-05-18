/**
    *@NApiVersion 2.0
    *@NScriptType ClientScript
    *@NModuleScope SameAccount
    */

   define(['N/ui/dialog'],
   function (dialog){

        function pageInit(scriptContext){
            alert('Test');
             dialog.alert({
                title: 'Alert',
                message: 'Click OK to continue'
            })
        }
    

       function fieldChanged(scriptContext){
           var fieldId= scriptContext.fieldId;
           var currentRecord= scriptContext.currentRecord;
                if(fieldId=== 'entity'){
                    var fieldValue= currentRecord.getText({fieldId: 'entity'});
                    alert('field changed');
                    dialog.alert({
                        title: 'Alert',
                        message: 'Click OK to continue'
                    })
        }
      }

      return{
          pageInit: pageInit,
          fieldChanged: fieldChanged
      }

})