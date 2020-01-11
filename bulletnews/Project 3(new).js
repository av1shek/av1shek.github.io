console.log('Now you are online');
let searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', search);
let apiKey = '562614f7a17e47968fb80c11627064b8';
let homeBtn = document.getElementById('home');
let category = '';
getdata();
homeBtn.addEventListener('click',home);

let newsObj= {};
function getdata(){
    let url = `https://newsapi.org/v2/top-headlines?country=in${category}&apiKey=${apiKey}`;
    let req = new Request(url);
    fetch(url).then((response)=>{
       // console.log(response,typeof response);
      return response.text();
    }).then((data)=>{
 // console.log('inside second then')
   //   console.log(typeof data ,data);
      newsObj = JSON.parse(data);

      let list = document.getElementById('list');
      list.innerHTML = ` <div align="center"><center><div id="heading"><h2 align="center" >Today's Headlines</h2></div></center>
      </div>
      `;
      newsObj.articles.forEach(function(element){
         // console.log('checking',element.title,element.url);
     list.innerHTML += `
     <div class="common row">
     <div class="frame"><img src='${element.urlToImage}'></div>
         ${element.title} <a href="${element.url}">Read More</a>
     </div>`;
      })

    })
  }
  
  
  function search() {
      console.log('inside search');
    let row = document.getElementsByClassName('common');
// console.log('row',row)
    let searchVal = searchBox.value;
    Array.from(row).forEach(function (element) {
       
        let cardtxt = element.innerText;
    //    console.log(cardtxt);
        // console.log(cardtxt.innerHTML)
        
        if (cardtxt.includes(searchVal)) {
            // element.style.display = "table";
            element.className = 'common row';
        }
        else {
            element.className = 'common rowhide';
        }
    })

}


function newscategory(string){
    category = `&category=${string}`;
    getdata();
}
function home(){
    console.log('clicked on home');
    category = '';
    getdata();
}
