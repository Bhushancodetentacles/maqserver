import React, { useState } from "react";
import Header from "./header1";
import Footer from "./Footer1";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Assetdetails from './pages/Assetdetails';
import Converttousdt from './pages/converttousdt';
import Deposit from './pages/Deposit';
import Transfer from './pages/Transfer';
import Withdraw from './pages/Withdraw';
import Sidebar from './Sidebar';
export default function AssetBalance() {

    const [dataFromA, setDataFromA] = useState('');

    const handleDataFromA = (data) => {
        console.log("data")
        console.log(data)
        setDataFromA(data);
      };

    return (
        <div>
            <Header onDataToParent={handleDataFromA}></Header>
            
            <main className="w-full">
            <div className="relative">
            <Sidebar dataFromA={dataFromA} ></Sidebar>
            </div>
                <section className="balance-section mx-auto pb-32 pt-32">
                       
                        <div className="lg:max-w-screen-lg lg:mx-auto my-5 w-full">
                        <h2 className="text-2xl md:text-3xl lg:text-3xl pb-4 font-bold text-left text-slate-700 ">Asset</h2>
                            <Tabs className="">
                                <TabList className="border-0 cursor-pointer ul_tablist mb-7  gap-4 inline-flex">
                                    <Tab className="border-0 text-gray-500  py-3 px-4">Asset Details</Tab>
                                    <Tab className="border-0 text-gray-500  py-3 px-4">Deposit</Tab>
                                    <Tab className="border-0 text-gray-500  py-3 px-4">Withdraw</Tab>
                                    <Tab className="border-0 text-gray-500  py-3 px-4">Transfer</Tab>
                                    <Tab className="border-0 text-gray-500  py-3 px-4">Convert to USDT</Tab>
                                </TabList>
                                <div className="py-2">
                                    <TabPanel>
                                        <Assetdetails></Assetdetails>
                                    </TabPanel>
                                    <TabPanel>
                                        <Deposit></Deposit>
                                    </TabPanel>
                                    <TabPanel>
                                        <Withdraw></Withdraw>
                                    </TabPanel>
                                    <TabPanel>
                                        <Transfer></Transfer>
                                    </TabPanel>
                                    <TabPanel>
                                        <Converttousdt></Converttousdt>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                </section>
            </main>
           <Footer></Footer>
        </div>
    )
}