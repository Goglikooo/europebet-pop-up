import "./App.css";
import Header from "./components/header/header";
import Banner from "./components/banner/Banner";
import Headline from "./components/headline/headline";
import MainHeader from "./components/mainHeader/mainHeader";
import MainButtons from "./components/mainButtons/mainButtons";
import Top20Table from "./components/top20Table/Top20Table";
import AllPrizes from "./components/AllPrizes/AllPrizes";
import LeaderBoard from "./components/leaderbordResults/LeaderBoard";
import AdditionalTournaments from "./components/additionalTournaments/additionalTournaments";
import RulesAndConditions from "./components/RulesAndConditions/RulesAndConditions";
import Carousel from "./components/Carousel/Carousel";
import TournamentsAndSatelites from "./components/TournamentsAndSatelites/TournamentsAndSatelites";
import DailyTournaments from "./components/DailyTournaments/DailyTournaments";
import FestivalMalta from "./components/FestivalMalta/FestivalMalta";
import ACategoryTourComponent from "./components/ACategoryTour/ACategoryTourComponent";
import MistiqueKey from "./components/MistiqueKey/MistiqueKey";
import JourneyWin from "./components/winJourney/JourneyWin";
import { useState } from "react";

function App() {
  const [clickedButton, setClickedButton] = useState(1);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Headline />
      <MainHeader />
      <MainButtons num={clickedButton} setClickedButton={setClickedButton} />

      {clickedButton == 1 ? (
        <>
          <LeaderBoard
            mainHeader={"1₾ რეიქი = 1 ქულას"}
            numOfTop20={2}
            topN={20}
          />

          <AdditionalTournaments />
        </>
      ) : null}

      {clickedButton == 2 ? (
        <>
          <TournamentsAndSatelites />
          <LeaderBoard
            mainHeader={
              "მოხვდი TOP22 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით"
            }
            numOfTop20={1}
            topN={22}
            collectCoins={1}
            extraDisclaimer={
              "* სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და სატელიტები"
            }
          />
          <DailyTournaments />
          <AdditionalTournaments />
        </>
      ) : null}

      {clickedButton == 3 ? (
        <>
          <FestivalMalta />
          <JourneyWin />
          <MistiqueKey />
        </>
      ) : null}

      <RulesAndConditions />

      <Carousel />
    </div>
  );
}

export default App;
