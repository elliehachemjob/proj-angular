export interface Product {
  id: number;
  name: string;
  price: any;
  description: string;
  handler:()=>{};
}

export const products = [
  {
    id: 1,
    name: 'Car',
    price: 200,
    description: 'A large Car with one of the best model',
    handler: () => alert('id 1'),
  },
  {
    id: 2,
    name: '',
    price: 699,
    description: 'A great Bus with one of the best speed offered',
    handler: () => alert('id 2'),
  },
  {
    id: 3,
    name: 'Bus',
    price: 299,
    description: '',
    handler: () => alert('id 3'),
  },
  {
    id: 4,
    name: 'Motorcycle',
    price: 10,
    description: '',
    handler: () => alert('id 4'),
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/