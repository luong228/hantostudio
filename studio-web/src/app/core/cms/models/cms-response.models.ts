export interface StrapiEntity<T> {
  id: number;
  attributes: T;
}

export interface StrapiCollectionResponse<T> {
  data: Array<StrapiEntity<T>>;
}

export interface StrapiSingleResponse<T> {
  data: StrapiEntity<T> | null;
}

export interface PayloadCollectionResponse<T> {
  docs: T[];
  totalDocs?: number;
}

export interface PayloadSingleResponse<T> {
  doc?: T | null;
}
