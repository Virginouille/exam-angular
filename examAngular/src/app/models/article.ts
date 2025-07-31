export interface Article {
    id: number;
    title: string;
    description: string;
    image: string;
    fullPrice: number;
    discountPercent: number;
    category: 'ventilateur' | 'climatiseur' | 'refroidisseur';
    features: { title: string; description: string; icon: string; }[];
}