/**
 * Use bootstrap-select to enhance the functionality of dropdown on this page.
 *
 *
 * Here's what this you will need to do:
 *
 * 1. Inlclude the following DataTables css in layout.ejs
 *    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/css/bootstrap-select.min.css">
 *  6/16 DONE
 * 2. Include the following bootstrap-select JavaScript in layout.ejs
 *    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/js/bootstrap-select.min.js"></script>
 *  6/16 DONE
 * 3. Using the bootstrap-selct plugin render dropdown on the page
 *    NA - alreaady there
 * 4. Use the live search functionality to make the dropdown searchable
 *       done
 * 5. Add the user glyphicons next to each student in the list
 *    6/16 DONE
 * 7. Add a menu header to the dropdown
 *       6/16 done
 * 8. Customize further with anything you find intersting
 *
 * Here's the documentation you need:
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 *
 */

 (function(){

   $(function(){

      $("#student_id").selectpicker({
        style: 'btn-info',
        size: 10,
        liveSearch: true
      });

   })

 })();
