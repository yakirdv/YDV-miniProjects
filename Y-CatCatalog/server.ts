import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 4003;

app.use(express.static('public'));
app.use(express.json())

app.listen(port, () => {
	console.log(`app url: http://localhost:${port}`);
});

//replace db credentials with yours because security policy for ip address
let db_cert = 'mongodb+srv://ydmdb:IGchVS9ngHE0dhei@cluster0.awpuo3k.mongodb.net/myDB?retryWrites=true&w=majority';
mongoose
	.connect(db_cert)
	.then(() => {
		console.log(`connected to DB`);
	})
	.catch((err) => console.log(err));


    import CatsRoute from './routes/catsRoute';
    app.use('/cats', CatsRoute);

	