const allCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((req) => req.json())
    .then((data) => {
      const datas = data.categories;
      datas.forEach((element) => {
        const allCategories = document.getElementById("all-categories");
        allCategories.innerHTML += `
      <li id="${element.id}" class="h-[35px] add-hover-effect hover:bg-[#15803d] hover:text-white flex items-center p-2 cursor-pointer rounded-lg">${element.category_name}</li>`;
      });
    });
};

allCategories();

const loadModal = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const detalies = await res.json();
  displayModal(detalies.plants);
};

const displayModal = (plant) => {
  console.log(plant);
  const detailesContainer = document.getElementById("detailes-container");
  detailesContainer.innerHTML = `
         <h3 class="text-lg font-bold">${plant.name}</h3>
                  <div>
                    <img
                      class="rounded-lg w-full h-[220px]"
                      src="${plant.image}"
                    />
                  </div>
                  <h1><span class="font-bold">Category:</span> <span>${plant.category}</span></h1>
                  <p><span class="font-bold">Price:</span> <span>$${plant.price}</span></p>
                  <p><span class="font-bold">Description:</span> <span>${plant.description}</span></p>
                  <div class="modal-action">
                    <form method="dialog">
                      <!-- if there is a button in form, it will close the modal -->
                      <button class="btn">Close</button>
                    </form>
                  </div>`;
  document.getElementById("my_modal_5").showModal();
};

const allPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((req) => req.json())
    .then((data) => {
      const plant = data.plants;

      plant.forEach((plants) => {
        // console.log(plants)

        const allPlants = document.getElementById("all-plants");

        allPlants.innerHTML += `
        <div class="card bg-base-100 w-[310px] shadow-sm p-[10px] justify-between max-md:w-full">
                <figure>
                  <img
                    class="rounded-lg h-[170px] bg-cover w-full"
                    src="${plants.image}"
                  />
                </figure>
                <div class="space-y-3">
                  <h2 class="card-title mt-[15px] plant cursor-pointer" onclick="loadModal(${plants.id})">
                  
                    ${plants.name}
                  </h2>
                  <p>
                    ${plants.description}
                  </p>
                  <div class="card-actions justify-between">
                    <div
                      class="flex justify-center items-center bg-[#dcfce7] p-3 rounded-xl h-[28px] text-[#15803d]"
                    >
                      ${plants.category}
                    </div>
                    <div class="">$${plants.price}</div>
                  </div>
                  <div>
                    <button
                      class="btn w-full rounded-3xl bg-[#15803d] text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>`;
        // console.log(plants)
      });
    });
};

allPlants();

// document.getElementById("main-card-container").addEventListener('click' , (e) => {

//   if(e.target.localName === "h2"){
//     console.log(e.target)

//     my_modal_5.showModal();
//   }
// })

document.getElementById("all-categories").addEventListener("click", (e) => {
  const allLi = document.querySelectorAll("li");
  allLi.forEach((li) => {
    li.classList.remove("bg-[#15803d]");
    li.classList.remove("text-white");
  });
  if (e.target.localName === "li") {
    loadByCatagory(e.target.id);
    e.target.classList.add("bg-[#15803d]");
    e.target.classList.add("text-white");
    const allPlants = document.getElementById("all-plants");
    allPlants.innerHTML = "";
  }
});

const loadByCatagory = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((req) => req.json())
    .then((data) => {
      const plant = data.plants;

      plant.forEach((plants) => {
        // console.log(.name)
        const allPlants = document.getElementById("all-plants");

        console.log(plants);
        allPlants.innerHTML += `
        <div class="card bg-base-100 w-[310px] shadow-sm p-[10px] justify-between max-md:w-full">
                <figure>
                  <img
                    class="rounded-lg h-[170px] bg-cover w-full"
                    src="${plants.image}"
                  />
                </figure>
                <div class="space-y-3">
                  <h2 class="card-title mt-[15px]">
                    ${plants.name}
                  </h2>
                  <p>
                    ${plants.description}
                  </p>
                  <div class="card-actions justify-between">
                    <div
                      class="flex justify-center items-center bg-[#dcfce7] p-3 rounded-xl h-[28px] text-[#15803d]"
                    >
                      ${plants.category}
                    </div>
                    <div class="">$${plants.price}</div>
                  </div>
                  <div>
                    <button
                      class="btn w-full rounded-3xl bg-[#15803d] text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>`;
      });
    });
};

// loadByCatagory();
