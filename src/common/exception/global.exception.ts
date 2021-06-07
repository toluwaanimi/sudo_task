import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  
  @Catch()
  export class GlobalExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const status = false;
      let success, resObj, data, message;
      if (exception instanceof HttpException) {
        success = exception.getStatus();
        resObj = exception.getResponse();
        (message = resObj.message), (data = resObj.data || undefined);
      } else {
        success = HttpStatus.BAD_REQUEST;
        resObj = exception;
        message = 'Sorry, we are unable to process your request';
        data = {
          message: resObj.message,
          stack: resObj.stack,
        };
      }
      return response.status(success).json({ status, message, data });
    }
  }
  