import { Construct } from "constructs";
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as path from 'path';
export default class SubscriptionService2nd extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);
        const s3Bucket = new s3.Bucket(this, 'SubscriptionStore2nd');
        const getSubscriptionHandler2nd = new lambda.Function(this, 'GetSubscriptionHandler2nd', {
            runtime: lambda.Runtime.NODEJS_16_X,
            handler: 'getSubscription.main',
            code: lambda.Code.fromAsset(path.join(__dirname, '../resources'))
        });

        const api = new apigateway.RestApi(this, 'SubscriptionAPI2nd', {
            restApiName: 'Sunscription-Service-2nd'
        });

        const getSubcription2nd = new apigateway.LambdaIntegration(getSubscriptionHandler2nd);
        api.root.addMethod("GET", getSubcription2nd);
    }
}