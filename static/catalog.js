const file_server = "https://drive.google.com/file/d/"
const file_type = "/view?usp=sharing"
const all_catalog = [{
        "img": "fujihd.png",
        "alt": "FujiHD",
        "title": "FujiHD",
        "catalog": "1cOJQPO-7G5xd_drjQrm--lWeYmdS6UuJ"
    },
    {
        "img": "movilift.png",
        "alt": "MoviLift",
        "title": "Movi Lift",
        "catalog": "1e8aAu1kpqoK3aLEGweEfXT4me-AFKfHt"
    },
    {
        "img": "srl.png",
        "alt": "SRL",
        "title": "SRL",
        "catalog": "133qlDgHkSi0ad6yyFktuzOT_KefcrLzn"
    },
    {
        "img": "xiwei.png",
        "alt": "XIWEI",
        "title": "XIWEI",
        "catalog": "1i1qfJqBYbv63VhmQCOgwhxd02YUPv3wE"
    }
]
all_catalog.forEach(item => {
    var format = `
    <div class="card col-sm-4 m-3" style="width: 18rem;">
        <img src="./static/logo/suppliers/${item.img}" class="card-img-top" alt="${item.alt}">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <a class="btn btn-outline-warning" target="_blank" href="${file_server}${item.catalog}${file_type}">Download</a>
        </div>
    </div>`
    $(format).appendTo($('#catalogue').children('div'))
})