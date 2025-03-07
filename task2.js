//               1.
addBut = document.querySelector('#addBookmarkBtn')
addInput = document.querySelector('#bookmarkInput')
addInput2 = document.querySelector('#bookmarkInput2')
addList = document.querySelector('#bookmarkList')
databaseJSON = localStorage.getItem('database')
if(databaseJSON == null){
    localStorage.setItem('database', JSON.stringify({
        database:[]
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
    databaseJSON = JSON.parse(localStorage.getItem('database')).database
    console.log(databaseJSON)
    for(item of databaseJSON){
        renderli = document.createElement('li')
        renderli.classList.add('renderli')
        renderLink = document.createElement('h2')
        renderLink.textContent = 'Name: ' +  item[0]
        renderLink2 = document.createElement('h2')
        renderLink2.textContent = 'Password: ' + item[1]
        renderButton = document.createElement('button')
        renderButton.textContent = 'X'
        renderButton.classList.add('delete')
        renderli.append(renderLink)
        renderli.append(renderLink2)
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
           let databaseJSON = JSON.parse(localStorage.getItem('database'))
           let deleteIndex = databaseJSON.database.indexOf(textLink)
           console.log(databaseJSON.database)
           databaseJSON.database.splice(deleteIndex,1)
           console.log(databaseJSON.database)
           console.log(databaseJSON)
           localStorage.setItem('database', JSON.stringify(databaseJSON))
           buttLi.remove()
        })
    }
}
render()
addBut.addEventListener('click', function(){
    databaseJSON = JSON.parse(localStorage.getItem('database'))
    if(databaseJSON == null){
        localStorage.setItem('database', JSON.stringify({
            database:[]
        }))
        
    }
    databaseJSON = JSON.parse(localStorage.getItem('database'))
    addInputText = addInput.value
    addInput2Text = addInput2.value
    if(addInputText == '' || addInput2Text == ''){
        alert('You must write text')
    }
    else{
        databaseJSON.database.push([addInputText,addInput2Text])
        localStorage.setItem('database', JSON.stringify(databaseJSON))
        console.log(databaseJSON)
        clearList()
        render()
    }
    
})