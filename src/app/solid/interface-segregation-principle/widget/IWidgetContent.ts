export interface IWidgetContent {
  id: string;
}
export interface IReloadable {
  loading: boolean;
  reload(): void;
}
