const allCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((req) => req.json())
    .then((data) => {
      const datas = data.categories;
      datas.forEach((element) => {
        const allCategories = document.getElementById("all-categories");
        allCategories.innerHTML += `
      <li class="h-[35px] add-hover-effect hover:bg-[#15803d] hover:text-white flex items-center p-2 cursor-pointer rounded-lg">${element.category_name}</li>`;
      });
    });
};

allCategories();

const allPlants = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((req) => req.json())
    .then((data) => {
      console.log(data.plants);
      const plant = data.plants;

      plant.forEach((plants) => {
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

allPlants();

