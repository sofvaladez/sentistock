import NewsTile from "../components/newstile";
import RevealTicker from "../components/revealticker";

export default function StockAnalysisPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#F0EAD2] px-4 sm:px-8 py-12 ">
      {/* Title */}
      <h1 className="text-4xl font-bold text-[#3d2e16] mb-4 mt-4 text-center">Latest Stock News</h1>

      {/* Description */}
      <p className="text-xl text-[#3d2e16] mb-12 max-w-6xl">
        A selection of trending stocks and news articles relevant to recent events. Click on the tiles to learn more about stock news!
      </p>

      {/* Trending Stocks Section */}
      <h2 className="text-2xl text-[#3d2e16] mb-4 ">Trending Stocks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-12 text-[#3d2e16]">
        <RevealTicker 
          stock_ticker="JNVR" 
          stock_name="Janover Inc." 
          stock_sector="Technology" 
          yfinance_link="https://finance.yahoo.com/quote/JNVR/"
        />
        <RevealTicker 
          stock_ticker="BJDX" 
          stock_name="Bluejay Diagnostics, Inc." 
          stock_sector="Healthcare" 
          yfinance_link="https://finance.yahoo.com/quote/BJDX/"
        />
        <RevealTicker 
          stock_ticker="X" 
          stock_name="United States Steel Corporation" 
          stock_sector="Steel manufacturing" 
          yfinance_link="https://finance.yahoo.com/quote/X/"
        />
        <RevealTicker 
          stock_ticker="SUNE" 
          stock_name="SUNation Energy Inc." 
          stock_sector="Energy" 
          yfinance_link="https://finance.yahoo.com/quote/SUNE/"
        />
        <RevealTicker 
          stock_ticker="MKDW" 
          stock_name="MKDWELL Tech Inc." 
          stock_sector="Automotive" 
          yfinance_link="https://finance.yahoo.com/quote/MKDW/"
        />
        <RevealTicker 
          stock_ticker="CHSN" 
          stock_name="Chanson International Holding" 
          stock_sector="Consumer staples" 
          yfinance_link="https://finance.yahoo.com/quote/CHSN/"
        />
        <RevealTicker 
          stock_ticker="MESA" 
          stock_name="Mesa Air Group, Inc." 
          stock_sector="Aviation" 
          yfinance_link="https://finance.yahoo.com/quote/MESA/"
        />
        <RevealTicker 
          stock_ticker="OKLO" 
          stock_name="Oklo Inc." 
          stock_sector="Technology" 
          yfinance_link="https://finance.yahoo.com/quote/OKLO/"
        />
      </div>

      {/* Grid Layout of NewsTiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-12">
        <NewsTile
          title={"The Complicated Relationship Between Consumer Sentiment and Stocks"}
          article_link="https://www.wsj.com/finance/investing/consumer-sentiment-stock-market-research-68b80102?mod=stocks_news_article_pos1"
          img_src_link="https://images.wsj.net/im-10574555?width=700&size=1.5005861664712778&pixel_ratio=2"
          sector="Finance"
        />
        <NewsTile
          title={"Goldman Boosts Recession Risk, Brings Forward Fed Rate-Cut Call"}
          article_link="https://www.bloomberg.com/news/articles/2025-04-07/goldman-boosts-recession-risk-brings-forward-fed-rate-cut-call?srnd=homepage-americas&embedded-checkout=true"
          img_src_link="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8ulRRseT3KU/v0/-1x-1.jpg"
          sector="Finance"
        />
        <NewsTile
          title={"Bitcoin falls amid tariff rout"}
          article_link="https://finance.yahoo.com/news/bitcoin-last-down-5-78-191053188.html"
          img_src_link="https://s.yimg.com/ny/api/res/1.2/oNSswhcakGAG_L3UWC9JUw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MQ--/https://media.zenfs.com/en/reuters-finance.com/9727c15e2e5b0d64da2efc7a13bd3fab"
          sector="Crypto"
        />
        <NewsTile
          title={"U.S. Stock Futures, Asian Shares Plunge as Tariff Turmoil Deepens"}
          article_link="https://www.wsj.com/livecoverage/stock-market-trump-tariffs-trade-war-04-07-25"
          img_src_link="https://images.wsj.net/im-73208561/social"
          sector="Global Markets"
        />
        <NewsTile
          title={"Here’s What Experts Say You Can Do To Weather the Stock Market’s Tariff Tantrum"}
          article_link="https://www.investopedia.com/thmb/wlVS-9kmhlqQjqm1Via6QDdwQ2k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-2207864161-1f388621ea38492f8c6b5bba5673dfcf.jpg"
          img_src_link="https://www.investopedia.com/thmb/wlVS-9kmhlqQjqm1Via6QDdwQ2k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-2207864161-1f388621ea38492f8c6b5bba5673dfcf.jpg"
          sector="Strategy"
        />
        <NewsTile
          title={"How much do stocks have to drop before trading is halted? The details on market ‘circuit breakers’"}
          article_link="https://www.cnbc.com/2025/04/06/sp-500-circuit-breaker-on-tariff-worries-what-that-means.html"
          img_src_link="https://image.cnbcfm.com/api/v1/image/108127050-17437996212025-04-04t204337z_1652419587_rc28rdaoj551_rtrmadp_0_usa-stocks.jpeg?v=1743799733&w=1260&h=709&ffmt=webp&vtcrop=y"
          sector="Market Mechanics"
        />
      </div>
    </div>
  );
}
