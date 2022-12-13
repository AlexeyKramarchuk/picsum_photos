let page=1;


async function getPhotos(){
    const response=await fetch('https://picsum.photos/v2/list?page=1&limit=12')
    const data=await response.json()
    return data
}
getPhotos().then(data=>{
    const wrapper=document.querySelector(".wrapper")
    data.forEach(el=>{
        const div=document.createElement('div')
        div.style.width="150px"
        div.style.height="150px"
const img = document.createElement('img')
img.src=el.download_url
div.appendChild(img)
wrapper.appendChild(div)
})
})

const btn

// przyciski na dole strony w prawo w lewo

// przycisk w prawo dodaje +1 do page i wywołuje getPhotos jeszcze raze

// w lewo tak samo tylko -1



// generator formularzy
const form=[
    {name: 'test', label: 'l1', type:'text'},
    {name: 'age', label: 'l2', type:'number'}
]