const loadData = () => {
    fetch("https://openapi.programming-hero.com/api/plants")//promise of response
        .then((res) => res.json())//promise of json data
        .then((json) => displayPlants(json.plants));
        // .then((json) => console.log(json.plants));
};



const displayPlants=(plants)=>{
    //   console.log(plants);
    const midContainer=document.getElementById("mid-container");
    
    for(let plant of plants){
        // console.log(plant.id);
        const card=document.createElement("div");
        card.innerHTML=`
        
            <div class="w-[300px] h-[] bg-white p-4 mb-4 rounded-lg">
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

loadData();