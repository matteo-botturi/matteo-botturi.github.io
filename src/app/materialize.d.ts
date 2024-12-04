declare interface MaterializeCarousel {
    next(): void;
    prev(): void;
    destroy(): void;
    set(index: number): void;
  }

  declare interface MaterializeSidenav {
    open(): void;
    close(): void;
    destroy(): void;
  }
  
  
  declare interface Materialize {
    Carousel: {
      init(
        elems: Element | NodeListOf<Element>,
        options?: Partial<{
          duration: number;
          dist: number;
          shift: number;
          padding: number;
          numVisible: number;
          fullWidth: boolean;
          indicators: boolean;
          noWrap: boolean;
          onCycleTo?: (ele: Element, dragged: boolean) => void;
        }>
      ): MaterializeCarousel[];
    };
    Sidenav: {
      init(
        elems: Element | NodeListOf<Element>,
        options?: Partial<{
          edge: 'left' | 'right';
          draggable: boolean;
          inDuration: number;
          outDuration: number;
          onOpenStart?: (el: Element) => void;
          onOpenEnd?: (el: Element) => void;
          onCloseStart?: (el: Element) => void;
          onCloseEnd?: (el: Element) => void;
        }>
      ): MaterializeSidenav[];
    };
  }