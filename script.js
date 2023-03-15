const cont = document.querySelector('.cont')
const btn = document.querySelector('.btn')

popbtn = document.querySelector('.popbtn')
clsbtn = document.querySelector('.close')
document.getElementById("myForm").style.display = "none";
let myLibrary = [];

function book(title,author,pages) {
    this.title = title;
    this.author = author;

    this.pages = pages;
  

}
function addBookToLibrary(title,author,pages) {
  let bookobj  = new book(title,author,pages);
  myLibrary.push(bookobj)

  
}


function update() {
    console.log("hh")
    let t = document.getElementById("title")
    let auth = document.getElementById("author")
    let pgs = document.getElementById("pages")
    addBookToLibrary(t.value,auth.value,pgs.value)
    let i = myLibrary.length;
    i = i -1
    let tit = myLibrary[i].title;
    let a = myLibrary[i].author;
    let pg = myLibrary[i].pages;
    let row = document.createElement('tr')
    row.innerHTML = `
            <td>${i+1}</td>
            <td>${tit}</td>
            <td>${a}</td>
            <td>${pg}</td>
            
         
            `
        let delbtn = document.createElement('button')
        delbtn.setAttribute('id','delbtn');
        delbtn.innerText= 'delete'
        
     




        delbtn.classList.add(`${i}`)
        delbtn.addEventListener('click',(e)=> {del(e)})
        row.appendChild(delbtn);
        cont.appendChild(row);
        delbtn  = document.getElementById('delbtn')
       
        

    
    document.getElementById("myForm").style.display = "none";

    
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {

    
    document.getElementById("myForm").style.display = "none";
  }
function del(e) {
    
  
    let n = parseInt(e.target.className);
    
    myLibrary.splice(n, n);
    
    let l = myLibrary.length
    cont.innerHTML = '';

    cont.innerHTML = `    
    <tr>
       <th>SL</th>
       <th> TITLE </th>
       <th> AUTHOR</th>
       <th> PAGES</th>
    </tr>`

    for(let i=0;i<l;i++){
      let tit = myLibrary[i].title;
      let a = myLibrary[i].author;
      let pg = myLibrary[i].pages;
      let row = document.createElement('tr')
      row.innerHTML = `
              <td>${i+1}</td>
              <td>${tit}</td>
              <td>${a}</td>
              <td>${pg}</td>
              
           
              `
          let delbtn = document.createElement('button')
          delbtn.setAttribute('id','delbtn');
          delbtn.innerText= 'delete'

          
  
  
  
  
  
          delbtn.classList.add(`${i}`)
          delbtn.addEventListener('click',(e)=> {del(e)})
          row.appendChild(delbtn);
          cont.appendChild(row);
          delbtn  = document.getElementById('delbtn')

    }
    //cont.removeChild(cont.childNodes[n+2])

}  

popbtn.addEventListener('click',openForm)
btn.addEventListener('click',(e) => { e.preventDefault(); update()})
clsbtn.addEventListener('click',(e) => { e.preventDefault(); closeForm()})

