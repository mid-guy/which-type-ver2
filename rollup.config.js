import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import generatePackageJson from "rollup-plugin-generate-package-json";

const dir = [
  "is",
  "isArray",
  "isFunction",
  "isNumber",
  "isObject",
  "isString",
  "isNull",
];
const modulesConfig = dir.map((folder) => ({
  input: `modules/${folder}/${folder}.ts`,
  output: [
    {
      file: `dist/${folder}/${folder}.js`,
      exports: "auto",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "tsconfig.json",
      useTsconfigDeclarationDir: true,
    }),
    generatePackageJson({
      baseContents: (pkg) => ({
        main: `dist/${folder}/${folder}.js`,
        types: `dist/${folder}/${folder}.d.ts`,
      }),
    }),
    babel(),
    terser(),
  ],
}));
export default [
  ...modulesConfig,
  {
    input: `modules/index.ts`,
    output: {
      file: `dist/index.js`,
      exports: "auto",
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfig: "tsconfig.json",
        useTsconfigDeclarationDir: true,
      }),
      generatePackageJson({
        baseContents: (pkg) => ({
          ...pkg,
        }),
      }),
      babel(),
      terser(),
    ],
  }
]