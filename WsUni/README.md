# uni_rest-api
## ---------------------------
## Mano serviso komandos:

GET: {  
    localhost/api/users,  
    localhost/api/users/:id  
},  
POST: {  
    localhost/api/users  
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
    localhost/api/users/:id  
},  
PUT: {  
    localhost/api/users/:id
    body:
        {
        "id": "5",
        "first_name": "Testukas",
        "balance": 1,
        "items": []
    }  
}  
DELETE: {  
    localhost/api/users/:id  
}  
## ---------------------------
## Komunikacija su kitu servisu:

Prekiu islistinimas:
GET localhost/communicate/items

Prekes pirkimas
POST localhost/communicate/item
Body: 
{
  "userId": number,
  "itemId": number
}

## ---------------------------

## commands to start the rest-api: 
docker-compose up -d
