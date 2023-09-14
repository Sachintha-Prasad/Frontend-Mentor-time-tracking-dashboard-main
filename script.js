const mainGrid = document.querySelector(".main-grid-container");
const card = document.querySelectorAll(".card");
const cardTitle = document.querySelectorAll(".card-title");
const cardContent = document.querySelectorAll(".card-content");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

const colors = [
    "hsl(15, 100%, 70%)",
    "hsl(195, 74%, 62%)",
    "hsl(348, 100%, 68%)",
    "hsl(145, 58%, 55%)",
    "hsl(264, 64%, 52%)",
    "hsl(43, 84%, 65%)"
];

const cardIcon = [
    "../images/icon-work.svg",
    "../images/icon-play.svg",
    "../images/icon-study.svg",
    "../images/icon-exercise.svg",
    "../images/icon-social.svg",
    "../images/icon-self-care.svg"
];

const itemArray = Object.values(card);

for (let i = 0; i < itemArray.length; i++) {
    itemArray[i].style.background = `url('${cardIcon[i]}'), ${colors[i]}`;
    itemArray[i].style.backgroundRepeat = `no-repeat`;
    itemArray[i].style.backgroundSize = `3.6rem`;
    itemArray[i].style.backgroundPosition = `top -0.4rem right 0.8rem`;
}

fetch("data.json")
    .then((response) => response.json())
    .then((result) => {
        const resultArray = Object.values(result);
        const cardArray = Object.values(card);

        for (let i = 0; i < cardArray.length; i++) {
            cardArray[i].innerHTML = `
                <div
                    class="card-content flex flex-col items-start bg-dark-blue z-10 rounded-xl sm:h-full mt-12 p-6 hover:bg-Blue cursor-pointer duration-300">
                    <div class="w-full flex items-center justify-between mb-3 sm:mb-8">
                        <div class="card-title text-lg text-white">${resultArray[i].title}</div>
                        <div class="cursor-pointer group hover:scale-125">
                            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                                fill="#BBC0FF" fill-rule="evenodd" class="group-hover:fill-white duration-300" />
                            </svg>
                        </div>
                    </div>
        
                    <div class="w-full flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:gap-2">
                        <h2 class="hours text-4xl sm:text-5xl font-light text-white">${resultArray[i].timeframes.weekly.current}hrs</h2>
                        <p class="text-sm">Last <span>Week</span> - ${resultArray[i].timeframes.weekly.previous}hrs</p>
                    </div>
                </div>`;

            daily.addEventListener("click", () => {
                daily.classList.add("active");
                weekly.classList.remove("active");
                monthly.classList.remove("active");

                cardArray[i].innerHTML = `
                <div
                    class="card-content flex flex-col items-start bg-dark-blue z-10 rounded-xl sm:h-full mt-12 p-6 hover:bg-Blue cursor-pointer duration-300">
                    <div class="w-full flex items-center justify-between mb-3 sm:mb-8">
                        <div class="card-title text-lg text-white">${resultArray[i].title}</div>
                        <div class="cursor-pointer group hover:scale-125">
                            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                                fill="#BBC0FF" fill-rule="evenodd" class="group-hover:fill-white duration-300" />
                            </svg>
                        </div>
                    </div>
        
                    <div class="w-full flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:gap-2">
                        <h2 class="hours text-4xl sm:text-5xl font-light text-white">${resultArray[i].timeframes.daily.current}hrs</h2>
                        <p class="text-sm">Last <span>Day</span> - ${resultArray[i].timeframes.daily.previous}hrs</p>
                    </div>
                </div>`;
            });

            weekly.addEventListener("click", () => {
                daily.classList.remove("active");
                weekly.classList.add("active");
                monthly.classList.remove("active");

                cardArray[i].innerHTML = `
                <div
                    class="card-content flex flex-col items-start bg-dark-blue z-10 rounded-xl sm:h-full mt-12 p-6 hover:bg-Blue cursor-pointer duration-300">
                    <div class="w-full flex items-center justify-between mb-3 sm:mb-8">
                        <div class="card-title text-lg text-white">${resultArray[i].title}</div>
                        <div class="cursor-pointer group hover:scale-125">
                            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                                fill="#BBC0FF" fill-rule="evenodd" class="group-hover:fill-white duration-300" />
                            </svg>
                        </div>
                    </div>
        
                    <div class="w-full flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:gap-2">
                        <h2 class="hours text-4xl sm:text-5xl font-light text-white">${resultArray[i].timeframes.weekly.current}hrs</h2>
                        <p class="text-sm">Last <span>Week</span> - ${resultArray[i].timeframes.weekly.previous}hrs</p>
                    </div>
                </div>`;
            });

            monthly.addEventListener("click", () => {
                daily.classList.remove("active");
                weekly.classList.remove("active");
                monthly.classList.add("active");

                cardArray[i].innerHTML = `
                <div
                    class="card-content flex flex-col items-start bg-dark-blue z-10 rounded-xl sm:h-full mt-12 p-6 hover:bg-Blue cursor-pointer duration-300">
                    <div class="w-full flex items-center justify-between mb-3 sm:mb-8">
                        <div class="card-title text-lg text-white">${resultArray[i].title}</div>
                        <div class="cursor-pointer group hover:scale-125">
                            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                                fill="#BBC0FF" fill-rule="evenodd" class="group-hover:fill-white duration-300" />
                            </svg>
                        </div>
                    </div>
        
                    <div class="w-full flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:gap-2">
                        <h2 class="hours text-4xl sm:text-5xl font-light text-white">${resultArray[i].timeframes.monthly.current}hrs</h2>
                        <p class="text-sm">Last <span>Month</span> - ${resultArray[i].timeframes.monthly.previous}hrs</p>
                    </div>
                </div>`;
            });
        }
    });
