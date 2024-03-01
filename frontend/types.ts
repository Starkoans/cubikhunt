export const Categories = [
    'Медицина',
    'Экономика',
    'Общество',
    'Образование',
    'Творчество',
    'Наука',
    'Интернет'
]

export interface Project  {
    id?: string | null,
    name: string,
    current_amount?: number,
    target_amount: number | null,
    end_date: Date,
    description?: string |null,
    body?: string |null,
    logo?: string | null,
    video?: string | null,
    category?: string | null
    created_at? : string | null,
    likes_count?: number,
    isLiked?:boolean
}
