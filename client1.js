/**
    *@NApiVersion 2.0
    *@NScriptType ClientScript
    *@NModuleScope SameAccount
    */

   define(['N/ui/dialog'],
   function (dialog){
   
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
         fieldChanged: fieldChanged
      }

})