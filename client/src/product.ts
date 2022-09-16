export  interface Product{
          id: number;
        name: string;
        description?: string;
        imageUrl?: string;
        brandId?: number;
        brandName?: string;
        category?: number;
        stockQty?: number;
}