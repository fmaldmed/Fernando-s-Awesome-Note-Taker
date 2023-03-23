const app = express();

app.use(express.json());
app.use(express.urlencodes({extended:true}));

app.use(express.static('public'));

require('./public/routes/api.js')(app);
require('./public/routes/html.js')(app);

app.listen(PORT, () => 
console.log(`app listening in http://localhost:${PORT}`)
);