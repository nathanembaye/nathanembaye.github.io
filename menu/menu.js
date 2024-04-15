  
  link = window.location.href

  if (link.includes("complexity") || link.includes("quotes") || link.includes("data") || link.includes("miscellania")){
    styles = "    <link type=\"text\/css\" rel=\"stylesheet\" href=\"..\/..\/menu\/index.css\" \/>"
    favicon = "    <link rel=\"icon\" type=\"image\/x-icon\" href=\"..\/..\/media\/favicon.ico\">"
    home = "            <li><a href=\"..\/..\/\">home<\/a><\/li>"
    about = "            <li><a href=\"..\/..\/about\/\">about<\/a><\/li>"
    notes = "            <li><a href=\"..\/..\/notes\/\" style=\"color:#e0218a;\">notes<\/a><\/li>"
    resume = "            <li><a href=\"..\/..\/media\/Resume.pdf\">resume<\/a><\/li>"
  }

  else {

    home = "            <li><a href=\"..\/\">home<\/a><\/li>"
    resume = "            <li><a href=\"..\/media\/Resume.pdf\">resume<\/a><\/li>"
    styles = "    <link type=\"text\/css\" rel=\"stylesheet\" href=\"..\/menu\/index.css\" \/>"
    favicon = "    <link rel=\"icon\" type=\"image\/x-icon\" href=\"..\/media\/favicon.ico\">"

    //highlight about in navbar
    if (link.includes("about")) {
      about = "            <li><a href=\"..\/about\/\" style=\"color:#e0218a;\">about<\/a><\/li>"
      notes = "            <li><a href=\"..\/notes\/\">notes<\/a><\/li>" 
    }

    //highlight notes in navbar
    else {
      about = "            <li><a href=\"..\/about\/\">about<\/a><\/li>"
      notes = "            <li><a href=\"..\/notes\/\" style=\"color:#e0218a;\">notes<\/a><\/li>"
    }

  }


document.write("<!doctype html>");
document.write("<html>");
document.write("  <head>");
document.write(styles);
document.write(favicon);
document.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" \/>");
document.write("  <\/head>");
document.write("  <body>");
document.write("    <div class=\"menu\">");
document.write("        <h2>&lambda;<\/h2>");
document.write("        <ul>");
document.write(home);
document.write(about);
document.write(notes);
document.write(resume);
document.write("            <li><a href=\"mailto:nathanembaye26@gmail.com\">contact<\/a><\/li>");
document.write("        <\/ul>");
document.write("    <\/div>");
document.write("  <\/body>");
document.write("<\/html>");  
