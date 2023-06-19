import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const utils = () => {
  const [Data, setData] = useState([]);
  const [totalHarga, setTotalharga] = useState(0);
  const [sort, setSort] = useState({ value: null });
  const [modalVisible, setModalVisible] = useState(false);

  const handleReset = () => {
    const newData = [...Data];

    newData.forEach((element) => {
      element.qty = 0;
    });

    setData(newData);
  };
  const handleSort = (e) => {
    setSort(e);
    const newData = [...Data];
    if (e.value === 1) {
      newData.sort((a, b) => b.price - a.price);
      setData(newData);
    } else if (e.value === 2) {
      newData.sort((a, b) => a.price - b.price);
      setData(newData);
    } else if (e.value === 3) {
      newData.sort((a, b) => a.title.localeCompare(b.title));
      setData(newData);
    }
  };
  const handleCheckout = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
    handleReset();
  };

  const increment = (val) => {
    const newData = [...Data];

    newData.forEach((element) => {
      if (val.id === element.id && element.qty < element.stock) {
        element.qty = element.qty + 1;
      }
    });
    setData(newData);
  };

  const decrement = (val) => {
    const newData = [...Data];

    newData.forEach((element) => {
      if (val.id === element.id && element.qty >= 0) {
        element.qty = element.qty - 1;
      }
    });
    setData(newData);
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  const getProduct = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      if (res) {
        res.data.products.forEach((element) => {
          element.qty = 0;
        });
        setData(res.data.products);
      } else {
        Alert.alert(res.message);
      }
    } catch (err) {
      Alert.alert("Error unknown." + err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (Data.length > 0) {
      let TotalTemp = 0;
      Data.forEach((e) => {
        TotalTemp += e.qty * e.price;
      });
      setTotalharga(TotalTemp);
    }
  }, [Data]);

  return {
    increment,
    decrement,
    Data,
    totalHarga,
    handleReset,
    rupiah,
    modalVisible,
    handleClose,
    handleCheckout,
    sort,
    handleSort,
  };
};
export default utils;
