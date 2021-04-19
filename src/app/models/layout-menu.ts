class SubMenu {
  func: string;
  route: string;
  allow: boolean;
  active: boolean;
}

export class LayoutMenu {
    main: string;
    state: string;
    funcs: SubMenu[];
}

export const MENUS: LayoutMenu[] = [
  { main: '主要',
    state: '',
    funcs: [
        {func: '主要功能1', route: '/aa', allow: true, active: false },
        {func: '主要功能2', route: '/bb', allow: false, active: false },
        {func: '主要功能3', route: '/cc', allow: true, active: false }
    ]
  },
  { main: '中等',
    state: '',
    funcs: [
        {func: '次要功能1', route: '/dd', allow: true, active: false },
        {func: '次要功能2', route: '/ee', allow: true, active: false}
    ]
  },
  { main: '次要',
    state: 'open',
    funcs: [
        {func: '次要功能1', route: '/ff', allow: true, active: false },
        {func: '次要功能2', route: '/gg', allow: true, active: false}
    ]
  }
];
