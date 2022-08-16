import { DeepwebProviderInterface } from 'src/domain/interfaces/deepweb-provider.interface';

export class PikachuDeepwebProvider implements DeepwebProviderInterface {
  async createDeepWebSite(data: any): Promise<{ link: string }> {
    const sitesFake = [
      'https://www.venda-de-armas-e-bomba-patch.onion',
      'https://www.venda-de-toddynho.onion',
      'https://www.venda-de-videos-da-ana-maria-braga.onion',
    ];

    const random = Math.floor(Math.random() * sitesFake.length);

    return { link: sitesFake[random] };
  }
}
