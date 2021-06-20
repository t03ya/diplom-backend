const { Router } = require('express')
const router = Router()
const Car = require('../models/Car')

// Получение списка классов и класса 

router.get("/", async (req, res) => {
    try {
        const cars = await Car.find().select("-__v");
        res.send(cars);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.post("/addCar", async (req, res) => {
    try {
        const newCar = new Car(req.body)
        await newCar.save()
        res.status(201).json({ message: "Автомобиль добавлен!", resultCode: 0 })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.get("/:id", async (req, res) => {
    try {
        const car = await Car.findById(req.params.id).select("-__v")
        res.send(car);
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.post("/:id/addDriver", async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);

        car.drivers.push(req.body);
        await car.save();

        res.status(200).json({ message: "Водитель добавлен!", resultCode: 0 })
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});

router.delete('/deleteCar/:id', async (req, res) => {
    try {
        await Car.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ message: "Автомобиль удален!" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.delete("/:id/deleteDriver/:driverId", async (req, res) => {
    try {
        const driverId = req.params.driverId
        const car = await Car.findById({ _id: req.params.id });
        car.drivers.remove({ driverId: driverId });
        await car.save();
        res.status(200).json({ message: "Водитель удален!", resultCode: 0 })
    }
    catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
});


module.exports = router