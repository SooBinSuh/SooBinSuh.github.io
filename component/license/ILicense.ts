import { ICommon } from '../common/ICommon';

export declare namespace ILicense {
  export interface Payload extends ICommon.Payload {
    /** ### 교육 수료 리스트 */
    list: Item[];
  }

  export interface Item {
    title: string;
    subTitle: string;

    receivedAt: string;
  }
}
