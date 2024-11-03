body {
    margin: 0;
    font-family: Arial, sans-serif;
    direction: ltr; /* default direction */
}

header {
    text-align: center;
    padding: 20px;
    position: relative;
}

#language-select {
    position: absolute;
    top: 10px;
    right: 10px;
}

#language-select button {
    margin-left: 10px;
    padding: 5px 10px;
    cursor: pointer;
}

#top-image img {
    max-width: 100%;
    height: auto;
}

nav {
    background-color: #333;
    overflow: hidden;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

nav li {
    float: left;
}

nav li a {
    display: block;
    padding: 14px 16px;
    text-decoration: none;
    color: white;
}

nav li a:hover {
    background-color: #111;
}

main {
    padding: 20px;
}

main img {
    display: block;
    margin: 20px auto;
    max-width: 100%;
    height: auto;
}

footer {
    text-align: center;
    font-size: 12px;
    padding: 10px;
}

.rtl {
    direction: rtl;
    text-align: right;
}

.rtl nav li {
    float: right;
}

