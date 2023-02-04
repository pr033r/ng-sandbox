export interface IWidgetContent {
  id: string;
}

export interface IReloadable {
  reload: () => any;
  isLoading: boolean;
}
