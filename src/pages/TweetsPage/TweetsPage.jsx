import { lazy } from 'react';

const Tweets = lazy(() => import('components/Tweets/Tweets'));

export default function TweetsPage() {
    return <>
        <Tweets/>
    </>
}
