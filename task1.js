//               1.
addBut = document.querySelector('#addBookmarkBtn')
addInput = document.querySelector('#bookmarkInput')
addList = document.querySelector('#bookmarkList')
urlsJSON = localStorage.getItem('urls')
if(urlsJSON == null){
    localStorage.setItem('urls', JSON.stringify({
        urls:[]
    }))
    
}
function clearList(){
    links = document.querySelectorAll('.renderli')
    for(link of links){
        link.remove()
        console.log(link + 'removed')
    }
}
function render(){
    urlsJSON = JSON.parse(localStorage.getItem('urls')).urls
    console.log(urlsJSON)
    for(item of urlsJSON){
        renderli = document.createElement('li')
        renderli.classList.add('renderli')
        renderLink = document.createElement('a')
        renderLink.textContent = item
        renderLink.href = item
        renderButton = document.createElement('button')
        renderButton.textContent = 'X'
        renderButton.classList.add('delete')
        renderli.append(renderLink)
        renderli.append(renderButton)
        addList.append(renderli)
    }
    deleteButtons = document.querySelectorAll('.delete')
    console.log(deleteButtons)
    for(let item of deleteButtons){
        item.addEventListener('click',function(){
           buttLi = item.parentElement
           textLink = buttLi.children[0].textContent
           console.log(textLink)
           let urlsJSON = JSON.parse(localStorage.getItem('urls'))
           let deleteIndex = urlsJSON.urls.indexOf(textLink)
           console.log(urlsJSON.urls)
           urlsJSON.urls.splice(deleteIndex,1)
           console.log(urlsJSON.urls)
           console.log(urlsJSON)
           localStorage.setItem('urls', JSON.stringify(urlsJSON))
           buttLi.remove()
        })
    }
}
render()
addBut.addEventListener('click', function(){
    urlsJSON = JSON.parse(localStorage.getItem('urls'))
    if(urlsJSON == null){
        localStorage.setItem('urls', JSON.stringify({
            urls:[]
        }))
        
    }
    urlsJSON = JSON.parse(localStorage.getItem('urls'))
    addInputText = addInput.value
    if(addInputText == ''){
        alert('You must write url')
    }
    else{
        urlsJSON.urls.push(addInputText)
        localStorage.setItem('urls', JSON.stringify(urlsJSON))
        console.log(urlsJSON)
        clearList()
        render()
    }
    
})