const { Router } = require('express')
const router = Router()
const Waybill = require('../models/Driver')

// Получение списка классов и класса 

router.get("/", async (req, res) => {
    try {
        const waybill = await Waybill.find().select("-__v");
        res.send(waybill);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.put('/updateWaybill/:id', async (req, res) => {
    try {
        await Waybill.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "Информация о путевке обновлена!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.post("/addWaybill", async (req, res) => {
    try {
        const newWaybill = new Waybill(req.body)
        await newWaybill.save()
        res.status(201).json({ message: "Путевка добавлена!", resultCode: 0 })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.get("/:id", async (req, res) => {
    try {
        const waybill = await Waybill.findById(req.params.id).select("-__v")
        res.send(waybill);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.delete('/deleteWaybill/:id', async (req, res) => {
    try {
        await Waybill.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ message: "Путевка удалена!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router