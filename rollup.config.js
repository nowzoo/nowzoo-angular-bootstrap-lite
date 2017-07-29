import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
	'rxjs/BehaviorSubject': 'Rx',
	'rxjs/Subscription': 'Rx',
	'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx',
	'rxjs/add/operator/map': 'Rx',
};
export default {
    entry: './dist/modules/nowzoo-angular-bootstrap-lite.es5.js',
    dest: './dist/bundles/nowzoo-angular-bootstrap-lite.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.nowzooAngularBootstrapLite',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}
