import { Injectable } from '@nestjs/common';
import { Productos } from './productos.entity';
import Data_Productos from '../../Data/Data-Productos.json';

@Injectable()
export class ProductosService {
  FindAll(): Productos[] {
    return Data_Productos;
  }

  FindOne(id: string): Productos[] {
    const One = Data_Productos.filter((element) => {
      if (id == element.id) {
        return element;
      }
    });
    return One;
  }

  Update(id: string, updatebody: Productos): Productos[] {
    Data_Productos.forEach((data, index) => {
      if (data.id == id) {
        Object.keys(updatebody).forEach((element) => {
          Data_Productos[index][element] = updatebody[element];
        });
      }
    });
    return Data_Productos;
  }

  Create(Create: Productos): Productos[] {
    Data_Productos.push({ ...Create, id: crypto.randomUUID().toString() });
    return Data_Productos;
  }
}
