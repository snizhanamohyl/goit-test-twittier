import { lazy } from 'react';
import { BackLink, TweetsPageWrap } from './TweetsPage.styled';

const Tweets = lazy(() => import('components/Tweets/Tweets'));

export default function TweetsPage() {
    return <TweetsPageWrap>
        <BackLink to={'/'}>Go Back</BackLink>
        <Tweets/>
    </TweetsPageWrap>
}
