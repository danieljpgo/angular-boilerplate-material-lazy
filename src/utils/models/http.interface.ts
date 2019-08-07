export interface RequestAttribute {
  param: string;
  value: string;
}

export interface RequestParams {
  filter: string;
  sort: string;
  order: 'desc' | 'asc';
  page: number;
  limit: number;
}
