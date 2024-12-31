import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello World",
      }),
    };
  } catch (error: any) {
    console.error("Erro na Lambda:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Ocorreu um erro!",
        error: error.message,
      }),
    };
  }
};
