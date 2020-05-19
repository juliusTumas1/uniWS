# uni_rest-api
##---------------------------
Mano serviso komandos:

GET: {  
    localhost:3000/api/users,  
    localhost:3000/api/users/:id  
},  
POST: {  
    localhost:3000/api/users  
    Body:
    {{"id": 4, "first_name": "Juozukas", "balance": 3}}
        {
        "id": "5",
        "first_name": "Testukas",
        "balance": 1,
        "items": []
    }
}  
PATCH: {  
    localhost:3000/api/users/:id  
},  
PUT: {  
    localhost:3000/api/users/:id
    body:
        {
        "id": "5",
        "first_name": "Testukas",
        "balance": 1,
        "items": []
    }  
}  
DELETE: {  
    localhost:3000/api/users/:id  
}  
##---------------------------
Komunikacija su kitu servisu:

Prekiu islistinimas:
GET localhost:3000/communicate/items

Prekes pirkimas
POST localhost:3000/communicate/item
Body: 
{
  "userId": number,
  "itemId": number
}

##---------------------------

## commands to start the rest-api: 
docker-compose up -d
