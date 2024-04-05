import FAQList from './components/FAQList';
import Header from './components/Header';
import FAQHeader from './components/FAQHeader';
import { FAQ_DATA } from '../utils';

export default function App() {
  return (
    <div className="w-full relative">
      <Header />
      <div className="faq-container absolute top-[50%] left-[50%] translate-x-[-50%] bg-white p-5 w-[80%] rounded-lg max-w-[600px]">
        <FAQHeader />
        <FAQList data={FAQ_DATA} />
      </div>
    </div>
  );
}
