import { DeepwebProviderInterface } from 'src/domain/interfaces/deepweb-provider.interface';
import { createDeepWebSiteUseCase } from './create-deepweb.usecase';

describe('createDeepWebUsecase', () => {
  let createDeepWebUsecase: createDeepWebSiteUseCase;

  const fakeDeepWebProvider: DeepwebProviderInterface = {
    createDeepWebSite: (data) =>
      Promise.resolve({
        link: 'https://www.venda-de-armas-e-bomba-patch.onion',
      }),
  };

  beforeEach(() => {
    createDeepWebUsecase = new createDeepWebSiteUseCase(fakeDeepWebProvider);
  });

  it('should be able to create a deep web site', async () => {
    const result = await createDeepWebUsecase.execute({
      creaditCardSecret: 40028922,
      creditCardNumber: 40028922,
    });

    expect(result.link).toEqual(
      'https://www.venda-de-armas-e-bomba-patch.onion',
    );
  });

  it('shoud not be able to create a deep web site if the card is not trustworthy', async () => {
    await expect(
      createDeepWebUsecase.execute({
        creaditCardSecret: 40028922,
        creditCardNumber: 213123,
      }),
    ).rejects.toThrowError('Your credit card is not trustworthy');
  });
});
