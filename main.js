const cardData = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music:
         {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 3,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music:
         {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 4,
        user_name: 'User4',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }


]


//<h3 class="card-heading">Card Heading</h3>
//<p class="card-body">This is card Body</p>


const postContainer = document.querySelector(".card-container");

const postMethods = () =>{
    cardData.map((postData) =>{
       const postElement = document.createElement("div");
       postElement.classList.add("card");
       postElement.innerHTML = `
       <h3 class="card-heading">ID: ${postData.id}</h3>
         <h3 class="card-heading">Username: ${postData.user_name}</h3>
       <h3 class="card-heading">Age: ${postData.age}</h3>
       <h3 class="card-heading"> Description: ${postData.description}</h3>
       <h3 class="card-heading">Favorite Music:
       ${postData.fav_music}</h3>
      
       

<p class="card-body">${postData.body}</p>
       `
       postContainer.appendChild(postElement)
    })
}

postMethods();


