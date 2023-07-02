import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Authorized,
  BadRequestError
} from 'routing-controllers';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Service } from 'typedi';
import { ErrorsMessages } from '../constants/errorMessages';
import { EntityMapper } from '@clients/mapper/entityMapper.service';
import { TransactionsService } from '@services/transactions.service';
import { Transaction } from '@entities/transaction.entity';
import { BaseTransactionDTO } from '@dto/baseTransactionDTO';

@JsonController('/transactions')
@Service()
export class TransactionController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Authorized()
  @Get()
  async index(): Promise<Transaction[]> {
    return this.transactionsService.listTransactions();
  }

  @Authorized()
  @Get('/:id')
  async show(@Param('id') id: number): Promise<Transaction | undefined> {
    return this.transactionsService.showTransaction(id);
  }

  @Authorized()
  @Post()
  async post(
    @Body() transactionDTO: BaseTransactionDTO
  ): Promise<InsertResult> {
    try {
      return await this.transactionsService.createTransaction(
        EntityMapper.mapTo(Transaction, transactionDTO)
      );
    } catch (error: any) {
      throw new BadRequestError(
        error.detail ?? error.message ?? ErrorsMessages.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Authorized()
  @Put('/:id')
  async put(
    @Param('id') id: number,
    @Body() transactionDTO: BaseTransactionDTO
  ): Promise<UpdateResult> {
    const transaction: Transaction = EntityMapper.mapTo(
      Transaction,
      transactionDTO
    );
    return this.transactionsService.editTransaction({ id, transaction });
  }

  @Authorized()
  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.transactionsService.deleteTransaction(id);
  }
}
