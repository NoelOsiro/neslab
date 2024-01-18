export interface IProduct {
    title: string;
    size: string;
    sku: string;
    image: string;
    email: string;
  }
  
  export const productList: IProduct[] = [
    {
      title: 'Neil Sims',
      size: 'w-8 h-8',
      sku: '320',
      image: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
      email: 'email@windster.com',
    },
    {
      title: 'Bonnie Green',
      size: 'w-8 h-8',
      sku: '3467',
      image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
      email: 'email@windster.com',
    },
    {
      title: 'Michael Gough',
      size: 'w-8 h-8',
      sku: '67',
      image: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      email: 'email@windster.com',
    },
    {
      title: 'Lana Byrd',
      size: 'w-8 h-8',
      sku: '367',
      image: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
      email: 'email@windster.com',
    },
    {
      title: 'Thomes Lean',
      size: 'w-8 h-8',
      sku: '2367',
      image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      email: 'email@windster.com',
    },
    // Add other product entries as needed
  ];
  