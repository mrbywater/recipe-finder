'use client';

import { ErrorProps } from '@/components/ErrorComponent/types';
import ErrorComponent from '@/components/ErrorComponent';

export default function Error({ error, reset }: ErrorProps) {
  return <ErrorComponent error={error} reset={reset} />;
}
