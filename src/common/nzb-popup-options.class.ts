export class NzbPopupOptions {
  animation?: boolean = true;
  animateOnDestroy?: boolean = true
  container?: string|HTMLElement|false = false;
  delay?: number|{show: number, hide: number} = 0;
  html?: boolean = false;
  placement?: string|((popEl:HTMLElement, targetEl: HTMLElement) => string);
  template?: string;
  trigger?: string;
  offset?: number|string = 0;
  fallbackPlacement?: string|any[] = 'flip';
}
