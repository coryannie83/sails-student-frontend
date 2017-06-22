/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 *
 * 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *    6/15 DONE
 * 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *      6/15 DONE - go back and add validation on remaining fields
                see if i can find a date picker
 * 3. Use a custom message for one validation
 *      6/15 Done - read more about error types, possible enhancement make color of field turn pink when error triggered
 * 4. Make the color of the error text red
 *    6/15 Done
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */

(function() {

  $(function() {

    $("#addStudentForm").validate({
    errorClass: "text-danger",
      rules: {
        first_name: {
          required: true,
          minlength: 2
        },

        last_name: {
          required: true,
          minlength: 2
        },
        start_date: {
          required: true,
          dateISO: true
        }
      },
      messages: {
        first_name: {
          required: "First name is required.",
          minlength: jQuery.validator.format("Please enter at least 2 characters.")
        },
        last_name: {
          required: "Last name is required.",
          minlength: jQuery.validator.format("Please enter at least 2 characters.")
        },
        start_date: {
          required: "Start date is required.",
          dateISO: jQuery.validator.format("Please enter start date in the format provided.")
        }
      }

    });


  })

})();
