$btnPlus =document.querySelector('.btn-plus-list')
$btnPlus.addEventListener('click',()=>{
    $listItem = document.querySelector('.list-item')
    const li =document.createElement('li')
    const img01 = document.createElement('img')
    img01.setAttribute('src', 'images/circlebox.png')
    img01.classList.add("check-box")
    const p = document.createElement('p')
    const img02 = document.createElement('img')
    
    $listItem.appendChild(li).append(img01,p,img02)
    
    
})