$(document).ready(function(){$("#grid").gridalicious({gutter:0,width:340}),$(".wpcf7-form").find("p").contents().unwrap(),$(".wpcf7-form").find("span").contents().unwrap(),$('input[type="checkbox"]').attr("id","signup"),$(".signup").click(function(){$("#signup").attr("checkbox")?$("#signup").removeAttr("checkbox"):$("#signup").attr("checkbox","checked")}),$(function(){var s=$("body").hasClass("is-mobile"),l=$(".primary-nav"),o=$(".logo"),r=$(".logo-alt"),a=$(".single .logo");$(window).scroll(function(){var c=$(window).scrollTop();s?(c>=300?l.addClass("scroll"):l.removeClass("scroll"),c>=150?o.addClass("scroll"):o.removeClass("scroll")):(c>=500?(l.addClass("scroll"),r.addClass("scroll")):(l.removeClass("scroll"),r.removeClass("scroll")),c>=200?o.addClass("scroll"):o.removeClass("scroll"),c>=100?a.addClass("scroll"):a.removeClass("scroll"))})}),$(function(){if($("body").is(".single")){var s=$(".single header").attr("id");$(".single header").css("transition","3s"),$(".single header").css("background",s)}})});