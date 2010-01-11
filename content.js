
$(function() {
  var inrename = false;
  var rename_users = function(links) {
    if (!inrename) {
      inrename = true;
      links.each(function(i) {
        var realname = $(this).text();
        var alias = localStorage[realname];
        if (alias) {$(this).text(alias);}
        if ($(this).hasClass("GenericStory_Name") && !$(this).hasClass("has_a_renamer")) {
          $(this).addClass("has_a_renamer").after(
            $("<a>").text("✍").css("margin", "0em 0.25em").click(function () {
              var newname = prompt("Enter new name for " + realname + ".  Delete name to reset.  Changes will appear on next page reload.", alias || realname);
              if (newname != "null") {localStorage[realname] = newname || realname;}
              return false;
            })
          )
        }
      })
      inrename = false;
    }
  }

  $("body").bind("DOMNodeInserted", function(){rename_users($(this).find("a"))});
  rename_users($("a"));
});
