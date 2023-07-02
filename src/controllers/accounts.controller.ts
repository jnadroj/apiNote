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
import { AccountsService } from '@services/account.service';
import { Account } from '@entities/account.entity';
import { BaseAccountDTO } from '@dto/baseAccountDTO';

@JsonController('/accounts')
@Service()
export class AccountController {
  constructor(private readonly accountsService: AccountsService) {}

  @Authorized()
  @Get()
  async index(): Promise<Account[]> {
    return this.accountsService.listAccounts();
  }

  @Authorized()
  @Get('/:id')
  async show(@Param('id') id: number): Promise<Account | undefined> {
    return this.accountsService.showAccount(id);
  }

  @Authorized()
  @Post()
  async post(@Body() accountDTO: BaseAccountDTO): Promise<InsertResult> {
    try {
      return await this.accountsService.createAccount(
        EntityMapper.mapTo(Account, accountDTO)
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
    @Body() accountDTO: BaseAccountDTO
  ): Promise<UpdateResult> {
    const account: Account = EntityMapper.mapTo(Account, accountDTO);
    return this.accountsService.editAccount({ id, account });
  }

  @Authorized()
  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.accountsService.deleteAccount(id);
  }
}
