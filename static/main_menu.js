var main_menu = `
<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container">
        <style>
            body {
                font-family: Arimo;
            }
            .navbar-brand {
                background-image: url(./static/logo/logo_gr.jpg);
                min-width: 4rem;
                min-height: 4rem;
                background-repeat: no-repeat;
                background-size: 2rem;
                text-indent: 2.5rem;
                padding-top: 0.5rem;
                font-weight: bolder;
                font-size: 2rem;
                background-position-y: center;
            }

@media (min-width: 375px) {
    .navbar-brand {
        background-size: 4rem;
        text-indent: 4.5rem;
    }
}
@media (max-width: 374px;) {
    .navbar-brand {
        background-size: 2rem;
        text-indent: 2.3rem;
    }
}
        </style>
        <a class="navbar-brand mx-auto" href="./index.html">JIT ETB LTD</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav ml-auto">
                <a class="nav-item border border-light bg-danger text-white m-1 px-3 py-2 rounded text-decoration-none" href="./index.html">Home</a>
                <a class="nav-item border border-light bg-danger text-white m-1 px-3 py-2 rounded text-decoration-none" href="./about.html">About</a>
                <a class="nav-item border border-light bg-danger text-white m-1 px-3 py-2 rounded text-decoration-none" href="./catalog.html">Catalogue</a>
                <a class="nav-item border border-light bg-danger text-white m-1 px-3 py-2 rounded text-decoration-none" href="./news.html">News</a>
                <a class="nav-item border border-light bg-danger text-white m-1 px-3 py-2 rounded text-decoration-none" href="./contact.html">Contact</a>
            </div>
        </div>
    </div>
</nav>`;
$(main_menu).prependTo('body');