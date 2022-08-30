import type { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';

export const main = async function (event: APIGatewayEvent, context: APIGatewayEventRequestContext) {
    console.log("event: ", event);
    console.log("context: ", context);

    return {
        statusCode: 200,
        headers: {},
        body: "Hello World, dawg!!!"
    }
    
}