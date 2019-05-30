const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user.models");
const Trip = require("../models/trip.models")
const Schema = mongoose.Schema;
require("dotenv").config()

const bcryptSalt = 10;

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
    email: "alice@alice.com",
    firstName: "Alice",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "pepe",
    password: bcrypt.hashSync("pepe", bcrypt.genSaltSync(bcryptSalt)),
    email: "pepe@pepe.com",
    firstName: "Pepee",
    lastName: "Sanchez",
    birthday: 24 / 11 / 1982,
    phone: 656477389,




  },
  {
    username: "raul",
    password: bcrypt.hashSync("raul", bcrypt.genSaltSync(bcryptSalt)),
    email: "raul@raul.com",
    firstName: "Raul",
    lastName: "Perez",
    birthday: 24 / 11 / 1983,
    phone: 656477382,




  },
  {
    username: "maria",
    password: bcrypt.hashSync("maria", bcrypt.genSaltSync(bcryptSalt)),
    email: "maria@maria.com",
    firstName: "Maria",
    lastName: "Garcia",
    birthday: 24 / 11 / 1984,
    phone: 656477380,




  },
  {
    username: "ana",
    password: bcrypt.hashSync("ana", bcrypt.genSaltSync(bcryptSalt)),
    email: "ana@ana.com",
    firstName: "Ana",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "tomás",
    password: bcrypt.hashSync("tomas", bcrypt.genSaltSync(bcryptSalt)),
    email: "tomas@tomas.com",
    firstName: "Tomas",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1985,
    phone: 656477388,




  },
  {
    username: "lucia",
    password: bcrypt.hashSync("lucia", bcrypt.genSaltSync(bcryptSalt)),
    email: "lucia@alice.com",
    firstName: "Lucia",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 6564797388,




  },
  {
    username: "cris",
    password: bcrypt.hashSync("cris", bcrypt.genSaltSync(bcryptSalt)),
    email: "cris@alice.com",
    firstName: "Cristina",
    lastName: "Vegas",
    birthday: 24 / 07 / 1981,
    phone: 65647588,




  },
  {
    username: "guille",
    password: bcrypt.hashSync("guille", bcrypt.genSaltSync(bcryptSalt)),
    email: "guille@alice.com",
    firstName: "Guille",
    lastName: "Valle-Iturriaga",
    birthday: 09 / 07 / 2010,
    phone: 658777388,




  },
  {
    username: "olivia",
    password: bcrypt.hashSync("olivia", bcrypt.genSaltSync(bcryptSalt)),
    email: "olivia@alice.com",
    firstName: "Olivia",
    lastName: "Valle-Iturriaga",
    birthday: 18 / 03 / 2015,
    phone: 656477388,




  },
  {
    username: "lola",
    password: bcrypt.hashSync("lola", bcrypt.genSaltSync(bcryptSalt)),
    email: "lola@alice.com",
    firstName: "Lola",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "tonecho",
    password: bcrypt.hashSync("tonecho", bcrypt.genSaltSync(bcryptSalt)),
    email: "tonecho@alice.com",
    firstName: "Tonecho",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "anton",
    password: bcrypt.hashSync("anton", bcrypt.genSaltSync(bcryptSalt)),
    email: "anton@alice.com",
    firstName: "Anton",
    lastName: "Astray",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "sabela",
    password: bcrypt.hashSync("sabela", bcrypt.genSaltSync(bcryptSalt)),
    email: "sabela@alice.com",
    firstName: "Sabela",
    lastName: "Astray",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "rosalia",
    password: bcrypt.hashSync("rosalia", bcrypt.genSaltSync(bcryptSalt)),
    email: "rosalia@alice.com",
    firstName: "Rosalia",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "rocio",
    password: bcrypt.hashSync("rocio", bcrypt.genSaltSync(bcryptSalt)),
    email: "rocio@alice.com",
    firstName: "Rocio",
    lastName: "Astray",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "david",
    password: bcrypt.hashSync("david", bcrypt.genSaltSync(bcryptSalt)),
    email: "david@alice.com",
    firstName: "David",
    lastName: "Gomez",
    birthday: 11 / 03 / 1989,
    phone: 656477388,




  },
  {
    username: "santi",
    password: bcrypt.hashSync("santi", bcrypt.genSaltSync(bcryptSalt)),
    email: "santi@alice.com",
    firstName: "Santi",
    lastName: "Astray",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "noah",
    password: bcrypt.hashSync("noah", bcrypt.genSaltSync(bcryptSalt)),
    email: "noah@alice.com",
    firstName: "Noah",
    lastName: "One Ten",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "juan",
    password: bcrypt.hashSync("juan", bcrypt.genSaltSync(bcryptSalt)),
    email: "juan@alice.com",
    firstName: "Juan",
    lastName: "Gago",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "german",
    password: bcrypt.hashSync("german", bcrypt.genSaltSync(bcryptSalt)),
    email: "germane@alice.com",
    firstName: "German",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "sachin",
    password: bcrypt.hashSync("sachin", bcrypt.genSaltSync(bcryptSalt)),
    email: "sachin@alice.com",
    firstName: "Sachin",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "gabi",
    password: bcrypt.hashSync("gabi", bcrypt.genSaltSync(bcryptSalt)),
    email: "gabi@alice.com",
    firstName: "Gabi",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "raluca",
    password: bcrypt.hashSync("raluca", bcrypt.genSaltSync(bcryptSalt)),
    email: "raluca@alice.com",
    firstName: "Raluca",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "paula",
    password: bcrypt.hashSync("paula", bcrypt.genSaltSync(bcryptSalt)),
    email: "paula@alice.com",
    firstName: "Paula",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "tino",
    password: bcrypt.hashSync("tino", bcrypt.genSaltSync(bcryptSalt)),
    email: "tino@alice.com",
    firstName: "Tino",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "toto",
    password: bcrypt.hashSync("toto", bcrypt.genSaltSync(bcryptSalt)),
    email: "toto@alice.com",
    firstName: "Anthony",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "teo",
    password: bcrypt.hashSync("teo", bcrypt.genSaltSync(bcryptSalt)),
    email: "teo@alice.com",
    firstName: "Teo",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "jorge",
    password: bcrypt.hashSync("jorge", bcrypt.genSaltSync(bcryptSalt)),
    email: "jorge@alice.com",
    firstName: "Jorge",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "manu",
    password: bcrypt.hashSync("manu", bcrypt.genSaltSync(bcryptSalt)),
    email: "manu@alice.com",
    firstName: "Manu",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "ben",
    password: bcrypt.hashSync("ben", bcrypt.genSaltSync(bcryptSalt)),
    email: "ben@pepe.com",
    firstName: "Benjamin",
    lastName: "Sanchez",
    birthday: 24 / 11 / 1982,
    phone: 656477389,




  },
  {
    username: "sito",
    password: bcrypt.hashSync("sito", bcrypt.genSaltSync(bcryptSalt)),
    email: "sito@raul.com",
    firstName: "Sito",
    lastName: "Perez",
    birthday: 24 / 11 / 1983,
    phone: 656477382,




  },
  {
    username: "melisa",
    password: bcrypt.hashSync("melisa", bcrypt.genSaltSync(bcryptSalt)),
    email: "melisa@maria.com",
    firstName: "Melisa",
    lastName: "Garcia",
    birthday: 24 / 11 / 1984,
    phone: 656477380,




  },
  {
    username: "noela",
    password: bcrypt.hashSync("noela", bcrypt.genSaltSync(bcryptSalt)),
    email: "noela@ana.com",
    firstName: "Noela",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "elena",
    password: bcrypt.hashSync("elena", bcrypt.genSaltSync(bcryptSalt)),
    email: "elena@tomas.com",
    firstName: "Elena",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "carmela",
    password: bcrypt.hashSync("carmela", bcrypt.genSaltSync(bcryptSalt)),
    email: "carmela@alice.com",
    firstName: "Carmela",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "isa",
    password: bcrypt.hashSync("isa", bcrypt.genSaltSync(bcryptSalt)),
    email: "isa@alice.com",
    firstName: "Isa",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "borja",
    password: bcrypt.hashSync("borja", bcrypt.genSaltSync(bcryptSalt)),
    email: "borja@alice.com",
    firstName: "Borja",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "pepelu",
    password: bcrypt.hashSync("pepelu", bcrypt.genSaltSync(bcryptSalt)),
    email: "pepelu@alice.com",
    firstName: "Pepelu",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "jose",
    password: bcrypt.hashSync("jose", bcrypt.genSaltSync(bcryptSalt)),
    email: "jose@alice.com",
    firstName: "Jose",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "lichi",
    password: bcrypt.hashSync("lichi", bcrypt.genSaltSync(bcryptSalt)),
    email: "lichi@alice.com",
    firstName: "Lichi",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "isaac",
    password: bcrypt.hashSync("isaac", bcrypt.genSaltSync(bcryptSalt)),
    email: "isaac@alice.com",
    firstName: "Isaac",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "saioa",
    password: bcrypt.hashSync("saioa", bcrypt.genSaltSync(bcryptSalt)),
    email: "saioa@alice.com",
    firstName: "Saioa",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "rocis",
    password: bcrypt.hashSync("rocis", bcrypt.genSaltSync(bcryptSalt)),
    email: "rocis@alice.com",
    firstName: "Rocio",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "paloma",
    password: bcrypt.hashSync("paloma", bcrypt.genSaltSync(bcryptSalt)),
    email: "paloma@alice.com",
    firstName: "paloma",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "bea",
    password: bcrypt.hashSync("bea", bcrypt.genSaltSync(bcryptSalt)),
    email: "bea@alice.com",
    firstName: "Bea",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "aina",
    password: bcrypt.hashSync("aina", bcrypt.genSaltSync(bcryptSalt)),
    email: "aina@alice.com",
    firstName: "Aina",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "sara",
    password: bcrypt.hashSync("sara", bcrypt.genSaltSync(bcryptSalt)),
    email: "sara@alice.com",
    firstName: "Sara",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "elisa",
    password: bcrypt.hashSync("elisa", bcrypt.genSaltSync(bcryptSalt)),
    email: "elisa@alice.com",
    firstName: "Elisa",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "almudena",
    password: bcrypt.hashSync("almudena", bcrypt.genSaltSync(bcryptSalt)),
    email: "almudena@alice.com",
    firstName: "Almudena",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "chimo",
    password: bcrypt.hashSync("chimo", bcrypt.genSaltSync(bcryptSalt)),
    email: "chimo@alice.com",
    firstName: "Chimo",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "javier",
    password: bcrypt.hashSync("javier", bcrypt.genSaltSync(bcryptSalt)),
    email: "javier@alice.com",
    firstName: "javier",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "vicki",
    password: bcrypt.hashSync("vicki", bcrypt.genSaltSync(bcryptSalt)),
    email: "vicki@alice.com",
    firstName: "Vicki",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "asier",
    password: bcrypt.hashSync("asier", bcrypt.genSaltSync(bcryptSalt)),
    email: "asier@alice.com",
    firstName: "Asier",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "telmo",
    password: bcrypt.hashSync("telmo", bcrypt.genSaltSync(bcryptSalt)),
    email: "telmo@alice.com",
    firstName: "Telmo",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "bruno",
    password: bcrypt.hashSync("bruno", bcrypt.genSaltSync(bcryptSalt)),
    email: "bruno@alice.com",
    firstName: "Bruno",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "enrique",
    password: bcrypt.hashSync("enrique", bcrypt.genSaltSync(bcryptSalt)),
    email: "enrique@alice.com",
    firstName: "Enrique",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "luis",
    password: bcrypt.hashSync("luis", bcrypt.genSaltSync(bcryptSalt)),
    email: "luis@alice.com",
    firstName: "Luis",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  }, {
    username: "cesar",
    password: bcrypt.hashSync("cesar", bcrypt.genSaltSync(bcryptSalt)),
    email: "cesar@alice.com",
    firstName: "Cesar",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "rosa",
    password: bcrypt.hashSync("rosa", bcrypt.genSaltSync(bcryptSalt)),
    email: "rosa@pepe.com",
    firstName: "Rosa",
    lastName: "Sanchez",
    birthday: 24 / 11 / 1982,
    phone: 656477389,




  },
  {
    username: "rebe",
    password: bcrypt.hashSync("rebe", bcrypt.genSaltSync(bcryptSalt)),
    email: "rebe@raul.com",
    firstName: "Rebe",
    lastName: "Perez",
    birthday: 24 / 11 / 1983,
    phone: 656477382,




  },
  {
    username: "jacobo",
    password: bcrypt.hashSync("jacobo", bcrypt.genSaltSync(bcryptSalt)),
    email: "jacobo@maria.com",
    firstName: "Jacobo",
    lastName: "Garcia",
    birthday: 24 / 11 / 1984,
    phone: 656477380,




  },
  {
    username: "ane",
    password: bcrypt.hashSync("ane", bcrypt.genSaltSync(bcryptSalt)),
    email: "ane@ana.com",
    firstName: "Ane",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "carmen",
    password: bcrypt.hashSync("carmen", bcrypt.genSaltSync(bcryptSalt)),
    email: "carmen@tomas.com",
    firstName: "Carmen",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "abel",
    password: bcrypt.hashSync("abel", bcrypt.genSaltSync(bcryptSalt)),
    email: "abel@alice.com",
    firstName: "Abel",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "javi",
    password: bcrypt.hashSync("javi", bcrypt.genSaltSync(bcryptSalt)),
    email: "javi@alice.com",
    firstName: "Javi",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "dani",
    password: bcrypt.hashSync("dani", bcrypt.genSaltSync(bcryptSalt)),
    email: "dani@alice.com",
    firstName: "Dani",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "carlos",
    password: bcrypt.hashSync("carlos", bcrypt.genSaltSync(bcryptSalt)),
    email: "carlos@alice.com",
    firstName: "Carlos",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "dan",
    password: bcrypt.hashSync("dan", bcrypt.genSaltSync(bcryptSalt)),
    email: "dan@alice.com",
    firstName: "Dan",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "paco",
    password: bcrypt.hashSync("paco", bcrypt.genSaltSync(bcryptSalt)),
    email: "paco@alice.com",
    firstName: "Paco",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "anthony",
    password: bcrypt.hashSync("anthony", bcrypt.genSaltSync(bcryptSalt)),
    email: "anthony@alice.com",
    firstName: "Anthony",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "luca",
    password: bcrypt.hashSync("luca", bcrypt.genSaltSync(bcryptSalt)),
    email: "luca@alice.com",
    firstName: "Luca",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "alessio",
    password: bcrypt.hashSync("alessio", bcrypt.genSaltSync(bcryptSalt)),
    email: "alessio@alice.com",
    firstName: "Alessio",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "laura",
    password: bcrypt.hashSync("laura", bcrypt.genSaltSync(bcryptSalt)),
    email: "laura@alice.com",
    firstName: "Laura",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "miriam",
    password: bcrypt.hashSync("miriam", bcrypt.genSaltSync(bcryptSalt)),
    email: "miriam@alice.com",
    firstName: "Miriam",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "marina",
    password: bcrypt.hashSync("marina", bcrypt.genSaltSync(bcryptSalt)),
    email: "marina@alice.com",
    firstName: "Marina",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "sonia",
    password: bcrypt.hashSync("sonia", bcrypt.genSaltSync(bcryptSalt)),
    email: "sonia@alice.com",
    firstName: "Sonia",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "carolina",
    password: bcrypt.hashSync("carolina", bcrypt.genSaltSync(bcryptSalt)),
    email: "carolina@alice.com",
    firstName: "Carolina",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "barbara",
    password: bcrypt.hashSync("barbar", bcrypt.genSaltSync(bcryptSalt)),
    email: "barbara@alice.com",
    firstName: "Barbara",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "xabi",
    password: bcrypt.hashSync("xabi", bcrypt.genSaltSync(bcryptSalt)),
    email: "xabi@alice.com",
    firstName: "Xabi",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "igor",
    password: bcrypt.hashSync("igor", bcrypt.genSaltSync(bcryptSalt)),
    email: "igor@alice.com",
    firstName: "Igor",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "urco",
    password: bcrypt.hashSync("urco", bcrypt.genSaltSync(bcryptSalt)),
    email: "urco@alice.com",
    firstName: "Urco",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "lucas",
    password: bcrypt.hashSync("lucas", bcrypt.genSaltSync(bcryptSalt)),
    email: "lucas@alice.com",
    firstName: "Lucas",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "marcos",
    password: bcrypt.hashSync("marcos", bcrypt.genSaltSync(bcryptSalt)),
    email: "marcos@alice.com",
    firstName: "Marcos",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "mateo",
    password: bcrypt.hashSync("mateo", bcrypt.genSaltSync(bcryptSalt)),
    email: "mateo@alice.com",
    firstName: "Mateo",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "mario",
    password: bcrypt.hashSync("mario", bcrypt.genSaltSync(bcryptSalt)),
    email: "mario@alice.com",
    firstName: "Mario",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },
  {
    username: "belen",
    password: bcrypt.hashSync("belen", bcrypt.genSaltSync(bcryptSalt)),
    email: "belen@alice.com",
    firstName: "Belen",
    lastName: "Rodríguez",
    birthday: 24 / 11 / 1981,
    phone: 656477388,




  },

]

