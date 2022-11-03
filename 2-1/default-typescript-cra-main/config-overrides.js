import { addWebpackAlias, override } from "customize-cra";
import path from "path";

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src")
  })
);
