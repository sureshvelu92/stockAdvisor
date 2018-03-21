import React, { Component } from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';

import StockCard from './StockCard';
import { stocks } from '../utils/StockList';


class StockContainer extends Component {

    componentWillMount() {
     
    }

    renderStockCards() {
      console.log(stocks);
        return stocks.map((stock) => 
            <StockCard 
            key={stock.stockName}
            stock_name={stock.stockName}
            stock_code={stock.stockCode}
            stock_type={stock.stockType}
            buy={stock.buy}
            sell={stock.sell}
            sl={stock.sl}
            verdict={stock.verdict}
              
            />
        ) 
    }


    render() {

        return (
            <ScrollView>
                {this.renderStockCards()}
            </ScrollView>
        )
        

    }
}
export default StockContainer;




