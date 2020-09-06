var main_menu = `
<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container">
        <a class="navbar-brand mx-auto" href="./index.html" style="font-family: Arial Black;">
            <img src="./static/logo/logo_gr.jpg" width="34" height="34" class="d-inline-block align-top" alt="JITETBLTD" loading="lazy" />
            JIT ETB LTD
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav ml-auto">
                <a class="nav-item border border-light bg-danger text-white m-1 px-3 py-2 rounded text-decoration-none" href="./index.html">Home</a>
                <a class="nav-item border border-light bg-danger text-white m-1 px-3 py-2 rounded text-decoration-none" href="#about">About</a>
                <a class="nav-item border border-light bg-danger text-white m-1 px-3 py-2 rounded text-decoration-none" href="./catalog.html">Catalogue</a>
                <a class="nav-item border border-light bg-danger text-white m-1 px-3 py-2 rounded text-decoration-none" href="./news.html">News</a>
                <a class="nav-item border border-light bg-danger text-white m-1 px-3 py-2 rounded text-decoration-none" href="./contact.html">Contact</a>
            </div>
        </div>
    </div>
</nav>`;
$(main_menu).prependTo('body');