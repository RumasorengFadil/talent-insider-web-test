export interface ErrorResponse  {
  statusCode: number;
  error: {
    message: string;
    code: string;
  };
};