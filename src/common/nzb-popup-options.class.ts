export class NzbPopupOptions {
  animation?: boolean;
  animateOnDestroy?: boolean = true
  container?: string|HTMLElement|false;
  delay?: number|{show: number, hide: number};
  html?: boolean;
  placement?: string|((popEl:HTMLElement, targetEl: HTMLElement) => string);
  template?: string;
  trigger?: string;
  offset?: number|string;
  fallbackPlacement?: string|any[];
}
