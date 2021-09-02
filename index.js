$( '#submit-btn' ).ready(function() {
    $( "#submit-btn" ).on( "click", function( event ) {
        let firstName = $("#fname").val()
        let lastName = $("#lname").val()
        $("#jumbotron").html(firstName+ " " + lastName)
        return false
    });
    
});


