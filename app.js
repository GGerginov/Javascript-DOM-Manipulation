function solve() {

    let button = document.getElementsByClassName('btn create')[0];

    button.addEventListener('click', function (e) {

            e.preventDefault();
            let author = document.getElementById('creator').value;
            let title = document.getElementById('title').value;
            let category = document.getElementById('category').value;
            let content = document.getElementById('content').value;

            let article = document.createElement('article');

            let section = document.getElementsByTagName('main')[0].querySelector('section');

            let h1 = document.createElement('h1');

            h1.innerHTML = title;

            article.appendChild(h1);

            let pForCategoty = document.createElement('p');

            pForCategoty.innerHTML = 'Category: ';

            let strongForCategory = document.createElement('strong');

            strongForCategory.innerHTML = category;


            pForCategoty.appendChild(strongForCategory);

            article.appendChild(pForCategoty);

            let pForAuthor = document.createElement('p');

            pForAuthor.innerHTML = 'Creator: ';

            let strongForAuthor = document.createElement('strong');

            strongForAuthor.innerHTML = author;

            pForAuthor.appendChild(strongForAuthor);

            article.appendChild(pForAuthor);

            let pForContent = document.createElement('p');

            pForContent.innerHTML = content;

            article.appendChild(pForContent);


            let div = document.createElement('div');

            div.classList.add('buttons');

            let buttonDelete = document.createElement('button');

            buttonDelete.classList.add('btn', 'delete');

            buttonDelete.innerHTML = 'Delete';

            let buttonArchive = document.createElement('button');

            buttonArchive.classList.add('btn', 'archive');

            buttonArchive.innerHTML = 'Archive';

            div.appendChild(buttonDelete);

            div.appendChild(buttonArchive);

            article.appendChild(div);


            section.appendChild(article);


            document.getElementById('creator').value = "";
            document.getElementById('title').value = "";
            document.getElementById('category').value = "";
            document.getElementById('content').value = "";


            buttonArchive.addEventListener('click', function (e) {

                article.remove();


                let list = document.getElementsByClassName('archive-section')[0].querySelector('ul');

                let li = document.createElement('li');

                li.innerHTML = article.querySelector('h1').innerHTML;

                list.appendChild(li);

                let items = list.childNodes;
                let itemsArr = [];
                for (let i in items) {
                    if (items[i].nodeType === 1) { // get rid of the whitespace text nodes
                        itemsArr.push(items[i]);
                    }
                }

                itemsArr.sort(function(a, b) {
                    return a.innerHTML === b.innerHTML
                        ? 0
                        : (a.innerHTML > b.innerHTML ? 1 : -1);
                });

                for (i = 0; i < itemsArr.length; ++i) {
                    list.appendChild(itemsArr[i]);
                }
            });

            buttonDelete.addEventListener('click', function (e) {

                article.remove();
            })
        }
    )

}
