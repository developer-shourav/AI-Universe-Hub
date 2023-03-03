

var url = `https://openapi.programming-hero.com/api/ai/tools`;



var allData = {
    "status": true,
    "data": {
      "tools": [
        {
          "id": "01",
          "name": "ChatGPT",
          "description": "ChatGPT is a large language model developed by OpenAI that can generate human-like responses in a conversation.",
          "image": "https://img.olhardigital.com.br/wp-content/uploads/2023/01/chatgpt_assistente.jpg",
          "published_in": "11/1/2022",
          "features": [
            "Natural language processing",
            "Contextual understanding",
            "Text generation"
          ],
          "links": [
            {
              "name": "Homepage",
              "url": "https://openai.com/chat-gpt/"
            },
            {
              "name": "GitHub",
              "url": "https://github.com/openai/gpt-2"
            }
          ]
        },
        {
          "id": "02",
          "name": "YouChat 2.0",
          "description": null,
          "image": "https://i.ytimg.com/vi/_LZzfpjepoY/maxresdefault.jpg",
          "published_in": "12/1/2022",
          "features": [
            "Contextual understanding",
            "Multi-platform support",
            "Voice recognition"
          ],
          "links": [
            {
              "name": null,
              "url": null
            }
          ]
        },
        {
          "id": "03",
          "name": "Google Bard",
          "description": "Bard is an alternative developed by Google.",
          "image": "https://i.blogs.es/7b41f4/google-bard/1366_2000.jpeg",
          "published_in": "2/1/2023",
          "features": [
            "Machine learning",
            "Deep learning",
            "Neural networks"
          ],
          "links": [
            {
              "name": "Homepage",
              "url": "https://www.tensorflow.org/"
            },
            {
              "name": "GitHub",
              "url": "https://github.com/tensorflow/tensorflow"
            }
          ]
        },
        {
          "id": "04",
          "name": "Microsoft Bing",
          "description": null,
          "image": "https://s3.amazonaws.com/images.seroundtable.com/bing-indexing-issues-1603799404.jpg",
          "published_in": "6/1/2009",
          "features": [
            "Instant answers",
            "Video search"
          ],
          "links": [
            {
              "name": null,
              "url": null
            }
          ]
        },
        {
          "id": "05",
          "name": "Chatsonic",
          "description": null,
          "image": "https://startupstash.com/wp-content/uploads/2022/12/1671615999_chatsonic_cover_thumbnail.png",
          "published_in": "12/1/2021",
          "features": [
            "Customer Support",
            "Lead Generation",
            "Personal Assistant"
          ],
          "links": [
            {
              "name": null,
              "url": null
            }
          ]
        },
        {
          "id": "06",
          "name": "Jasper Chat",
          "description": "Jasper Chat is an open-source chatbot platform.",
          "image": "https://www.proremodeler.com/sites/proremodeler/files/Jasper%20copy.jpg",
          "published_in": "12/1/2022",
          "features": [
            "Chatbot development",
            "Integration with messaging platforms",
            "Natural language processing"
          ],
          "links": [
            {
              "name": "Homepage",
              "url": "https://jasperproject.github.io/"
            },
            {
              "name": "GitHub",
              "url": "https://github.com/jasperproject/jasper-client"
            }
          ]
        },
        {
          "id": "07",
          "name": "Character AI",
          "description": "Character AI is a content generation platform that uses AI.",
          "image": "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2023/01/maxresdefault.jpg",
          "published_in": "9/1/2021",
          "features": [
            "Content generation",
            "Copywriting",
            "Natural language processing"
          ],
          "links": [
            {
              "name": "Homepage",
              "url": "https://www.characte.ai/"
            },
            {
              "name": "GitHub",
              "url": null
            }
          ]
        },
        {
          "id": "08",
          "name": "DialoGPT",
          "description": "DialoGPT is an AI language model developed by Microsoft that can engage in a conversation with a human.",
          "image": "https://huggingface.co/front/thumbnails/dialogpt.png",
          "published_in": "3/1/2021",
          "features": [
            "Conversational AI",
            "Contextual understanding",
            "Text generation"
          ],
          "links": [
            {
              "name": "Homepage",
              "url": "https://huggingface.co/microsoft/DialoGPT-medium"
            },
            {
              "name": "GitHub",
              "url": "https://github.com/microsoft/DialoGPT"
            }
          ]
        },
        {
          "id": "09",
          "name": "Rytr",
          "description": "Rytr is an AI content generation platform that can help users with copywriting and content marketing.",
          "image": "https://bochickenstore.com/storage/large/ban-tai-khoan-rytr-g_1652155324.png",
          "published_in": "4/1/2022",
          "features": [
            "Content generation",
            "Copywriting",
            "Natural language processing"
          ],
          "links": [
            {
              "name": "Homepage",
              "url": "https://rytr.me/"
            },
            {
              "name": "GitHub",
              "url": null
            }
          ]
        },
        {
          "id": "10",
          "name": "GitHub Copilot",
          "description": "Copilot is an AI-powered code completion tool developed by OpenAI and GitHub.",
          "image": "https://github.githubassets.com/images/modules/site/social-cards/copilot-ga.png",
          "published_in": "7/1/2022",
          "features": [
            "Code completion",
            "Natural language processing",
            "API integration"
          ],
          "links": [
            {
              "name": "Homepage",
              "url": "https://copilot.github.com/"
            },
            {
              "name": "GitHub",
              "url": "https://github.com/github/copilot"
            }
          ]
        },
        {
          "id": "11",
          "name": "Replika",
          "description": "Replika is an AI-powered chatbot that uses machine learning algorithms to simulate human conversation.",
          "image": "https://cdn2.lamag.com/wp-content/uploads/sites/6/2023/01/replika2-ai.jpg",
          "published_in": "3/1/2018",
          "features": [
            "AI-powered chatbot",
            "Machine learning algorithms",
            "Simulates human conversation"
          ],
          "links": [
            {
              "name": "Homepage",
              "url": "https://replika.ai/"
            },
            {
              "name": "Blog",
              "url": "https://medium.com/replika"
            },
            {
              "name": "Twitter",
              "url": "https://twitter.com/replikaai"
            }
          ]
        },
        {
          "id": "12",
          "name": "Facebook AI",
          "description": "Facebook AI is a collection of tools and technologies developed by Facebook to advance the field of artificial intelligence.",
          "image": "https://itchronicles.com/wp-content/uploads/2020/09/How-Facebook-uses-Artificial-intelligence-1024x576.jpg",
          "published_in": "10/1/2022",
          "features": [
            "Computer vision",
            "Natural language processing",
            "Deep learning",
            "Machine learning"
          ],
          "links": [
            {
              "name": "Homepage",
              "url": "https://ai.facebook.com/"
            },
            {
              "name": "GitHub",
              "url": "https://github.com/facebookresearch"
            },
            {
              "name": "Research papers",
              "url": "https://research.fb.com/publications/"
            }
          ]
        }
      ]
    }
  };

  var detailData = {
    "status": true,
    "data": {
      "id": "01",
      "tool_name": "ChatGPT",
      "description": "ChatGPT is an AI-powered chatbot platform that uses OpenAI's GPT technology to simulate human conversation.",
      "website": "https://openai.com/",
      "logo": "https://cdn.openai.com/research-covers/gpt-3-social.jpg",
      "image_link": [
        "https://www.datanami.com/wp-content/uploads/2023/01/chat_gpt_shutterstock_Ebru-Omer.jpg",
        "https://img.olhardigital.com.br/wp-content/uploads/2023/01/chatgpt_assistente.jpg"
      ],
      "input_output_examples": [
        {
          "input": "Hi, how are you doing today?",
          "output": "I'm doing well, thank you for asking. How can I assist you today?"
        },
        {
          "input": "Can you tell me a joke?",
          "output": "Sure! Why did the tomato turn red? Because it saw the salad dressing!"
        }
      ],
      "features": {
        "1": {
          "feature_name": "Customizable responses",
          "description": "ChatGPT can be fine-tuned to produce custom responses based on specific contexts and inputs."
        },
        "2": {
          "feature_name": "Multilingual support",
          "description": "ChatGPT can handle multiple languages, making it suitable for global use."
        },
        "3": {
          "feature_name": "Seamless integration",
          "description": "ChatGPT can easily be integrated with other platforms and tools through APIs."
        }
      },
      "integrations": [
        "Facebook Messenger",
        "Slack",
        "Telegram"
      ],
      "use_cases": [
        {
          "name": "Customer Service",
          "description": "ChatGPT can be used to provide 24/7 customer service and support, answering common questions and resolving issues in a timely manner."
        },
        {
          "name": "Personal Assistant",
          "description": "ChatGPT can be used as a personal assistant, helping users manage their daily tasks and schedule."
        },
        {
          "name": "E-Commerce",
          "description": "ChatGPT can be used in e-commerce to provide personalized product recommendations, answer questions about products, and process orders."
        }
      ],
      "pricing": [
        {
          "plan": "Basic",
          "price": "$10/month"
        },
        {
          "plan": "Pro",
          "price": "$50/month"
        },
        {
          "plan": "Enterprise",
          "price": "Contact us for pricing"
        }
      ],
      "accuracy": {
        "score": 0.94,
        "description": "High accuracy for most natural language processing tasks."
      }
    }
  };


  const loadAiCards = async(cardsLimited = false ) => {
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
          <li>${cardData.features[0] ? cardData.features[0] : "Feature not found "}</li>
          <li>${cardData.features[1] ? cardData.features[1] : "Feature not found "}</li>
          <li>${cardData.features[2] ? cardData.features[2] : "Feature not found "}</li>
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
    const aiInput = document.getElementById('ai-input');
    aiInput.innerText = `${details.input_output_examples[0].input ? details.input_output_examples[0].input : 'Can you give any example?'}`; 

    const aiOutput = document.getElementById('ai-output');
    aiOutput.innerText = `${details.input_output_examples[0].output ? details.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}`; 


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



