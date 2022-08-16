import { CreateDeepwebDto } from '../dtos/create-deepweb.dto';

export interface DeepwebProviderInterface {
  createDeepWebSite(data: CreateDeepwebDto): Promise<{ link: string }>;
}
