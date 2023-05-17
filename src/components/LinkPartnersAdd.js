import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import globalStyles from '../../utils/globalStyles'
import { Button } from 'react-native-paper'

const LinkPartnersAdd = (props) => {
  return (
    <View style={styles.relationship}>
        <View style={styles.Image}>
            <Image source={{uri : props.image}} style={styles.img}/>
                <View style={styles.textName}>
                    <Text style={[globalStyles.mainText, {fontSize: 20}]}>{props.firstname}</Text>
                </View>
        </View>
            <View>
                <TouchableOpacity>
                    <Button
                        style={styles.btn}
                        mode="contained" >
                            Add
                    </Button>
                </TouchableOpacity>
            </View>
    </View>
  )
}
const styles = StyleSheet.create({
img: {
    width: 60,
    height: 60,
    borderRadius: 50,
 },
    Image: {
        flexDirection: "row",
        alignItems: "center",
},
textName: {
    marginLeft: 10,
},
btn: {
    backgroundColor: globalStyles.primaryColor,
    borderRadius: 10,
    width: 110,
    height: 40,
},
relationship: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 20,
},
})

export default LinkPartnersAdd