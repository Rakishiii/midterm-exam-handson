const express = require("express");
const app = express();


const dishes = [
    {type: 'Bagnet',province:'Ilocos',price:370},
    {type: 'Salpicao',province:'Quezon',price:180},
    {type: 'Sisig',province:'Pampanga',price:220},
]

app.get('/dishes',(req,res)=>{
    res.json(dishes);
})

app.get('/dishes/:type',(req,res)=>{
    const dishType = req.params.type;
    const dish = dishes.find(d => d.typetoLowerCase() === dishType.toLowerCase());

    if (dish) {
        res.json(dish);
     } else {
            res.status(404)/send('Record not found');
        }
    
});

app.use((req,res) => {
    res.status(404).send("Record not found");
});


app.listen(3000,()=> { 
    console.log('Server is running on http://localhost:3000');
});