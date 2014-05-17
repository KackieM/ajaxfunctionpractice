// Starting ajax js functions practice for CRUD Explorer Reviews
// Starting review js for CRUD Explorer Reviews
$(document).ready(function() {

  explorerReviews.init();

});

var explorerReviews = {


  init: function() {
    // this.initStyling();
    this.initEvents();
  },
  initStyling: function() {
    

  },
  initEvents: function() {
    $(".reviewcontent").on("click", explorerReviews.showModal);
    $(".modal-footer").on("click", ".saveReview", this.completeReview);
    $(".previews").on("click", this.showReview);
    
  },

   showModal: function() {
      console.log("i hear you");
      $("#addReview").modal();
  },

  completeReview: function (e) {
    e.preventDefault();
  console.log("consider this submitted");

  
  var name = $('.reviewerName').val();

  var activity = $('.newReviewTitle').val();
  
  var ourDate = $('.reviewerDate').val();
  
  var email = $('.reviewerEmail').val();
  
  var comment = $('.reviewerContent').val();
  
    var submittedReview = {
      reviewerName: name,
      activityName: activity,
      reviewDate: ourDate,
      reviewerEmail: email,
      reviewerComment: comment,
      relatedActivity: "hiking"
    };

  console.log(submittedReview);

$.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/kat",
      type: "POST",
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

},
getHikingReviews: function() {},
getFishingReviews: function() {},
getBoatingReviews: function() {},
getCampingReviews: function() {},
getPicnicReviews: function() {},
getSightseeingReviews: function() {},


showReview: function (e) {
    e.preventDefault();
    console.log("this is a button");

$.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/kat",
      type: "GET",
      dataType: "JSON",
      error: function(jqXHR, status, error) {
        alert("Something is Wrong" + error);
      },
      success: function(data, dataType, jqXHR) {
        console.log("YOU GOT IT NOW RETURN IT");

          var reviewdata = data;
          console.log(reviewdata);

          var html = '';
          for (var i = 0; i < reviewdata.length; i++){
          html += '<li>' + reviewdata[i].activityName + " - " + reviewdata[i].reviewerName + '</li>';
          };
          console.log(html);

         $(".parkpics").html(html);

      }
    });

}
  removereviewData: function() {
    e.preventDefault();
    console.log("this is the remove button");
    
    $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/kat",
      type: "DELETE",
      error: function(jqXHR, status, error) {
        alert("something is wrong" + error);
      }, 
      success: function(data) {
        alert("Nicely Done review deleted");

        var $thisReview = $(this).closest("article")
        
        var postId = $thisReview.data("");
         submittedReview.render();  
         
      }
    });
  }

}