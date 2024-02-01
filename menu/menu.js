//highlight navbar selection based on current url

if (window.location.href.includes("about")) {
    about = "            <li><a href=\"..\/about\/\" style=\"color:#e0218a;\">about<\/a><\/li>"
    notes = "            <li><a href=\"..\/notes\/\">notes<\/a><\/li>"
  }

else {
    about = "            <li><a href=\"..\/about\/index.html\">about<\/a><\/li>"
    notes = "            <li><a href=\"..\/notes\/index.html\" style=\"color:#e0218a;\">notes<\/a><\/li>"
  }

 
if (window.location.href.includes("complexity") || window.location.href.includes("quotes") || window.location.href.includes("data") || window.location.href.includes("miscellania")){
  file = "<link type=\"text\/css\" rel=\"stylesheet\" href=\"..\/..\/menu\/index.css\" \/>"
  favicon = "<link rel=\"icon\" type=\"image\/x-icon\" href=\"..\/..\/media\/favicon.ico\">"
}

else {
  file = "<link type=\"text\/css\" rel=\"stylesheet\" href=\"..\/menu\/index.css\" \/>"
  favicon = "<link rel=\"icon\" type=\"image\/x-icon\" href=\"..\/media\/favicon.ico\">"
}

document.write("<!doctype html>");
document.write("<html>");
document.write("  <head>");
document.write(file);
document.write(favicon);
document.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" \/>");
document.write("  <\/head>");
document.write("  <body>");
document.write("    <div class=\"menu\">");
document.write("        <h2>&lambda;<\/h2>");
document.write("        <ul>");
document.write("            <li><a href=\"..\/\">home<\/a><\/li>");
document.write(about);
document.write(notes);
document.write("            <li><a href=\"..\/media\/resume.pdf\">resume<\/a><\/li>");
document.write("            <li><a href=\"mailto:nathanembaye26@gmail.com\">contact<\/a><\/li>");
document.write("        <\/ul>");
document.write("    <\/div>");
document.write("  <\/body>");
document.write("<\/html>");
