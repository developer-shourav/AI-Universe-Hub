
  const loadAiCards = async(cardsLimited = false ) => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    toggleLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    displayAiCards(data.data.tools, cardsLimited);
  };

  const displayAiCards = (cardsData , isCardsShowingLimited) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = " ";

    /* ---------Sort by Date Button showing condition---------- */
    const sortByDateBtn = document.getElementById('sort-btn');
    if(cardsData.length >= 1){
        sortByDateBtn.classList.remove('d-none');
    }
    else{
        sortByDateBtn.classList.add('d-none')
    }

    /* --------- Cards data limit and See more button condition---------- */
    const seeMoreBtn = document.getElementById('see-more-btn');
    let allCarsData = cardsData;
    if( isCardsShowingLimited !== true){
         allCarsData = cardsData.slice(0, 6);
         seeMoreBtn.classList.remove('d-none');

    }
    else{
         allCarsData = cardsData;
         seeMoreBtn.classList.add('d-none');
    }
    allCarsData.forEach( cardData => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card p-3 pb-0 h-100">
        <img src="${cardData.image ? cardData.image : "Image Not found" }" class="card-img-top h-75 rounded-3" alt="...">
        <div class=" py-4">
          <h5 class="card-title fw-bold">Features</h5>
          <ol class="ms-0 ps-3 pb-2 fw-semibold text-dark-emphasis">
          <li>${cardData.features[0] ? cardData.features[0] : "<span class='text-warning-emphasis'>Feature not found</span> "}</li>
          <li>${cardData.features[1] ? cardData.features[1] : "<span class='text-warning-emphasis'>Feature not found</span> "}</li>
          <li>${cardData.features[2] ? cardData.features[2] : "<span class='text-warning-emphasis fw-bold'>Feature not found</span> "}</li>
          </ol>
          <hr>
          <div class="d-flex align-items-center justify-content-between">
          <div class="">
              <h5 class="text-dark fw-bold">${cardData.name}</h5>
              <p class="fw-bold text-dark-emphasis"><i class="bi bi-calendar3"></i> ${cardData.published_in}</p>
          </div>

          <div class="">
              <button title="Show details" onclick="loadDetails('${cardData.id}')" class="btn  text-danger fs-4 rounded" data-bs-toggle="modal" data-bs-target="#detailsModal"><i class="bi bi-arrow-right"></i></button>
          </div>
      </div>
        </div>
      </div>
        `;

        cardContainer.appendChild(cardDiv);

        /* =======Stop Spinner========== */
        toggleLoading(false)

    })
  };

/* ========== Load AI Card details in Modal =========== */
  const loadDetails = async (id) => {
    const detailsUrl = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(detailsUrl);
    const data = await res.json();
    displayDetails(data.data);
  }

/* ========== Display AI Card details in Modal =========== */
  const displayDetails = details => {
        console.log(details);
    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerText = `${details?.description}`;
    const detailsModalImg = document.getElementById('modal-img');
    detailsModalImg.setAttribute('src', `${details?.image_link[0]}`);

   /* ========= AI input and Output ======== */
    const aiInput = document.getElementById('ai-input');
    const aiOutput = document.getElementById('ai-output');
    aiInput.innerText = `${details.input_output_examples[0].input ? details.input_output_examples[0].input : 'Can you give any example?'}`; 
    aiOutput.innerText = `${details.input_output_examples[0].output ? details.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}`; 

    /* ========= Pricing ======== */
    const basicPlanPrice = document.getElementById('basic-price');
    const proPlanPrice = document.getElementById('pro-price');
    const enterprisePlanPrice = document.getElementById('enterprise-price');

    basicPlanPrice.innerHTML = `${details.pricing[0].price === 'No cost'  ? 'Free Of<br> Cost/' : details.pricing[0].price}`;
    proPlanPrice.innerHTML = `${details.pricing[1].price === 'No cost'  ? 'Free Of<br> Cost/' : details.pricing[1].price}`;
    enterprisePlanPrice.innerText = `${details.pricing[2].price.slice(0, 10) ? details.pricing[2].price.slice(0, 10) : 'Free Of Cost/' }`;

     /* ========= Feature ======== */
     const firstFeature = document.getElementById('first-feature');
     const secondFeature = document.getElementById('second-feature');
     const thirdFeature = document.getElementById('third-feature');

     firstFeature.innerText = `${details?.features['1']?.feature_name}`;
     secondFeature.innerText = `${details?.features['2']?.feature_name}`;
     thirdFeature.innerText = `${details?.features['3']?.feature_name}`;

   /* ========= Integrations ======== */
   console.log(details.integrations.length);

  }

 /* ===== Spinner Loading Function ===== */
 const toggleLoading = isLoading => {
    const spinner = document.getElementById('spinner');
    if(isLoading){
        spinner.classList.remove('d-none');
    }
    else{
        spinner.classList.add('d-none')
    }
 };

 /* ===== Spinner Loading Function ===== */
  const showAllCards = value => {
    loadAiCards(value);
  }

  /* Initially Function Calling */
  loadAiCards()



