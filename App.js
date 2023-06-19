import { View } from "react-native";
import { Header, Loader, Modem, Footer, PopUp, Sort } from "./Components";
import { Suspense } from "react";
import { StatusBar } from "expo-status-bar";
import utils from "./utils";

export default function App() {
  const {
    Data,
    decrement,
    increment,
    totalHarga,
    handleReset,
    rupiah,
    modalVisible,
    handleClose,
    handleCheckout,
    sort,
    handleSort,
  } = utils();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Header Total={Data.length} />
      <Suspense fallback={<Loader />}>
        <View style={{ flex: 1 }}>
          <View>
            <Sort sort={sort} handleSort={handleSort} />
          </View>
          <Modem
            Data={Data}
            increment={increment}
            decrement={decrement}
            rupiah={rupiah}
          />
        </View>
        <View>
          <Footer
            TotalHarga={totalHarga}
            handleReset={handleReset}
            rupiah={rupiah}
            handleCheckout={handleCheckout}
          />
        </View>
      </Suspense>
      <PopUp
        Data={Data}
        TotalHarga={totalHarga}
        rupiah={rupiah}
        modalVisible={modalVisible}
        handleClose={handleClose}
      />
    </View>
  );
}
