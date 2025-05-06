import { useState } from 'react';
import ProductCard from './component/views/home/ProductCardComponent';
import AuctionStatusBadge from './component/views/home/AuctionStatusBadge';
import CardLayout from './component/layout/CardLayout';
import SectionContainer from './component/layout/SectionContainer'
import AuctionFilterSidebar from './component/views/home/AuctionFilterSidebar';
import BidFormComponent from './component/views/home/BidFormComponent';
import BidHistory from './component/views/home/BidHistory';
import CountdownTimerComponent from './component/views/home/CountdownTimerComponent';

function App() {
  const [count, setCount] = useState(0);

  const featuredItems = [
    {
      id: 1,
      title: "Antique Chinese Vase",
      description: "Qing Dynasty, 18th Century",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      currentBid: 1250.00,
      bidsCount: 12,
      timeLeft: "2h 15m",
      status: "live"
    },
    {
      id: 2,
      title: "Vintage Rolex Watch",
      description: "1960s Submariner",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      currentBid: 8500.00,
      bidsCount: 8,
      timeLeft: "1h 45m",
      status: "live"
    }
  ];

  return (
    <>
      <SectionContainer title="Featured Auctions" subtitle="Discover rare and unique items up for bid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map(item => (
            <ProductCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              currentBid={item.currentBid}
              bidsCount={item.bidsCount}
              timeLeft={item.timeLeft}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CardLayout title="Auction Details">
              <div className="flex items-center mb-4">
                <AuctionStatusBadge status="live" />
                <span className="ml-2 text-sm text-gray-600">Auction ends in 2 hours</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Antique Chinese Vase</h2>
              <p className="text-gray-600 mb-4">Qing Dynasty, 18th Century. This exquisite vase features traditional blue and white porcelain with intricate dragon motifs.</p>
              <CountdownTimerComponent />
            </CardLayout>

            <CardLayout title="Bid Now" className="mt-6">
              <BidFormComponent />
            </CardLayout>
          </div>

          <div>
            <AuctionFilterSidebar />
            <CardLayout title="Bid History" className="mt-6">
              <BidHistory />
            </CardLayout>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}

export default App;
