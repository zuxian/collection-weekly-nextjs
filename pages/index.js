import Image from "next/image";
import { createStore, useAppDispatch, useAppSelector } from '../stores/index'
import { selectHomeData, getHomeList } from '../stores/homeStore/index'


export default function IndexPage() {
  // const dispatch = useAppDispatch()
  const store = useAppSelector(selectHomeData)
  const { cardList } = store
  if (!cardList.length) return null;
  const reverseList = cardList.slice().reverse();
  console.log('---IndexPage--cardList--', reverseList)
  return (
    <div className="flex flex-row items-center justify-center space-y-12">
      <div>
        {reverseList.map(card => (
          <div key={card.id}> {card.datetime}  </div>
        ))}
      </div>
      <Image
        src="/team-of-critters.svg"
        alt="Four one-eyed aliens playing"
        width={576}
        height={429.734}
        priority
      />
      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Hi! Welcome to your first Next.js site.
      </h2>
    </div>
  );
}

export async function getStaticProps () {
  const store = createStore()
  await store.dispatch(getHomeList('python'))

  return {
    props: {
      state: store.getState()
    }
  }
}
