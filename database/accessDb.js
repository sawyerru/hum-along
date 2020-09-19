import { openDatabase } from 'react-native-sqlite-storage';

export default accessDb = (setSongs) => {
    var db = openDatabase({ name: 'songs.db' });
    db.transaction(function(txn) {
        txn.executeSql(
          "From songs SELECT *",                 //Query to execute as prepared statement
          [],      //Argument to pass for the prepared statement
          (_, set) => {
              setSongs(set.rows['_array']) //sets array to be returned
          },
          (_, err) => {
              console.log(err)
          }//Callback function to handle the result
      );
    })
}
    