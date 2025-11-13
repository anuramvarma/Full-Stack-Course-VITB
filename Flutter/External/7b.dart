import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: MyForm()));

class MyForm extends StatefulWidget {
  @override
  State<MyForm> createState() => _MyFormState();
}

class _MyFormState extends State<MyForm> {
  final name = TextEditingController();
  String error = '', msg = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: name,
              decoration: InputDecoration(hintText: 'Enter name'),
            ),
            if (error.isNotEmpty)
              Text(error, style: TextStyle(color: Colors.red)),
            ElevatedButton(
              onPressed: () {
                setState(() {
                  if (name.text.isEmpty) {
                    error = 'Name required';
                    msg = '';
                  } else {
                    error = '';
                    msg = 'Submitted: ${name.text}';
                    name.clear();
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
