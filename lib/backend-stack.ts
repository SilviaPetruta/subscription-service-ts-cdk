import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import SubscriptionService2nd from './subscription-service';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SubscriptionService2nd(this, 'SubscriptionService2nd');
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'BackendQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
