import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserRoleModule } from './user-role/user-role.module';
import { BookModule } from './book/book.module';
import { CategoryModule } from './category/category.module';
import { AuthorModule } from './author/author.module';
import { BookAuthorModule } from './book-author/book-author.module';
import { LoanModule } from './loan/loan.module';
import { ReservationModule } from './reservation/reservation.module';
import { ReservationStatusModule } from './reservation-status/reservation-status.module';
import { StatusBookModule } from './status-book/status-book.module';

@Module({
  imports: [UserModule, UserRoleModule, BookModule, CategoryModule, AuthorModule, BookAuthorModule, LoanModule, ReservationModule, ReservationStatusModule, StatusBookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
