import 'package:flutter/material.dart';
void main(){
  runApp(MaterialApp(
      initialRoute: '/',
      routes: {
        '/' :(context) => Home(),
        '/next' : (context) =>About(),
      },
  ),
  );
}
class Home extends StatelessWidget{

  Widget build(BuildContext context){
    return Scaffold(appBar: AppBar(
      title: Text("Screen 1"),
      centerTitle: true,
      backgroundColor: Colors.purple,
    ),
      body:
    Center(
      child: Container(
        child: Column(
          children: [
            SizedBox(height: 140,),
            Text("flutter internal",style: TextStyle(
              color: const Color.fromARGB(255, 143, 49, 244),
              fontWeight: FontWeight.bold
            ),
            ),
            SizedBox(height: 10,),
            ElevatedButton(onPressed: (){
              Navigator.pushNamed(context, '/next');
            }, 
            child: Text("click me",style:TextStyle(color: Colors.blue),
            ),
            )
          ],
        ),
      ),
    ),
    );
  }
}
class About extends StatelessWidget{
  Widget build(BuildContext context){
    return Scaffold(appBar: AppBar(
      title: Text("Screen2"),
      centerTitle: true,
      backgroundColor: Colors.purple,
    ),
      body:Center(
      child: ElevatedButton(onPressed: (){
        Navigator.pop(context);
      }, 
      child: Text("click here revert back"),
      ),
      ),
     );
  }  
}
