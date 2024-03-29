import { convertDataToBinary } from '../utils/fileHelpers';

export const convertToText = (data: string): Buffer => {
  // Converta uma string simples para texto
  return convertDataToBinary(data, 'text');
};
