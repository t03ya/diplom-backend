const { Router } = require('express')
const router = Router()
const Driver = require('../models/Driver')

// Получение списка классов и класса 

router.get("/", async (req, res) => {
    try {
        const drivers = await Driver.find().select("-__v");
        res.send(drivers);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.put('/updateDriver/:id', async (req, res) => {
    try {
        await Driver.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "Информация о водителе обновлена!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.post("/addDriver", async (req, res) => {
    try {
        const newDriver = new Driver(req.body)
        await newDriver.save()
        res.status(201).json({ message: "Водитель добавлен!", resultCode: 0 })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.get("/:id", async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id).select("-__v")
        res.send(driver);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.delete('/deleteDriver/:id', async (req, res) => {
    try {
        await Driver.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ message: "Водитель удален!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router