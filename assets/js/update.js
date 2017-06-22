/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student
 *       6/15 DONE
 * 2. Using the bootstrap-selct plugin render dropdown on the page
 *       6/15 DONE
 * 3. Use the live search functionality to make the dropdown searchable
 *       6/15 DONE
 * 4. Add the user glyphicons next to each student in the list
 *       6/15 DONE
 * 6. Add a menu header to the dropdown
 *        6/15 DONE
 * 7. Customize further with anything you find intersting
 *
 * 8. When an student is selected the form fields should be enabled
      and populated with the data for the selected student
 *       6/16 DONE
 * 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 10. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

(function() {

$(function() {

  //disable our form prior to selecting a student
  $("#updateStudentForm :input").prop("disabled", true);


  $("#student_id").selectpicker({
    style: 'btn-info',
    size: 10,
    liveSearch: true
  });

  //listen for select change
  $('#student_id').on('changed.bs.select', function() {
    $("#updateStudentForm :input").prop("disabled", false);


      $( "select option:selected" ).each(function() {
         let recordId = $( this ).val();
         $.get('http://localhost:1337/student/' + recordId, function( data ) {
           console.log(data);
            $.each(data, function(name, value) {
               let tableData = $('[name="'+name+'"]');
               name = tableData.attr('name');
               console.log("name: " + name + " value: " + value);
               switch(name) {
                 case 'student_id':
                    tableData.val(value);
                    break;
                  case 'first_name':
                     tableData.val(value);
                     break;
                  case 'last_name':
                     tableData.val(value);
                     break;
                  case 'start_date':
                     tableData.val(value);
                     break;
                  case 'gpa':
                     tableData.val(value);
                     break;
                  case 'sat':
                     tableData.val(value);
                     break;
                  case 'major_id':
                     tableData.val(value);
                     break;
                  }
            }) // end each
         }); // end get
      }); // end select
   }); // end change event event

}); //closed js


})(); //close 1st
