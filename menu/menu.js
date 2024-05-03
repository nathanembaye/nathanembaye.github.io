link = window.location.href

if (link.includes("slidingwindow")){
  styles = "    <link type=\"text\/css\" rel=\"stylesheet\" href=\"..\/..\/..\/menu\/index.css\" \/>"
  home = "<li><a href=\"..\/..\/..\/\">home<\/a><\/li>"
  about = "            <li><a id=\"one\" href=\"..\/..\/..\/about\/\">about<\/a><\/li>"
  notes = "            <li><a id=\"two\" href=\"..\/..\/..\/notes\/\">notes<\/a><\/li>"
  resume = "<li><a id=\"three\" href=\"..\/..\/..\/media\/Resume.pdf\">resume<\/a><\/li>"
  layer = "3"
}

else if (link.includes("complexity") || link.includes("quotes") || link.includes("datalake") || link.includes("miscellania") || link.includes("grokking")){
  styles = "    <link type=\"text\/css\" rel=\"stylesheet\" href=\"..\/..\/menu\/index.css\" \/>"
  home = "<li><a href=\"..\/..\/\">home<\/a><\/li>"
  about = "            <li><a id=\"one\" href=\"..\/..\/about\/\">about<\/a><\/li>"
  notes = "            <li><a id=\"two\" href=\"..\/..\/notes\/\">notes<\/a><\/li>"
  resume = "<li><a id=\"three\" href=\"..\/..\/media\/Resume.pdf\">resume<\/a><\/li>"
  layer = "2"
}



else {
    styles = "    <link type=\"text\/css\" rel=\"stylesheet\" href=\"..\/menu\/index.css\" \/>"
    home = "            <li><a href=\"..\/\">home<\/a><\/li>"
    about = "            <li><a id=\"one\" href=\"..\/about\/\">about<\/a><\/li>"
    notes = "            <li><a id=\"two\" href=\"..\/notes\/\">notes<\/a><\/li>"
    resume = "            <li><a id=\"three\" href=\"..\/media\/Resume.pdf\">resume<\/a><\/li>"
    layer = "1"
}

const layer_light = {"1": "../media/favicon_light.ico", "2": "../../media/favicon_light.ico", "3": "../../../media/favicon_light.ico"}
const layer_dark = {"1": "../media/favicon_dark.ico", "2": "../../media/favicon_dark.ico", "3": "../../../media/favicon_dark.ico"}
 

document.write("<!doctype html>");
document.write("<html>");
document.write("  <head>");
document.write(styles);
document.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" \/>");
document.write("  <\/head>");
document.write("  <body onload=\"init()\">");
document.write("    <div class=\"mode\" onclick=\"toggleDarkMode()\">");
document.write("        <script>");
document.write( '          function toggleDarkMode() {\n' );
document.write( '            if (localStorage.getItem(\"mode\") == null) {\n' );
document.write( '              localStorage.setItem(\"mode\", \"light\");\n' );
document.write( '              \n' );
document.write( '              document.querySelector(\"link[rel*=\'icon\']\").href = layer_light[layer];\n' );
document.write( '            }\n' );
document.write( '            else if (localStorage.getItem(\"mode\") == \"light\") {\n' );
document.write( '              localStorage.setItem(\"mode\", \"dark\")\n' );
document.write( '              document.querySelector(\"link[rel*=\'icon\']\").href = layer_dark[layer];\n' );
document.write( '            }\n' );
document.write( '            else {\n' );
document.write( '              localStorage.setItem(\"mode\", \"light\");\n' );
document.write( '              document.querySelector(\"link[rel*=\'icon\']\").href = layer_light[layer];\n' );
document.write( '            }\n' );
document.write( '            document.body.classList.toggle(\"dark-mode\");\n' );
document.write( '          }' );
document.write("        <\/script>");
document.write("        <script>");
document.write( '          function init() {\n' );
document.write( '            if (localStorage.getItem(\"mode\") == \"dark\"){\n' );
document.write( '              document.body.classList.toggle(\"dark-mode\");\n' );
document.write( '              document.querySelector(\"link[rel*=\'icon\']\").href = layer_dark[layer];\n' );
document.write( '            }\n' );
document.write( '            else{\n' );
document.write( '              document.querySelector(\"link[rel*=\'icon\']\").href = layer_light[layer];\n' );
document.write( '            }\n' );
document.write( '            if (location.href.includes(\"about\")) {\n' );
document.write( '                document.getElementById(\"one\").className = \"highlightLink\";\n' );
document.write( '            }\n' );
document.write( '            else if (location.href.includes(\"Resume\")) {\n' );
document.write( '                document.getElementById(\"three\").className = \"highlightLink\";\n' );
document.write( '            }\n' );
document.write( '            else {\n' );
document.write( '                document.getElementById(\"two\").className = \"highlightLink\";\n' );
document.write( '            }\n' );
document.write( '          }' );
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