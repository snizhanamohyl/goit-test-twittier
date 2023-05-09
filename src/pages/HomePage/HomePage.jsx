import socialsImg from 'images/social-media.jpg';
import { Descr, Hero, ImgWrap, Title } from "./HomePage.styled";

export default function HomePage() {
    return <Hero>
        <ImgWrap>
            <img src={ socialsImg} alt="Social Media"/>
        </ImgWrap>
                <div>
            <Title>Twittier</Title>
            <Descr>Connect with the world and share your thoughts for social media enthusiasts</Descr>
        </div>
    </Hero>
}