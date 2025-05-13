import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { ILicense } from './ILicense';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { EmptyRowCol } from '../common';

import { CommonSection } from '../common/CommonSection';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';

type Payload = ILicense.Payload;
type Item = ILicense.Item;

export const License = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="LICENSE">
      <LicenseRow payload={payload} />
    </CommonSection>
  );
}

function LicenseRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(item: Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const [startedAt] = [item.receivedAt].map((at) =>
    DateTime.fromFormat(at, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL),
  );

  return {
    left: { title: `${startedAt}` },
    right: {
      ...item,
    },
  };
}
