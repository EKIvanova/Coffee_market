const express = require("express");
const generateTokens = require("../utils/generateTokens");
const verifyRefreshToken = require("../middlewares/verifyRefreshToken");
const tokensRouter = express.Router();

tokensRouter.get('/refresh', verifyRefreshToken, async (req, res) => {
const {acessToken, refreshToken} = generateTokens({
    user: res.locals.user,
});
res
.cookie('refreshToken', refreshToken, cookiesConfig)
.json({accessToken, user: res.locals.user});
});

module.exports = tokensRouter;
