// axios.types.d.ts
import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    skipAuthRefresh?: boolean;
    xcsrf?: boolean;
  }
}
