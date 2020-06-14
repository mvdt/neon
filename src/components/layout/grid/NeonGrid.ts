import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NeonGridModel } from './NeonGridModel';
import { NeonResponsiveUtils } from '../../common/NeonResponsiveUtils';

@Component
export class NeonGrid extends Vue {
  private static styleIdPrefix = 'neon-grid-styles-';

  private allGridAreas: Set<string>;

  /**
   * The grid layouts
   */
  @Prop()
  public layouts!: NeonGridModel[];

  /**
   * id of the grid, should be unique on the page
   */
  @Prop({ required: true })
  public id!: string;

  public constructor() {
    super();
    // used to hide missing items from grid
    this.allGridAreas = new Set<string>(this.layouts.map((layout) => layout.grid.flat()).flat());
  }

  public created() {
    this.init();
  }

  public beforeDestroy() {
    this.destroy();
  }

  private init() {
    const styles = this.generateStyles();
    this.applyStyle(styles);
  }

  private destroy() {
    const id = NeonGrid.styleIdPrefix + this.id;
    const element: HTMLStyleElement = document.getElementById(id) as HTMLStyleElement;

    if (element != null && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }

  @Watch('layouts', { deep: true, immediate: true })
  private changeLayout() {
    this.destroy();
    this.init();
  }

  public generateStyles() {
    return this.layouts.map((layout) => this.generateStyle(layout)).join('\n');
  }

  public generateStyle(layout: NeonGridModel) {
    const grid = layout.grid;
    const breakpoint = NeonResponsiveUtils.breakpoints[layout.breakpoint];
    const breakpointQuery = breakpoint.length > 0 ? ` and ${breakpoint}` : '';
    return `@media screen${breakpointQuery} {\n` + this.generateGridCSS(grid) + '\n}';
  }

  public generateGridCSS(grid: string[][]) {
    // add template
    let gridStyles = `  .neon-grid {
    grid-template-areas: `;

    gridStyles = gridStyles + grid.map((row) => `"${row.join(' ')}"`).join('\n') + ';';
    gridStyles = gridStyles + '\n  }\n';

    const processed: string[] = [];

    // add areas
    gridStyles =
      gridStyles +
      grid
        .map((row) => {
          return row
            .map((column) => {
              if (processed.indexOf(column) >= 0) {
                return '';
              }

              processed.push(column);

              return `
  .${column} {
    grid-area: ${column};
  }`;
            })
            .join('\n');
        })
        .join('');

    const gridAreas = new Set<string>(grid.flat().flat());
    const toHide = Array.from(this.allGridAreas).filter((area) => !gridAreas.has(area));
    gridStyles = gridStyles + toHide.map((area) => `.${area} { display: none!important; }`);
    return gridStyles;
  }

  public applyStyle(styles: string) {
    const id = NeonGrid.styleIdPrefix + this.id;
    let element: HTMLStyleElement = document.getElementById(id) as HTMLStyleElement;
    if (element === null) {
      element = document.createElement('style');
      element.id = id;
      document.head.appendChild(element);
    }
    element.innerHTML = styles;
  }
}

export default NeonGrid;
