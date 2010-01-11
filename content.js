
$(function() {
  var name_map = {
    "David Shafer" : "tekkub",
    "Tom P Finn" : "Dolby",
    "Pete Lawler" : "Bleeter",
    "Jim Whitehead" : "Cladhaire",
    "Jenn Crewell" : "Lopeppeppy",
    "George Pribul" : "Kirkburn",
    "Ken Allan" : "Norganna",
    "Sin Huan Chan" : "Xinhuan",
    "Esteban Santana Santana" : "Mentalpower",
    "Ryan Lakanen" : "Seerah",
    "Mark Breitenbach" : "zhinjio",
    "Jacob Segal" : "Guillotine",
    "Jim Garner" : "Kudane",
    "Matthew Orlando" : "cogwheel",
    "Bernie Fritts" : "Bouvi",
    "Taner Halicioglu" : "Duman",
    "Matt Converse" : "Lunessa",
    "Karen Cairenn Hobson" : "Cairenn",
    "Kevin M. Kelly" : "Zootfizzle",
    "Kelly Crabbé" : "Moonwitch",
    "John Pasula" : "Ackis",
    "Bryan McLemore" : "Kaelten",
    "Danial Bakker" : "Imios",
    "James Callahan" : "Torhal",
    "Mikael Olsson" : "Mikk",
  }

  var inrename = false;
  var rename_users = function(links) {
    if (!inrename) {
      inrename = true;
      links.each(function(i) {
        var realname = $(this).text();
        var alias = name_map[realname];
        if (alias) {$(this).text(alias);}
      })
      inrename = false;
    }
  }

  $("body").bind("DOMNodeInserted", function(){
    rename_users($(this).find("a"))
  });
  rename_users($("a"));
  // rename_users();
});


