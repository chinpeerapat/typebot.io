import { convertDataToBinary } from '../utils/fileHelpers';

export const convertToCsv = (data: any[]): Buffer => {
  // Converta os dados para CSV aqui. Esta é uma simplificação.
  const csvData = "id,name\n1,Example"; // Exemplo de dados CSV
  return convertDataToBinary(csvData, 'csv');
};
