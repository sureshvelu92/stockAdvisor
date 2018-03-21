import React from 'react';
import { 
    View,
 
    StyleSheet,
    Image
} from 'react-native';

import { Container, Content, Left, Body, Text ,Card, CardItem} from 'native-base';

const styles = StyleSheet.create({
    seperator: {
        marginTop: 5,
    },
    stockType: {
        marginTop: 5,
       
        marginRight: 5,
        fontWeight: "bold",        
    },
 
})

const { 
 
    seperator,
    stockType
 
} = styles;

const StockCard = ({  stock_name,stock_code,stock_type,buy,sell,sl,verdict }) => {
 
    
    return (

       

             <Content>
      <Card>
            <CardItem header >
            <Left>
             <Text>{stock_name}</Text>
             </Left>
            </CardItem>
            <CardItem>
                <Text style={stockType}>{stock_type}:{stock_code}</Text>
                <Text style={seperator}> | </Text>

                <Text style={stockType}>Buy: {buy}</Text>
                <Text style={seperator}> | </Text>
                <Text style={stockType}>Sell: {sell}</Text>
                </CardItem>
                <CardItem>
               
                <Text style={stockType}>SL: {sl}</Text>
                <Text style={seperator}> | </Text>
                <Text style={stockType}> {verdict}</Text>
   
             
            </CardItem>
            
         </Card>
      </Content>
       
    );
}



export default StockCard;