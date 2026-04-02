import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDemoDto } from './dto/create-demo.dto';
import { CreateDemoResponse } from './entities/demo-request.entity';

@Injectable()
export class DemoService {
  private readonly logger = new Logger(DemoService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(createDemoDto: CreateDemoDto): Promise<CreateDemoResponse> {
    this.logger.log(`Creating demo request for: ${createDemoDto.email}`);

    const demoRequest = await this.prisma.demo_requests.create({
      data: {
        fullName: createDemoDto.fullName.trim(),
        email: createDemoDto.email.toLowerCase().trim(),
        country: createDemoDto.country.trim(),
        message: createDemoDto.message?.trim() || null,
      },
    });

    this.logger.log(`Demo request created with ID: ${demoRequest.id}`);

    return {
      id: demoRequest.id,
      fullName: demoRequest.fullName,
      email: demoRequest.email,
      country: demoRequest.country,
      message: demoRequest.message,
      createdAt: demoRequest.createdAt,
    };
  }

  async findAll() {
    return this.prisma.demo_requests.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.demo_requests.findUnique({
      where: { id },
    });
  }
}