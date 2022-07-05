import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../entities/user.entity';
export declare class UpdateUserInterceptor implements NestInterceptor {
    intercept(_context: ExecutionContext, next: CallHandler): Observable<User>;
}
