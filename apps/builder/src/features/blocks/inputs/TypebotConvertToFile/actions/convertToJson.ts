import { convertDataToBinary } from '../utils/fileHelpers';

export const convertToJson = (data: any[]): Buffer => {
  // Converta os dados para JSON
  const jsonData = JSON.stringify(data);
  return convertDataToBinary(jsonData, 'json');
};
