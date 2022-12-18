
$(document).ready(function(){
    $("#submit-button").click(function() {
        const date = $("#datapicker").val()
        const startTime = $("#starttimepicker").val()
        const endTime = $("#endtimepicker").val()
        const desc = $("#textarea1").val()
        const select1 = $("#select1").val()
        const select2 = $("#select2").val()
        
        if(date !== "",
            startTime !== "",
            endTime !== "",
            desc !== "",
            select1 !== null,
            select2 !== null){
                $("#custom-validation-form").submit()
            }else{
                alert("All Field is required")
            }
        
        
        
        
    })
})