export interface IProduct {
  title: string;
  size: string;
  sku: string;
}

export const productList: IProduct[] = [
  {
    title: 'Neil Sims',
    size: 'w-8 h-8',
    sku: '320',
  },
  {
    title: 'Bonnie Green',
    size: 'w-8 h-8',
    sku: '3467',
  },
  {
    title: 'Michael Gough',
    size: 'w-8 h-8',
    sku: '67',
  },
  {
    title: 'Lana Byrd',
    size: 'w-8 h-8',
    sku: '367',
  },
  {
    title: 'Thomes Lean',
    size: 'w-8 h-8',
    sku: '2367',
  },
 
  // Add other product entries as needed
];
