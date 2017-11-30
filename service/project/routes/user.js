let express = require('express');
let router = express.Router();
let userController = require('../controllers/user');
let fileController = require('../controllers/fileitem');
let groupController = require('../controllers/group');

/*-------------------USER_API-------------------------*/
router.route('/')
    .get(userController.checkUserRequest, userController.getUser)
    .put(userController.checkUserRequest, userController.putUser, userController.getUser)
    .delete(userController.deleteUser, userController.getUser)
    .post(userController.postUser, userController.getUser);
router.route('/profileImage/:userID')
    .get(userController.checkUserRequest, userController.getProfileImageID, fileController.getFile)
    .put(userController.checkUserRequest, fileController.profileUpload, fileController.postFile, userController.putProfileImage)
    .post(userController.checkUserRequest, fileController.profileUpload, fileController.postFile, userController.putProfileImage);
router.route('/coverImage/:userID')
    .get(userController.checkUserRequest, userController.getCoverImageID, fileController.getFile)
    .put(userController.checkUserRequest, fileController.coverUpload, fileController.postFile, userController.putProfileImage)
    .post(userController.checkUserRequest, fileController.coverUpload, fileController.postFile, userController.putCoverImage);

router.route('/friends/:userID').get(userController.checkUserRequest, userController.getFriends);
router.route('/friends/:userID/:friendUserID')
    .post(userController.checkUserRequest, userController.addFriend)
    .delete(userController.checkUserRequest, userController.removeFriend);
router.route('/classs/:userID').get(userController.checkUserRequest, userController.getClasss);
// router.route('/request').get(userController.checkUserRequest, userController.getRequests);
router.route('/request/:userID').get(userController.checkUserRequest, userController.getRequests);
router.route('/request/:userID/:friendUserID')
    .post(userController.checkUserRequest, userController.addRequest)
    .delete(userController.checkUserRequest, userController.removeRequest);
router.route('/requested').get(userController.checkUserRequest, userController.getRequesteds);
router.route('/requested/:userID').get(userController.checkUserRequest, userController.getRequesteds);
router.route('/requested/:userID/:friendUserID')
    .post(userController.checkUserRequest,userController.confirmRequested)
    .delete(userController.checkUserRequest, userController.removeRequested);

router.route('/posts/:userID').get(userController.checkUserRequest, userController.getPosts);

router.route('/classs/:userID/:groupID').delete(userController.checkUserRequest, groupController.checkGroupRequest , userController.removeFromClass);
// router.route('/classrequest').get(userController.checkUserRequest, userController.getClassRequests);
router.route('/classrequest/:userID').get(userController.checkUserRequest, userController.getClassRequests);
router.route('/classrequest/:userID/:groupID')
    .post(userController.checkUserRequest, groupController.checkGroupRequest ,userController.addClassRequest)
    .delete(userController.checkUserRequest, groupController.checkGroupRequest, userController.removeClassRequest);

router.route('/login/').post(userController.login);
router.route('/info/:userID').get(userController.checkUserRequest, userController.getUserInfo);
router.route('/files/:userID').get(userController.checkUserRequest, userController.getFiles);
router.route('/search').get(userController.searchUserByName);
router.route('/:userID')
    .get(userController.checkUserRequest, userController.getUser)
    .put(userController.checkUserRequest, userController.putUser, userController.getUser)
    .delete(userController.deleteUser, userController.getUser);

module.exports = router;