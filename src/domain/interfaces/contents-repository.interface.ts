export interface ContentsRepositoryInterface {
  create(data: any): Promise<any>;
  findAll(): Promise<Array<any>>;
}