users.forEach(user => user.myTrips = [])

User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    const ids = usersCreated.map(u => u._id)

    console.log(ids)

    const randomId = (arr) => {
      console.log(Math.floor(Math.random() * arr.length))
      // console.log(arr[Math.floor(Math.random * arr.length)])
      return arr[Math.floor(Math.random() * arr.length)]
    }

    let trips = [
      {
        creatorID: randomId(ids),
        title: "Puente Vallecas- Moratalaz",
        originNeighb: "Puente Vallecas",
        destNeighb: "Moratalaz",
        origin: "c/ del Hachero 8",
        originCoordinates: [Number],
        destination: "Avda. Moratalaz 10",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Puente Vallecas- Ciudad Lineal",
        originNeighb: "Puente Vallecas",
        destNeighb: "Ciudad Lineal",
        origin: "c/ del Hachero 10",
        originCoordinates: [Number],
        destination: "c/ Arturio Soria",
        destinationCoordinates: [Number],
        day: 03 / 06 / 2019,
        time: "08:00",
        passengers: 2,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Puente Vallecas- Hortaleza",
        originNeighb: "Puente Vallecas",
        destNeighb: "Hortaleza",
        origin: "c/ Encarnación Gonzalez 4",
        originCoordinates: [Number],
        destination: "c/ de Valdetorres de Jarama 5",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "09:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "corsa",

      },
      {
        creatorID: randomId(ids),
        title: "Puente Vallecas- Chamartín",
        originNeighb: "Puente Vallecas",
        destNeighb: "Chamartin",
        origin: "c/ Palomeras",
        originCoordinates: [Number],
        destination: "c/ Félix de Boix 8",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "mini",

      },
      {
        creatorID: randomId(ids),
        title: "Puente Vallecas- Carabanchel",
        originNeighb: "Puente Vallecas",
        destNeighb: "Carabanchel",
        origin: "c/ Gregorio Navas",
        originCoordinates: [Number],
        destination: "c/ José Cárdenas 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Puente Vallecas- Usera",
        originNeighb: "Puente Vallecas",
        destNeighb: "Usera",
        origin: "c/ San Jorge",
        originCoordinates: [Number],
        destination: "c/ Madridejos 6",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "08:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Puente Vallecas- Las Tablas",
        originNeighb: "Puente Vallecas",
        destNeighb: "Las Tablas",
        origin: "c/ de Manuel Maroto 9",
        originCoordinates: [Number],
        destination: "Viloria de la Rioja 5",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Puente Vallecas- El Pilar",
        originNeighb: "Puente Vallecas",
        destNeighb: "El Pilar",
        origin: "c/ de Manuel Maroto 1",
        originCoordinates: [Number],
        destination: "c/ Fermín Caballero 7",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "06:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Puente Vallecas- Latina",
        originNeighb: "Puente Vallecas",
        destNeighb: "Latina",
        origin: "c/ Encarnación Gonzalez 3",
        originCoordinates: [Number],
        destination: "c/ Ribota 8",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Ciudad Lineal",
        originNeighb: "Moratalaz",
        destNeighb: "Ciudad Lineal",
        origin: "c/ Entre Arroyos 3",
        originCoordinates: [Number],
        destination: "c/ Amara 8",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Hortaleza",
        originNeighb: "Moratalaz",
        destNeighb: "Hortaleza",
        origin: "c/ Carmen Amaya 8",
        originCoordinates: [Number],
        destination: "c/ Torregrosa 7",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Chamartin",
        originNeighb: "Moratalaz",
        destNeighb: "Chamartin",
        origin: "c/ del Arroyo Belincoso 12",
        originCoordinates: [Number],
        destination: "c/ San Telmo 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Carabanchel",
        originNeighb: "Moratalaz",
        destNeighb: "Carabanchel",
        origin: "c/ del Corregidor Diego Cabeza de Vaca 4",
        originCoordinates: [Number],
        destination: "c/ Patilla 5",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Usera",
        originNeighb: "Moratalaz",
        destNeighb: "Usera",
        origin: "c/ Entre Arroyos 1",
        originCoordinates: [Number],
        destination: "c/ Gabriel Usera 9",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Las Tablas",
        originNeighb: "Moratalaz",
        destNeighb: "Las Tablas",
        origin: "Avd. del Dr. García Tapia 7",
        originCoordinates: [Number],
        destination: "c/ Palas de Rey 9",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- El Pilar",
        originNeighb: "Moratalaz",
        destNeighb: "El Pilar",
        origin: "c/ Entre Arroyos 6",
        originCoordinates: [Number],
        destination: "Avd. Monforte de Lemos 20",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Latina",
        originNeighb: "Moratalaz",
        destNeighb: "Latina",
        origin: "c/ del Camino de los vinateros 3",
        originCoordinates: [Number],
        destination: "Gregorio Vacas 7",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Ciudad Lineal- Puente Vallecas",
        originNeighb: "Ciudad Lineal",
        destNeighb: "Puente Vallecas",
        origin: "c/ de Astia 7",
        originCoordinates: [Number],
        destination: "Palomeras 8",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Chamartin",
        originNeighb: "Moratalaz",
        destNeighb: "Chamartin",
        origin: "c/ del Arroyo Belincoso 12",
        originCoordinates: [Number],
        destination: "c/ San Telmo 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Carabanchel",
        originNeighb: "Moratalaz",
        destNeighb: "Carabanchel",
        origin: "c/ del Corregidor Diego Cabeza de Vaca 4",
        originCoordinates: [Number],
        destination: "c/ Patilla 5",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Usera",
        originNeighb: "Moratalaz",
        destNeighb: "Usera",
        origin: "c/ Entre Arroyos 1",
        originCoordinates: [Number],
        destination: "c/ Gabriel Usera 9",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Las Tablas",
        originNeighb: "Moratalaz",
        destNeighb: "Las Tablas",
        origin: "Avd. del Dr. García Tapia 7",
        originCoordinates: [Number],
        destination: "c/ Palas de Rey 9",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- El Pilar",
        originNeighb: "Moratalaz",
        destNeighb: "El Pilar",
        origin: "c/ Entre Arroyos 6",
        originCoordinates: [Number],
        destination: "Avd. Monforte de Lemos 20",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Moratalaz- Latina",
        originNeighb: "Moratalaz",
        destNeighb: "Latina",
        origin: "c/ del Camino de los vinateros 3",
        originCoordinates: [Number],
        destination: "Gregorio Vacas 7",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Ciudad Lineal- Puente Vallecas",
        originNeighb: "Ciudad Lineal",
        destNeighb: "Puente Vallecas",
        origin: "c/ de Astia 7",
        originCoordinates: [Number],
        destination: "Palomeras 8",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",
        comment: [{
          type: Schema.Types.ObjectId, ref: 'Comment'
        }]
      },
      {
        creatorID: randomId(ids),
        title: "Ciudad Lineal- Moratalaz",
        originNeighb: "Ciudad Lineal",
        destNeighb: "Moratalaz",
        origin: "c/ Emilio Vargas 9",
        originCoordinates: [Number],
        destination: "Avd. de Moratalaz 20",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",
        comment: [{
          type: Schema.Types.ObjectId, ref: 'Comment'
        }]
      },
      {
        creatorID: randomId(ids),
        title: "Ciudad Lineal - Hortaleza",
        originNeighb: "Ciudad Lineal",
        destNeighb: "Hortaleza",
        origin: "c/ Amara 7",
        originCoordinates: [Number],
        destination: "c/ Agustín de Iturbide 4",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Ciudad Lineal - Chamartin",
        originNeighb: "Ciudad Lineal",
        destNeighb: "Chamartin",
        origin: "c/ Angelita Cavero 4",
        originCoordinates: [Number],
        destination: "c/ San Telmo 15",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Ciudad Lineal - Carabanchel",
        originNeighb: "Ciudad Lineal",
        destNeighb: "Carabanchel",
        origin: "c/ Pilar Cavero 5",
        originCoordinates: [Number],
        destination: "c/ Patilla 10",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Ciudad Lineal - Usera",
        originNeighb: "Ciudad Lineal",
        destNeighb: "Usera",
        origin: "c/ de Albacete 3",
        originCoordinates: [Number],
        destination: "c/ Gabriel Usera 3",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Ciudad Lineal - Las Tablas",
        originNeighb: "Ciudad Lineal",
        destNeighb: "Las Tablas",
        origin: "Amara 9",
        originCoordinates: [Number],
        destination: "c/ Palas de Rey 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Ciudad Lineal - El Pilar",
        originNeighb: "Ciudad Lineal",
        destNeighb: "El Pilar",
        origin: "c/ Emilio Vargas 20",
        originCoordinates: [Number],
        destination: "Avd. Monforte de Lemos 20",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Ciudad Lineal - Latina",
        originNeighb: "Ciudad Lineal",
        destNeighb: "Latina",
        origin: "c/ de Astia 15",
        originCoordinates: [Number],
        destination: "Gregorio Vacas 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Hortaleza - Puente Vallecas",
        originNeighb: "Hortaleza",
        destNeighb: "Puente Vallecas",
        origin: "c/ Belianes 14",
        originCoordinates: [Number],
        destination: "Palomeras 12",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Hortaleza - Moratalaz",
        originNeighb: "Hortaleza",
        destNeighb: "Moratalaz",
        origin: "c/ Torregrosa 20",
        originCoordinates: [Number],
        destination: "Avda. Moratalaz 20",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Hortaleza - Ciudad Lineal",
        originNeighb: "Hortaleza",
        destNeighb: "Ciudad Lineal",
        origin: "c/ Agustín de Iturbide 28",
        originCoordinates: [Number],
        destination: "c/ Arturio Soria 37",
        destinationCoordinates: [Number],
        day: 03 / 06 / 2019,
        time: "08:00",
        passengers: 2,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Hortaleza- Chamartín",
        originNeighb: "Hortaleza",
        destNeighb: "Chamartin",
        origin: "c/ Estíbaliz 4",
        originCoordinates: [Number],
        destination: "c/ Félix de Boix 10",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "mini",

      },
      {
        creatorID: randomId(ids),
        title: "Hortaleza - Carabanchel",
        originNeighb: "Hortaleza",
        destNeighb: "Carabanchel",
        origin: "c/ Angel Luis de la Herrán 11",
        originCoordinates: [Number],
        destination: "c/ José Cárdenas 15",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Hortaleza - Usera",
        originNeighb: "Hortaleza",
        destNeighb: "Usera",
        origin: "c/ Paula de la Vega 21",
        originCoordinates: [Number],
        destination: "c/ Madridejos 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "08:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Hortaleza - Las Tablas",
        originNeighb: "Hortaleza",
        destNeighb: "Las Tablas",
        origin: "c/ de Hernández Colón 3",
        originCoordinates: [Number],
        destination: "Viloria de la Rioja 15",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Hortaleza - El Pilar",
        originNeighb: "Hortaleza",
        destNeighb: "El Pilar",
        origin: "c/ de Simón Bolívar 7",
        originCoordinates: [Number],
        destination: "c/ Fermín Caballero 15",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "06:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Hortaleza - Latina",
        originNeighb: "Hortaleza",
        destNeighb: "Latina",
        origin: "c/ Estíbaliz 17",
        originCoordinates: [Number],
        destination: "c/ Ribota 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",
        comment: [{
          type: Schema.Types.ObjectId, ref: 'Comment'
        }]
      },
      {
        creatorID: randomId(ids),
        title: "Chamartin - Puente Vallecas",
        originNeighb: "Chamartin",
        destNeighb: "Puente Vallecas",
        origin: "c/ Fray Bernardino Sahagún 7",
        originCoordinates: [Number],
        destination: "Palomeras 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Chamartin - Moratalaz",
        originNeighb: "Chamartin",
        destNeighb: "Moratalaz",
        origin: "c/ Henri Dunant 5",
        originCoordinates: [Number],
        destination: "Avda. Moratalaz 20",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Chamartin - Ciudad Lineal",
        originNeighb: "Chamartin",
        destNeighb: "Ciudad Lineal",
        origin: "c/ Apolonio Morales 6",
        originCoordinates: [Number],
        destination: "c/ Arturio Soria 37",
        destinationCoordinates: [Number],
        day: 03 / 06 / 2019,
        time: "08:00",
        passengers: 2,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Chamartin - Hortaleza",
        originNeighb: "Chamartin",
        destNeighb: "Hortaleza",
        origin: "c/ San Telmo 9",
        originCoordinates: [Number],
        destination: "c/ Félix de Boix 10",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "mini",

      },
      {
        creatorID: randomId(ids),
        title: "Chamartin - Carabanchel",
        originNeighb: "Chamartin",
        destNeighb: "Carabanchel",
        origin: "c/ del Abedul 15",
        originCoordinates: [Number],
        destination: "c/ José Cárdenas 25",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Chamartin - Usera",
        originNeighb: "Chamartin",
        destNeighb: "Usera",
        origin: "c/ Apolonio Morales 8",
        originCoordinates: [Number],
        destination: "c/ Madridejos 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "08:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Chamartin - Las Tablas",
        originNeighb: "Chamartin",
        destNeighb: "Las Tablas",
        origin: "c/ Menéndez Pidal 4",
        originCoordinates: [Number],
        destination: "Viloria de la Rioja 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Chamartin - El Pilar",
        originNeighb: "Chamartin",
        destNeighb: "El Pilar",
        origin: "c/ Macarana 19",
        originCoordinates: [Number],
        destination: "c/ Fermín Caballero 28",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "06:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Chamartin - Latina",
        originNeighb: "Chamartin",
        destNeighb: "Latina",
        origin: "c/ San Telmo 1",
        originCoordinates: [Number],
        destination: "c/ Ribota 9",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",
        comment: [{
          type: Schema.Types.ObjectId, ref: 'Comment'
        }]
      },
      {
        creatorID: randomId(ids),
        title: "Carabanchel - Puente Vallecas",
        originNeighb: "Carabanchel",
        destNeighb: "Puente Vallecas",
        origin: "c/ de la Época 7",
        originCoordinates: [Number],
        destination: "Palomeras 15",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Carabanchel - Moratalaz",
        originNeighb: "Carabanchel",
        destNeighb: "Moratalaz",
        origin: "c/ Patilla 6",
        originCoordinates: [Number],
        destination: "Avda. Moratalaz 10",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Carabanchel - Ciudad Lineal",
        originNeighb: "Carabanchel",
        destNeighb: "Ciudad Lineal",
        origin: "c/ Piedrahita 12",
        originCoordinates: [Number],
        destination: "c/ Arturio Soria 48",
        destinationCoordinates: [Number],
        day: 03 / 06 / 2019,
        time: "08:00",
        passengers: 2,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Carabanchel - Hortaleza",
        originNeighb: "Carabanchel",
        destNeighb: "Hortaleza",
        origin: "c/ Occidente 8",
        originCoordinates: [Number],
        destination: "c/ Félix de Boix 15",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "mini",

      },
      {
        creatorID: randomId(ids),
        title: "Carabanchel - Chamartin",
        originNeighb: "Carabanchel",
        destNeighb: "Chamartin",
        origin: "c/ Siglo Futuro 3",
        originCoordinates: [Number],
        destination: "c/ del Abedul 15",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Carabanchel - Usera",
        originNeighb: "Carabanchel",
        destNeighb: "Usera",
        origin: "c/ Witerico 5",
        originCoordinates: [Number],
        destination: "c/ Madridejos 9",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "08:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Carabanchel - Las Tablas",
        originNeighb: "Carabanchel",
        destNeighb: "Las Tablas",
        origin: "c/ Binéfar 7",
        originCoordinates: [Number],
        destination: "Viloria de la Rioja 15",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Carabanchel - El Pilar",
        originNeighb: "Carabanchel",
        destNeighb: "El Pilar",
        origin: "c/ Amanecer 5",
        originCoordinates: [Number],
        destination: "c/ de la Isla de Arosa 8",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "06:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Carabanchel - Latina",
        originNeighb: "Carabanchel",
        destNeighb: "Latina",
        origin: "Pso. Castellanos 16",
        originCoordinates: [Number],
        destination: "c/ Ribota 9",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",
        comment: [{
          type: Schema.Types.ObjectId, ref: 'Comment'
        }]
      },
      {
        creatorID: randomId(ids),
        title: "Usera - Puente Vallecas",
        originNeighb: "Usera",
        destNeighb: "Puente Vallecas",
        origin: "Mariano Vela 8",
        originCoordinates: [Number],
        destination: "Palomeras 13",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Usera - Moratalaz",
        originNeighb: "Usera",
        destNeighb: "Moratalaz",
        origin: "c/ de Dolores Barranco 16",
        originCoordinates: [Number],
        destination: "Avda. Moratalaz 10",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Usera - Ciudad Lineal",
        originNeighb: "Usera",
        destNeighb: "Ciudad Lineal",
        origin: "c/ Gabriel Usera 7",
        originCoordinates: [Number],
        destination: "c/ Arturio Soria 48",
        destinationCoordinates: [Number],
        day: 03 / 06 / 2019,
        time: "08:00",
        passengers: 2,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Usera - Hortaleza",
        originNeighb: "Usera",
        destNeighb: "Hortaleza",
        origin: "c/ Luis de la Torre 23",
        originCoordinates: [Number],
        destination: "c/ Félix de Boix 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "mini",

      },
      {
        creatorID: randomId(ids),
        title: "Usera - Chamartin",
        originNeighb: "Usera",
        destNeighb: "Chamartin",
        origin: "c/ Pablo Ortiz 14",
        originCoordinates: [Number],
        destination: "c/ del Abedul 5",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Usera - Carabanchel",
        originNeighb: "Usera",
        destNeighb: "Carabanchel",
        origin: "c/ Perpetua Díaz 3",
        originCoordinates: [Number],
        destination: "c/ Patilla 7",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "08:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Usera - Las Tablas",
        originNeighb: "Usera",
        destNeighb: "Las Tablas",
        origin: "c/ Felipe Castro 16",
        originCoordinates: [Number],
        destination: "c/ de Padornelo 5",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Usera - El Pilar",
        originNeighb: "Usera",
        destNeighb: "El Pilar",
        origin: "c/ Antonia Usera 9",
        originCoordinates: [Number],
        destination: "c/ de la Isla de Arosa 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "06:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Usera - Latina",
        originNeighb: "Usera",
        destNeighb: "Latina",
        origin: "José Bielsa 4",
        originCoordinates: [Number],
        destination: "c/ Ribota 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",
        comment: [{
          type: Schema.Types.ObjectId, ref: 'Comment'
        }]
      },
      {
        creatorID: randomId(ids),
        title: "Las Tablas - Puente Vallecas",
        originNeighb: "Las Tablas",
        destNeighb: "Puente Vallecas",
        origin: "c/ de la Sierra de Atapuerca 5",
        originCoordinates: [Number],
        destination: "Palomeras 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Las Tablas - Moratalaz",
        originNeighb: "Las Tablas",
        destNeighb: "Moratalaz",
        origin: "c/ Redecilla del Camino 5",
        originCoordinates: [Number],
        destination: "Avda. Moratalaz 23",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Las Tablas - Ciudad Lineal",
        originNeighb: "Las Tablas",
        destNeighb: "Ciudad Lineal",
        origin: "c/ de Padornelo 7",
        originCoordinates: [Number],
        destination: "c/ Arturio Soria 48",
        destinationCoordinates: [Number],
        day: 03 / 06 / 2019,
        time: "08:00",
        passengers: 2,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Las Tablas - Hortaleza",
        originNeighb: "Las Tablas",
        destNeighb: "Hortaleza",
        origin: "c/ San Juan de Ortega 9",
        originCoordinates: [Number],
        destination: "c/ Félix de Boix 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "mini",

      },
      {
        creatorID: randomId(ids),
        title: "Las Tablas - Chamartin",
        originNeighb: "Las Tablas",
        destNeighb: "Chamartin",
        origin: "c/ Mirallos 1",
        originCoordinates: [Number],
        destination: "c/ del Abedul 5",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Las Tablas - Carabanchel",
        originNeighb: "Las Tablas",
        destNeighb: "Carabanchel",
        origin: "Pso. San Millán de la Cogolla, 3",
        originCoordinates: [Number],
        destination: "c/ Patilla 7",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "08:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Las Tablas - Usera",
        originNeighb: "Las Tablas",
        destNeighb: "Usera",
        origin: "c/ Palas de Rey 9",
        originCoordinates: [Number],
        destination: "c/ Antonia Usera 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Las Tablas - El Pilar",
        originNeighb: "Las Tablas",
        destNeighb: "El Pilar",
        origin: "c/ Viloria de la Rioja 34",
        originCoordinates: [Number],
        destination: "c/ de la Isla de Arosa 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "06:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Las Tablas - Latina",
        originNeighb: "Las Tablas",
        destNeighb: "Latina",
        origin: "c/ de Padornelo 7",
        originCoordinates: [Number],
        destination: "c/ Ribota 12",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",
        comment: [{
          type: Schema.Types.ObjectId, ref: 'Comment'
        }]
      },
      {
        creatorID: randomId(ids),
        title: "El Pilar - Puente Vallecas",
        originNeighb: "El Pilar",
        destNeighb: "Puente Vallecas",
        origin: "c/ de Finisterre 7",
        originCoordinates: [Number],
        destination: "Palomeras 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "El Pilar - Moratalaz",
        originNeighb: "El Pilar",
        destNeighb: "Moratalaz",
        origin: "c/ Alfredo Marquerie 14",
        originCoordinates: [Number],
        destination: "Avda. Moratalaz 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "El Pilar - Ciudad Lineal",
        originNeighb: "El Pilar",
        destNeighb: "Ciudad Lineal",
        origin: "c/ de Úbeda 9",
        originCoordinates: [Number],
        destination: "c/ Arturio Soria 48",
        destinationCoordinates: [Number],
        day: 03 / 06 / 2019,
        time: "08:00",
        passengers: 2,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "El Pilar - Hortaleza",
        originNeighb: "El Pilar",
        destNeighb: "Hortaleza",
        origin: "Av. de Betanzos 15",
        originCoordinates: [Number],
        destination: "c/ Félix de Boix 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "mini",

      },
      {
        creatorID: randomId(ids),
        title: "El Pilar - Chamartin",
        originNeighb: "El Pilar",
        destNeighb: "Chamartin",
        origin: "c/ Ginzo de Limia",
        originCoordinates: [Number],
        destination: "c/ del Abedul 5",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "El Pilar - Carabanchel",
        originNeighb: "El Pilar",
        destNeighb: "Carabanchel",
        origin: "de las Islas Cies 7",
        originCoordinates: [Number],
        destination: "c/ Patilla 7",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "08:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "El Pilar - Usera",
        originNeighb: "El Pilar",
        destNeighb: "Usera",
        origin: "Pz. de Verín 5",
        originCoordinates: [Number],
        destination: "c/ Antonia Usera 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "El Pilar - Las Tablas",
        originNeighb: "El Pilar",
        destNeighb: "Las Tablas",
        origin: "c/ de Úbeda 1",
        originCoordinates: [Number],
        destination: "c/ de la Isla de Arosa 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "06:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "El Pilar - Latina",
        originNeighb: "El Pilar",
        destNeighb: "Latina",
        origin: "c/ de Santiago de Compostela 3",
        originCoordinates: [Number],
        destination: "c/ Ribota 12",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",
        comment: [{
          type: Schema.Types.ObjectId, ref: 'Comment'
        }]
      },
      {
        creatorID: randomId(ids),
        title: "Latina - Puente Vallecas",
        originNeighb: "Latina",
        destNeighb: "Puente Vallecas",
        origin: "Cascajares 9",
        originCoordinates: [Number],
        destination: "Palomeras 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Latina - Moratalaz",
        originNeighb: "Latina",
        destNeighb: "Moratalaz",
        origin: "c/ Antonia Calvo 8",
        originCoordinates: [Number],
        destination: "Avda. Moratalaz 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Latina - Ciudad Lineal",
        originNeighb: "Latina",
        destNeighb: "Ciudad Lineal",
        origin: "c/ Carlos Fuentes 3",
        originCoordinates: [Number],
        destination: "c/ Arturio Soria 48",
        destinationCoordinates: [Number],
        day: 03 / 06 / 2019,
        time: "08:00",
        passengers: 2,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Latina - Hortaleza",
        originNeighb: "Latina",
        destNeighb: "Hortaleza",
        origin: "c/ del Ansar 6",
        originCoordinates: [Number],
        destination: "c/ Félix de Boix 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:00",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "mini",

      },
      {
        creatorID: randomId(ids),
        title: "Latina - Chamartin",
        originNeighb: "Latina",
        destNeighb: "Chamartin",
        origin: "c/ Berbardina García 7",
        originCoordinates: [Number],
        destination: "c/ del Abedul 5",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Latina - Carabanchel",
        originNeighb: "Latina",
        destNeighb: "Carabanchel",
        origin: "Ramón Azorín 2",
        originCoordinates: [Number],
        destination: "c/ Patilla 7",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "08:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Latina - Usera",
        originNeighb: "Latina",
        destNeighb: "Usera",
        origin: "Antonia Calvo 1",
        originCoordinates: [Number],
        destination: "c/ Antonia Usera 2",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Latina - Las Tablas",
        originNeighb: "Latina",
        destNeighb: "Las Tablas",
        origin: "Francisca Amada 9",
        originCoordinates: [Number],
        destination: "c/ de la Isla de Arosa 1",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "06:30",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      },
      {
        creatorID: randomId(ids),
        title: "Latina - El Pilar",
        originNeighb: "Latina",
        destNeighb: "El Pilar",
        origin: "c/ del Lucero 10",
        originCoordinates: [Number],
        destination: "c/ de Finisterre 4",
        destinationCoordinates: [Number],
        day: 01 / 06 / 2019,
        time: "07:15",
        passengers: 3,
        price: "3€",
        description: "De lunes a viernes a las 7 de la mañana",
        smoker: false,
        carType: "Clio",

      }
    ]

    trips = trips.map(elm => {
      return {
        creatorID: elm.creatorID,
        title: elm.title,
        originNeighb: elm.originNeighb,
        destNeighb: elm.destNeighb,
        origin: elm.origin,
        destination: elm.destination,
        day: elm.day,
        time: elm.time,
        passengers: [],
        maxPassengers: Math.floor(Math.random() * (4 - 1) + 1),
        price: elm.price,
        description: elm.description,
        smoker: elm.smoker,
        carType: elm.carType,
      }
    })

    // console.log(trips)

    Trip.deleteMany()
      .then(() => {
        return Trip.create(trips)
      })
      .then(usersCreated => {
        console.log(`${usersCreated.length} users created with the following id:`);
      })
      .then(() => {
        // Close properly the connection to Mongoose
        mongoose.disconnect()
      })
      .catch(err => {
        mongoose.disconnect()
        throw err
      })
  })