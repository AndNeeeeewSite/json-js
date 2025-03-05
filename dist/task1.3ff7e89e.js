//               1.
addBut = document.querySelector('#addBookmarkBtn');
addInput = document.querySelector('#bookmarkInput');
addList = document.querySelector('#bookmarkList');
urlsJSON = localStorage.getItem('urls');
if (urlsJSON == null) localStorage.setItem('urls', JSON.stringify({
    urls: []
}));
function clearList() {
    links = document.querySelectorAll('.renderli');
    for (link of links){
        link.remove();
        console.log(link + 'removed');
    }
}
function render() {
    urlsJSON = JSON.parse(localStorage.getItem('urls')).urls;
    console.log(urlsJSON);
    for (item of urlsJSON){
        renderli = document.createElement('li');
        renderli.classList.add('renderli');
        renderLink = document.createElement('a');
        renderLink.textContent = item;
        renderLink.href = item;
        renderButton = document.createElement('button');
        renderButton.textContent = 'X';
        renderButton.classList.add('delete');
        renderli.append(renderLink);
        renderli.append(renderButton);
        addList.append(renderli);
    }
    deleteButtons = document.querySelectorAll('.delete');
    console.log(deleteButtons);
    for (let item1 of deleteButtons)item1.addEventListener('click', function() {
        buttLi = item1.parentElement;
        textLink = buttLi.children[0].textContent;
        console.log(textLink);
        let urlsJSON1 = JSON.parse(localStorage.getItem('urls'));
        let deleteIndex = urlsJSON1.urls.indexOf(textLink);
        console.log(urlsJSON1.urls);
        urlsJSON1.urls.splice(deleteIndex, 1);
        console.log(urlsJSON1.urls);
        console.log(urlsJSON1);
        localStorage.setItem('urls', JSON.stringify(urlsJSON1));
        buttLi.remove();
    });
}
render();
addBut.addEventListener('click', function() {
    urlsJSON = JSON.parse(localStorage.getItem('urls'));
    if (urlsJSON == null) localStorage.setItem('urls', JSON.stringify({
        urls: []
    }));
    urlsJSON = JSON.parse(localStorage.getItem('urls'));
    addInputText = addInput.value;
    if (addInputText == '') alert('You must write url');
    else {
        urlsJSON.urls.push(addInputText);
        localStorage.setItem('urls', JSON.stringify(urlsJSON));
        console.log(urlsJSON);
        clearList();
        render();
    }
}) //                  2.
;

//# sourceMappingURL=task1.3ff7e89e.js.map
