# Indian Restuarant

A hackathon from Friday 9th September that I have continued to work on and improve.

## The brief

Pages:  
- Home page 
- Food selection (List of foods, Food modal or page (about said food), User should have at least two items to proceed to checkout)
- Food checkout/Basket
Responsive:  
At least - 2 low fidelity Wireframes.  
Use any program you wish  
Some form of testing  
Use spoonacular API: https://spoonacular.com/food-api

## The process  
**API:**   
I used Postman to get Indian recipes with this request: https://api.spoonacular.com/recipes/complexSearch?cuisine=Indian
however, I knew I was going to need to use the recipe ID from each of these to then send another fetch request to 'get recipe information' https://api.spoonacular.com/recipes/{id}/information which adds up to a lot of API requests and would max out the daily free limit. So I set the number to 25, copied the data from Postman and hardcoded this into a local JSON file. I then retrieved the ID numbers and ran the following get request in postman: https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429 and hardcoded these into another local JSON file.
  
**Design:**  
I was really keen to try out Tailwind CSS, so used this as an opportunity to do so.  
I'm amazed at the responsive the components are!



### 👉 [Click here for live demo](https://indian-restuarant.netlify.app/)

### To install dependencies:

`npm i`

### To start the project:

`npm start`
