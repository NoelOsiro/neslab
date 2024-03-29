"use client"
import MultiStepForm from '@/components/Form/MultiStepForm';
import { useSearchParams } from 'next/navigation';


export default function Page() {
   const router = useSearchParams();
   const title = router.get('title');
   const size = router.get('size');
   const sku = router.get('sku');

   return (
      <div className="pt-6 px-4">
         <div className="w-full grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
               <div className="flex items-center justify-between mb-4">
                  <div className="flex-shrink-1">
                     <span className="text-1xl sm:text-3xl leading-none font-bold text-gray-900">{title}</span>
                     <h3 className="text-base mt-2 font-normal text-gray-600">{size}</h3>
                     <h3 className="text-base mt-2 font-normal text-gray-500">{sku}</h3>
                  </div>
               </div>
                  <MultiStepForm />
            </div>
         </div>
      </div>
   )
}

