import { Test } from "./lib"
import {Contract} from "../dmc-ts-lib/lib/contract"

export class main extends Contract{
    hi(c: number, b: number):number {
        return c + b;
    }

    show(): string{
        let temp = new Test("aaa");
        return temp.str;
    }
}