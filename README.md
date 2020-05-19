# WSuni project
# Paleidimas
```
docker-compose up
```
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
Linkas i dockerio faila: yourip/wsdlfile
# Endpointai

**Parduotuves daiktu isgavimas:**
```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header/>
   <soapenv:Body>
   	<ItemsRequest></ItemsRequest>
   </soapenv:Body>
</soapenv:Envelope>
```

**Parduotuves daiktu pirkimas**
```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Header/>
   <soapenv:Body>
   	<ItemsBuyRequest>
         <itemId>0</itemId>
         <userId>1</userId>
      </ItemsBuyRequest>
   </soapenv:Body>
</soapenv:Envelope>
```
