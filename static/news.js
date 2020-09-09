const news_container = '#news'
const news = [{
    serial: '1',
    title: 'Elevator Analysis and Monitoring Tester',
    image: 'EA7.JPG',
    body: `Elevator Analyics&trade; is a new elevator analysis and monitoring tools by Qameleon. Building upon the company's existing technology, the product looks for meaningful patterns in an elevator's operation and is promoted as workable with any elevator, regardless of age. The <b>EA7 Elevator Analyzer</b> was designed with input from inspectors, consultants and mechanics. Working with your laptop, it provides real-time information about an elevator's operation, creates a permanent record of every trip and automatically generates reports. It can be setup in minutes inside the car and does not interfere with the elevator's operation. Uses include inspection, troubleshooting, load testing, pre-modernization evaluation and traffic-analysis enhancement.`
}]
const style = `
<style>
    .card-body>img {
        max-width: -webkit-fill-available;
        margin-bottom: 1rem;
    }

    @media (min-width: 540px) {
        .card-body>img {
            max-height: 10rem;
            margin-left: 1rem;
        }
    }
</style>`
$(style).prependTo(news_container);
function printNews(news) {
    var format = `
<div class="card">
    <div class="card-header" id="heading${news.serial}">
        <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${news.serial}" aria-expanded="true" aria-controls="collapse${news.serial}">
                ${news.title}
            </button>
        </h2>
    </div>

	<div id="collapse${news.serial}" class="collapse" aria-labelledby="heading${news.serial}" data-parent="${news_container}">
        <div class="card-body">
            <img src="./static/news_img/${news.image}" align="right" />
            ${news.body}
        </div>
    </div>
</div>`
    $(format).appendTo(news_container);
}
news.forEach(item => printNews(item));
