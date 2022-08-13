import { PrismaProvider } from './../../database/providers/prisma.provider';
import { ContentsDTO } from './contents.dto';
import { Injectable } from '@nestjs/common';



@Injectable()
export class ContentsService {

  constructor(private prisma: PrismaProvider) {}
  
  async create(data: ContentsDTO) {
    const contentsExists = await this.prisma.contents.findFirst({
      where: {
        title: data.title,
      },
    });

    if (contentsExists) {
      throw new Error('Content already exists');
    }

    const content = await this.prisma.contents.create({
      data,
    });

    return content;
  }

  async findAll() {
    return this.prisma.contents.findMany();
  }

  async update(id: string, data: ContentsDTO) {
    const contentsExists = await this.prisma.contents.findUnique({
      where: {
        id,
      }
    });

    if (!contentsExists) {
      throw new Error('Content does not exists!');
    }

    return await this.prisma.contents.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string){
    const contentstExists = await this.prisma.contents.findUnique({
      where: {
        id,
      }
    });

    if (!contentstExists) {
      throw new Error('Content does not exists!');
    }

    return await this.prisma.contents.delete({
      where: {
        id,
      },
    });
  }
}
