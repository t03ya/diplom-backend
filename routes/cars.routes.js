const { Router } = require('express')
const router = Router()
const Car = require('../models/Car')

// Получение списка классов и класса 

router.get("/getCars", async (req, res) => {
    try {
        const cars = await Car.find();
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
// router.get("/classrooms/:id", async (req, res) => {
//     try {
//         const classroom = await Classroom.findById(req.params.id).select("-__v")
//         res.send(classroom);
//     }
//     catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }
// });

// // Добавление и удаление учителя и студента

// router.delete("/classrooms/:id/deleteStudent/:studentId", async (req, res) => {
//     try {
//         const studentId = req.params.studentId
//         const classroom = await Classroom.findById({ _id: req.params.id });
//         classroom.students.remove({ studentId: studentId });
//         await classroom.save();
//         res.status(200).json({ message: "Ученик удален из класса!", resultCode: 0 })
//     }
//     catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }
// });
// router.post("/classrooms/:id/addStudent", async (req, res) => {
//     try {
//         console.log("Body:", req.body)
//         const classroom = await Classroom.findById(req.params.id);

//         classroom.students.push(req.body);
//         await classroom.save();

//         res.status(200).json({ message: "Ученик добавлен!", resultCode: 0 })
//     }
//     catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }

// });
// router.put("/classrooms/:id/addTeacher", async (req, res) => {
//     try {
//         let classTeacher = {
//             classTeacher: {
//                 teacherId: req.body.teacherId,
//                 fio: req.body.fio,
//                 login: req.body.login,
//                 email: req.body.email,
//                 mobileNumber: req.body.mobileNumber,
//                 subject: req.body.subject
//             }
//         }

//         await Classroom.findByIdAndUpdate(req.params.id, classTeacher)
//         res.status(200).json({ message: "Классный руководитель добавлен!", resultCode: 0 })
//     }
//     catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }

// });

// //Добавление и удаление, обновление сообщения
// router.post("/classrooms/:id/addMessage", async (req, res) => {
//     try {
//         const classroom = await Classroom.findById(req.params.id);

//         console.log(req.body)

//         classroom.classForumMessages.push(req.body);
//         await classroom.save();

//         res.status(201).json({ message: "Сообщение добавлено!", resultCode: 0 })
//     }
//     catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }
// });

// router.delete("/classrooms/:id/deleteMessage/:messageId", async (req, res) => {
//     try {
//         const classroom = await Classroom.findById({ _id: req.params.id });
//         classroom.classForumMessages.remove({ _id: req.params.messageId });
//         await classroom.save();
//         res.status(200).json({ message: "Сообщение удалено!", resultCode: 0 })
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }
// });
// router.put("/classrooms/:id/updateMessage/:messageId", async (req, res) => {
//     try {

//         const classroom = await Classroom.findById({ _id: req.params.id });

//         classroom.classForumMessages.map(message => {
//             if (message.id === req.params.messageId) {
//                 message.message = req.body.message;
//                 message.edited = "1";
//             } else if (!req.body.message) {
//                 return res.status(401).json({ message: "Нельзя передавать пустую строку!", resultCode: 1 })
//             }
//         })

//         await classroom.save()

//         res.status(200).json({ message: "Сообщение обновлено!", resultCode: 0 })
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }

// })





// Добавление и удаление классов

// router.post("/addClassroom", async (req, res) => {
//     try {
//         const availableClassroom = await Classroom.findOne(req.body)
//         if (availableClassroom) {
//             return res.status(202).json({ message: 'Класс с таким номером уже существует!', resultCode: 1 })
//         }
//         const newClassroom = new Classroom(req.body)
//         await newClassroom.save()
//         res.status(201).json({ message: "Класс создан", resultCode: 0 })
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }
// });

// router.delete('/deleteClassroom/:id', async (req, res) => {
//     try {
//         await Classroom.findByIdAndRemove({ _id: req.params.id })
//         res.status(200).json({ message: "Класс удален!" })
//     } catch (e) {
//         res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//     }
// })

module.exports = router