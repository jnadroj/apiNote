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
import { BanksService } from '@services/banks.service';
import { ErrorsMessages } from '../constants/errorMessages';
import { BaseBankDTO } from '@dto/baseBankDTO';
import { EntityMapper } from '@clients/mapper/entityMapper.service';
import { Bank } from '@entities/bank.entity';

@JsonController('/banks')
@Service()
export class BankController {
  constructor(private readonly banksService: BanksService) {}

  @Authorized()
  @Get()
  async index(): Promise<Bank[]> {
    return this.banksService.listBanks();
  }

  @Get('/:id')
  async show(@Param('id') id: number): Promise<Bank | undefined> {
    return this.banksService.showBank(id);
  }

  @Post()
  async post(@Body() bankDTO: BaseBankDTO): Promise<InsertResult> {
    try {
      return await this.banksService.createBank(
        EntityMapper.mapTo(Bank, bankDTO)
      );
    } catch (error: any) {
      throw new BadRequestError(
        error.detail ?? error.message ?? ErrorsMessages.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Put('/:id')
  async put(
    @Param('id') id: number,
    @Body() bankDTO: BaseBankDTO
  ): Promise<UpdateResult> {
    const bank: Bank = EntityMapper.mapTo(Bank, bankDTO);
    return this.banksService.editBank({ id, bank });
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.banksService.deleteBank(id);
  }
}
