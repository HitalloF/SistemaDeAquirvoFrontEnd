import {  CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId:"sa-east-1_2ySwn80c4",
    ClientId:"28ko4o39o03chnq01h40gsv07f"
}

export default new CognitoUserPool(poolData);