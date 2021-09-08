interface IRouteItem {
  key: number,
  icon?: React.ReactNode,
  paths: Array<string>,
  name: string,
  title: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any,
  exact: boolean,
  type: 'history' | 'hash',
}

export {
  IRouteItem,
};
