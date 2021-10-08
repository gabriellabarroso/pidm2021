import React, {Component} from 'react'
import {Text, View} from 'react-native'

class Aluno extends Component{
    render(){

        return (
            <View>
                <Text style={{fontsize:18}}>
                    Gabriella Maciel Barroso 
                </Text>
                <Text style={{fontsize:18}}>
                    24 anos
                </Text>
                <Text style={{fontsize:18}}>
                    Canindé-CE 
                </Text>
                <Text style={{fontsize:18}}>
                    Design Digital 
                </Text>
            </View>
        )        
        
    }
}

export default Aluno