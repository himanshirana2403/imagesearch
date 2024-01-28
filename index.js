const acke="oKhhoP6VoEKbIaTAU9_orIhsMkWSpC8GQkQbLLIV7_o";

const clic=document.getElementById("click");
const inp=document.getElementById("input");
const m=document.getElementById("more");
const mor=document.getElementById("morre");
clic.addEventListener("click",function(){
    console.log(inp.value);
})

let k="";
let p=1;
async function imagesearch(){
k=inp.value;

const url=`https://api.unsplash.com/search/photos?page=${p}&query=${k}&client_id=${acke}
&per_page=12`;
const res=await fetch(url);
const data=await res.json();
//console.log(data);
  const results=data.results;
 if(p==1)
 {
   m.innerHTML=""; 
 }



  results.map((result)=>{
   const img=document.createElement("img");
   img.src=result.urls.small;
   const imageLink=document.createElement("a");
   imageLink.href=result.links.html;
   imageLink.target="_blank";
   imageLink.appendChild(img);
   m.appendChild(imageLink);
  })

mor.style.display="block";

mor.addEventListener("click",function(){
    p++;
    imagesearch();
})
}
clic.addEventListener("click",function(){
    p=1;
    imagesearch();
})