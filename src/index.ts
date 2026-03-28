import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

    app.get('/',(req,res) => {
        res.json({mensaje: 'API de recuerdame funcionando'})
    })

const eventos = [
    {
        id:1,
        titulo:"Salida al cine",
        fecha: new Date(2026,2,11),
        descripcion:"Ver la nueva de pelicula de Avatar",
        grupoFamiliar:"Familia el cariño"
    },
    {
        id:2,
        titulo:"Cumpleaños mamá",
        fecha: new Date(2026,5,15),
        descripcion:"Celebración en casa",
        grupoFamiliar:"Familia"
    }
];

app.get('/eventos',(req,res) =>{
    res.json(eventos)
});

app.get('/eventos/:id',(req,res)=>{
    const id = Number(req.params.id);
    const evento = eventos.find(e => e.id==id);

    if(!evento){
        res.status(404).json({error: 'Evento no encontrado'});
        return;
    }
    res.json(evento);

});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})