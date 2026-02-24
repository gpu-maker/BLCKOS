const CryptoLayer={

encode(text){
return btoa(text)
},

decode(text){
try{return atob(text)}
catch{return "corrupted"}
},

hiddenMessages:[
"VGhlIHN5c3RlbSBpcyBub3QgY29udGFpbmVk",
"WW91IGFyZSB0aGUgZXhwZXJpbWVudA=="
]

}
