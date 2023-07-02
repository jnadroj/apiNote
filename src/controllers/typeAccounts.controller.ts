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
import { TypeAccountsService } from '@services/typeAccount.service';
import { ErrorsMessages } from '../constants/errorMessages';
import { EntityMapper } from '@clients/mapper/entityMapper.service';
import { BaseTypeAccountDTO } from '@dto/baseTypeAccountDTO';
import { TypeAccount } from '@entities/typeAccount.entity';

@JsonController('/typeAccounts')
@Service()
export class TypeAccountController {
  constructor(private readonly typeAccountsService: TypeAccountsService) {}

  @Authorized()
  @Get()
  async index(): Promise<TypeAccount[]> {
    return this.typeAccountsService.listTypeAccounts();
  }

  @Authorized()
  @Get('/:id')
  async show(@Param('id') id: number): Promise<TypeAccount | undefined> {
    return this.typeAccountsService.showTypeAccount(id);
  }

  @Authorized()
  @Post()
  async post(
    @Body() typeAccountDTO: BaseTypeAccountDTO
  ): Promise<InsertResult> {
    try {
      return await this.typeAccountsService.createTypeAccount(
        EntityMapper.mapTo(TypeAccount, typeAccountDTO)
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
    @Body() typeAccountDTO: BaseTypeAccountDTO
  ): Promise<UpdateResult> {
    const typeAccount: TypeAccount = EntityMapper.mapTo(
      TypeAccount,
      typeAccountDTO
    );
    return this.typeAccountsService.editTypeAccount({ id, typeAccount });
  }

  @Authorized()
  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.typeAccountsService.deleteTypeAccount(id);
  }
}
