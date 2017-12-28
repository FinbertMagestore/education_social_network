let express = require('express');
let UserController = require('../controllers/user');
let GroupController = require('../controllers/group');
let FileController = require('../controllers/fileitem');
let Utils = require('../application/utils');
let PostController = require('../controllers/post');
let EventController = require('../controllers/event');
let authController = require('../controllers/auth');
let router = express.Router();

router.use(authController.isAuthenticated);
router.route('/')
    .get(EventController.getAllEvents, EventController.getEventsInfo)
    .post(FileController.imageUpload, UserController.checkUserRequest, GroupController.checkGroupRequestIfHave,FileController.postFileIfHave, EventController.addEvent, EventController.getEventInfo);
router.route('/groupevent/:groupEventID').get(EventController.getGroupEvent, EventController.getEventsInfo);
router.route('/create').post(FileController.imageUpload, UserController.checkUserRequest, GroupController.checkGroupRequestIfHave,FileController.postFileIfHave, EventController.addEvents, EventController.getEventsInfo);
router.route('/system').get(EventController.getSystemEvents, EventController.getEventsInfo);
router.route('/user/:userID').get(UserController.checkUserRequest, EventController.getUserEvents, EventController.getEventsInfo);
router.route('/group/:groupID').get(GroupController.checkGroupRequest, EventController.getGroupEvents, EventController.getEventsInfo);
router.route('/filter').get(EventController.getEvents, EventController.getEventsInfo);
router.route('/info/:eventID').get(EventController.checkEventRequest, EventController.getEventInfo);
router.route('/update/:eventID').put(FileController.imageUpload, GroupController.checkGroupRequestIfHave, EventController.checkEventRequest, FileController.postFileIfHave, EventController.updateEvent, EventController.getEventInfo)
router.route('/delete/:eventID').delete(EventController.checkEventRequest, EventController.removeEvent, EventController.getEventInfo);

module.exports = router;