import 'package:flutter/material.dart';
void main() => runApp(MaterialApp(home: MyForm()));
class MyForm extends StatefulWidget 
{
  @override
  State<MyForm> createState() => _MyFormState();
}
class _MyFormState extends State<MyForm> 
{
  final name = TextEditingController();
  final email = TextEditingController();
  String error = '', msg = '';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(controller: name, decoration: InputDecoration(hintText: 'Enter Name')),
            TextField(controller: email, decoration: InputDecoration(hintText: 'Enter Email')),
            if (error.isNotEmpty) Text(error, style: TextStyle(color: Colors.red)),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  if (name.text.isEmpty || email.text.isEmpty) {
                    error = 'Both Name and Email are required!';
                    msg = '';
                  } else {
                    error = '';
                    msg = 'Name: ${name.text}, Email: ${email.text}';
                    name.clear();
                    email.clear();
                  }
                });
              },
              child: Text('Submit'),
            ),
            Text(msg),
          ],
        ),
      ),
    );
  }
}
