import { convertToCsv } from './actions/convertToCsv';
import { convertToJson } from './actions/convertToJson';
import { convertToText } from './actions/convertToText';

export class ConvertToFile {
  // Função de exemplo que demonstra como utilizar os métodos de conversão
  convert(data: any, format: 'csv' | 'json' | 'text'): Buffer {
    switch (format) {
      case 'csv':
        return convertToCsv(data);
      case 'json':
        return convertToJson(data);
      case 'text':
        return convertToText(data);
      default:
        throw new Error('Formato não suportado');
    }
  }
}
