// Starting ajax js functions practice for CRUD Explorer Reviews
$(document).ready(function() {

  // Get all results
    $.ajax({
      type: "POST",
      url: "http://tiy-fee-rest.herokuapp.com/collections/kat",
      data: submittedReview,
      dataType: "JSON",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("hurray");
       $("#addReview").modal("hide");
      }
    });
  }

  