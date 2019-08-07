export interface Brand {
  src: string;
  name: string;
}

export interface PageTitle {
  path: string;
  name: string;
}

export interface Menu {
  title?: string;
  routers: MenuLink[];
}

export interface MenuLink {
  name: string;
  icon: string;
  router: string;
  exact?: boolean;
  listLink?: MenuLink[];
}

export interface MenuBottom {
  title?: string;
  routers?: MenuLink[];
  actions?: MenuBottomOption[];
}

export interface MenuBottomOption {
  name: string;
  icon?: string;
}
