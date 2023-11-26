import { type ResultData, type ResponseData } from '@/data/types';
import { getCardID } from '@/utils/getCardID';
import { useRouter } from 'next/router';
import { encode } from 'querystring';
import { Aside } from './Sidebar';
import { Content } from './content/Content';
import { Menu } from './Menu';

export default function Main({ data }: { data: ResponseData }) {
  const router = useRouter();

  const parsedURLQueryParams = encode(router.query);

  let cardData: ResultData | null = null;
  let isDetails = false;

  if (parsedURLQueryParams.includes('details=')) {
    const cardID = getCardID(parsedURLQueryParams);
    isDetails = true;
    cardData = data.results?.find((card) => card.id === cardID) ?? null;
  }

  return (
    <main className="">
      <Menu />
      <Content data={data} />
      {isDetails && <Aside data={cardData} />}
    </main>
  );
}
