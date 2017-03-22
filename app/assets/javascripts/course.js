var ready = function() {
  $(".btn-enrollment").click(function() {
    alert('btn clicked')
    console.log(this.getAttribute("data-id"))

    var course_id = this.getAttribute("data-id");

    $.ajax({
      url: 'courses/' + course_id + '/enroll',
      dataType: 'script',
      method: 'post',
      data: { course_id: course_id},
      success: function(data) {
        console.log('successful');
        console.log(data)
        //alert("Thank you for your enrollment")
      },
      error: function(error) {
        console.log(error.responseText)
      }
    })
  });
};

$(document).on("turbolinks:load", ready);
