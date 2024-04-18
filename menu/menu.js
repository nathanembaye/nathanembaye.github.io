link = window.location.href

if (link.includes("complexity") || link.includes("quotes") || link.includes("datalake") || link.includes("miscellania")){
  styles = "    <link type=\"text\/css\" rel=\"stylesheet\" href=\"..\/..\/menu\/index.css\" \/>"
  favicon = "    <link rel=\"icon\" type=\"image\/x-icon\" href=\"..\/..\/media\/favicon.ico\">"
  home = "<li><a href=\"..\/..\/\">home<\/a><\/li>"
  about = "            <li><a id=\"one\" href=\"..\/..\/about\/\">about<\/a><\/li>"
  notes = "            <li><a id=\"two\" href=\"..\/..\/notes\/\">notes<\/a><\/li>"
  resume = "<li><a id=\"three\" href=\"..\/..\/media\/Resume.pdf\">resume<\/a><\/li>"
}

else {
    styles = "    <link type=\"text\/css\" rel=\"stylesheet\" href=\"..\/menu\/index.css\" \/>"
    favicon = "    <link rel=\"icon\" type=\"image\/x-icon\" href=\"..\/media\/favicon.ico\">"
    home = "            <li><a href=\"..\/\">home<\/a><\/li>"
    about = "            <li><a id=\"one\" href=\"..\/about\/\">about<\/a><\/li>"
    notes = "            <li><a id=\"two\" href=\"..\/notes\/\">notes<\/a><\/li>"
    resume = "            <li><a id=\"three\" href=\"..\/media\/Resume.pdf\">resume<\/a><\/li>"
}


document.write("<!doctype html>");
document.write("<html>");
document.write("  <head>");
document.write(styles);
document.write(favicon);
document.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" \/>");
document.write("  <\/head>");
document.write("  <body onload=\"init()\">");
document.write("    <div class=\"mode\" onclick=\"toggleDarkMode()\">");
document.write("        <script>");
document.write("          function toggleDarkMode() {");
document.write("            if (localStorage.getItem(\"mode\") == null) {");
document.write("              localStorage.setItem(\"mode\", \"light\");");
document.write("            }");
document.write("            else if (localStorage.getItem(\"mode\") == \"light\") {");
document.write("              localStorage.setItem(\"mode\", \"dark\")");
document.write("            }");
document.write("            else {");
document.write("              localStorage.setItem(\"mode\", \"light\");");
document.write("            }");
document.write("            document.body.classList.toggle(\"dark-mode\");");
document.write("          }");
document.write("        <\/script>");
document.write("        <script>");
document.write("          function init() {");
document.write("            if (localStorage.getItem(\"mode\") == \"dark\"){");
document.write("              document.body.classList.toggle(\"dark-mode\");");
document.write("            }");
document.write("");
document.write("            if (location.href.includes(\"about\")) {");
document.write("                document.getElementById(\"one\").className = \"highlightLink\";");
document.write("            }");
document.write("            else if (location.href.includes(\"Resume\")) {");
document.write("                document.getElementById(\"three\").className = \"highlightLink\";");
document.write("            }");
document.write("            else {");
document.write("                document.getElementById(\"two\").className = \"highlightLink\";");
document.write("            }");
document.write("          }");
document.write("        <\/script>");
document.write("      <\/div>");
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