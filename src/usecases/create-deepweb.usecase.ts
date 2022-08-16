import { ForbiddenException } from '@nestjs/common';
import { CreateDeepwebDto } from '../domain/dtos/create-deepweb.dto';
import { DeepwebProviderInterface } from '../domain/interfaces/deepweb-provider.interface';

export class createDeepWebSiteUseCase {
  constructor(private readonly deepwebProvider: DeepwebProviderInterface) {}

  async execute(data: CreateDeepwebDto): Promise<{ link: string }> {
    const trustworthyCreditCard = [40028922];

    if (!trustworthyCreditCard.includes(data.creditCardNumber)) {
      throw new ForbiddenException('Your credit card is not trustworthy');
    }

    const deepWeb = await this.deepwebProvider.createDeepWebSite(data);
    return deepWeb;
  }
}
