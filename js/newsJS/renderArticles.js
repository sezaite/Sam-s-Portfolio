function renderArticles(blog) {
    console.log('straipsniai');
    let HTML = "";
    HTML += `<div class="article" style="background-image: url('../img${blog.imgLink}');">
        <div class="article-wrapper">
            <h5>${blog.header}</h5>
            <p class="date">${blog.date}</p>
            <p>${blog.intro} <a href="#" class="article-btn">Continue
            reading <i class='fa fa-angle-right'></i></a></p>
    </div>
</div>`;
    return HTML;
}

export { renderArticles };