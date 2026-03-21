//Components
import { NextSeo } from 'next-seo';
import MainNode from '@/components/main';

//i18n
import { useLocale } from '@/lib/i18n';
import index from '@/lib/i18n/config/indexConfig';

//Methods
import getTitle from '@/lib/title';

export default function Home() {
    const { locale } = useLocale(index);
    return (
        <MainNode>
            <NextSeo title={getTitle()} />
            <p>{locale('selectingText')}</p>
        </MainNode>
    );
}
