import {triangle} from './triangle';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    $(".result").hide();

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    $("#"+triangle(side1,side2,side3)).show();


    $("#clear").click(function() {
      $("#triangle").trigger("reset");
      $(".result").hide();
    });
  });
});
