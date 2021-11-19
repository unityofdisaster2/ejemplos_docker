const { Router } = require('express');

const router = Router();

const { getUsers, createUser, deleteUser, updateUser } = require('../controllers/userController');


router.get('/', getUsers);

router.post('/create', createUser);

router.put('/update', updateUser);

router.delete('/delete', deleteUser);


module.exports = router;