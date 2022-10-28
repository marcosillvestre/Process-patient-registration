import express from 'express'
import { v4 } from 'uuid'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


const pacients = []



app.get("/pacients", (req, res) => {
    return res.json(pacients)
})

app.post("/pacients", (req, res) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    const date = today.toUTCString()

    const { name, age, city, state } = req.body
    const pacient = { id: v4(), name, age, city, state, date }

    pacients.push(pacient)

    return res.json(pacients)
})


app.delete("/pacients/:id", (req, res) => {

    const { id } = req.params

    const index = pacients.findIndex(item => item.id === id)
    pacients.splice(index, 1)
    return index < 0 ? res.status(400).json({ message: 'item nao encontrado' }) : res.status(204).json({ message: 'item deletado' })




})


app.listen(3001, () => {
    console.log(`✔you server is running on door 3001`)
})