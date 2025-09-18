const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/categories")//promise of response
        .then((res) => res.json())//promise of json data
        .then((json) => displayLessons(json.categories));
        // .then((json) => console.log(json.categories));
};

const displayLessons = (lessons) => {
    //   console.log(lessons);
    // 1.
    const leftContainer=document.getElementById("left-container");
    // leftContainer.innerHTML="";
    // 2.
    for(let lesson of lessons)
    {
        // console.log(lesson);
        // 3.
        const btnDiv=document.createElement("li");
        btnDiv.innerHTML=`
        
        <button id="${lesson.id}" class="p-2 hover:bg-[#15803D] mt-1 rounded-[8px] pr-4">${lesson.category_name}</button>
        
        `;
        leftContainer.append(btnDiv);
    }
    leftContainer.addEventListener("click", function(e){
        const allButton=this.querySelectorAll('button');
                for(let button of allButton)
                {
                    button.classList.remove('bg-[#15803D]');
                }
        if(e.target.localName === 'button')
            { 
                // console.log(e.target.id)
                e.target.classList.add('bg-[#15803D]');
                loadPlantsByCategory(e.target.id)
            } 
        // console.log(e)  
    })
};
const loadPlantsByCategory=(plantsId)=>{
    // console.log(plantsId);
    fetch(`https://openapi.programming-hero.com/api/category/${plantsId}`)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data.plants)
        displayPlantByCategory(data.plants)
    })
    .catch(err=>{
        console.log(err);
    })
}
const displayPlantByCategory=(plants)=>{
     const midContainer=document.getElementById("mid-container");
     midContainer.innerHTML="";
    for(let plant of plants)
    {   console.log(plant.id)
        const card=document.createElement("div");
        card.innerHTML=`
    
            <div class="w-[300px] h-[] bg-slate-200 p-4 mb-4 rounded-lg">
                 <div class="w-[270px] h-[179px] bg-white rounded-lg mb-[8px]">
                       <img class="w-[270px] h-[179px] rounded-lg" src="${plant.image}" alt="">
                 </div>
                 <h2 class="font-semibold text-[16px] mb-[6px]">${plant.name}</h2>
                 <p class="text-[12px] text-[#1F2937] mb-[4px]">${plant.description}</p>
                 <div class="flex justify-between mb-2">
                    <a class="btn bg-[#DCFCE7] border-none shadow-none rounded-3xl text-[#15803D] pl-6 pr-6">${plant.category}</a>
                    <p>$<span>${plant.price}</span> </p>
                 </div>
                 <a class="add-btn btn bg-[#15803D] border-none shadow-none rounded-3xl text-white pl-24 pr-24">Add to Cart</a>
            </div>
        
        `;
        midContainer.append(card);
        
    }
}
loadLessons();

// cart close 
const cartClose=document.querySelector(".cart-close");
const cartDiv=document.getElementById("cart-div");
cartClose.addEventListener("click", function(e){
   e.preventDefault();
   console.log("Cart close clicked");
   cartDiv.classList.add("none")
})