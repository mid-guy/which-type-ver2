import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import generatePackageJson from "rollup-plugin-generate-package-json";


export default 
  {
    input: `modules/index.ts`,
    output: {
      file: `dist/index.js`,
      exports: "auto",
      format: "esm",
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