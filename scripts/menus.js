
//highlight navbar selection based on current url
if (window.location.href.includes("about")) {
    about = "<li><a href=\"about.html\" style=\"color:#e0218a;\">about<\/a><\/li>"
    notes = "            <li><a href=\"notes.html\">notes<\/a><\/li>"
  }

else {
    about = "            <li><a href=\"about.html\">about<\/a><\/li>"
    notes = "<li><a href=\"notes.html\" style=\"color:#e0218a;\">notes<\/a><\/li>"
  }


document.write("<!doctype html>");
document.write("<html>");
document.write("  <head>");
document.write("    <link type=\"text\/css\" rel=\"stylesheet\" href=\"css\/menu.css\" \/>");
document.write("    <link rel=\"icon\" type=\"image\/x-icon\" href=\"media\/favicon.ico\">");
document.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" \/>");
document.write("  <\/head>");
document.write("  <body>");
document.write("    <div class=\"menu\">");
document.write("        <h2>&#11414;<\/h2>");
document.write("        <ul>");
document.write("            <li><a href=\"index.html\">home<\/a><\/li>");
document.write(about);
document.write(notes);
document.write("            <li><a href=\"media\/resume.pdf\">resume<\/a><\/li>");
document.write("            <li><a href=\"mailto:nathanembaye26@gmail.com\">contact<\/a><\/li>");
document.write("        <\/ul>");
document.write("    <\/div>");
document.write("  <\/body>");
document.write("<\/html>");
