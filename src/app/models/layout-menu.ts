class SubMenu {
  func: string;
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
        {func: '主要功能1', allow: true, active: false },
        {func: '主要功能2', allow: false, active: false },
        {func: '主要功能3', allow: true, active: false }
    ]
  },
  { main: '中等',
    state: '',
    funcs: [
        {func: '次要功能1', allow: true, active: false },
        {func: '次要功能2', allow: true, active: false}
    ]
  },
  { main: '次要',
    state: 'open',
    funcs: [
        {func: '次要功能1', allow: true, active: false },
        {func: '次要功能2', allow: true, active: false}
    ]
  }
];
