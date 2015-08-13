'use strict';
var router = require('express').Router();
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('9wkzBReoZI_aL6h2c-asFQ');
module.exports = router;

var animals = ["Aardvark","Aardwolf","Accentor","Addax","African","Buffalo","African-Wild-Ass","African-Wild-Dog","Agama","Agouti","Albatross","Alligator","Alpaca","American-Black-Bear","American-Sparrow","Amur-Leopard","Anaconda","Andean-Mountain-Cat","Anemone","Angelfish","Anhinga","Anoa","Anole","Ant","Anteater","Antelope","Archerfish","Arctic-Fox","Armadillo","Arowana","Asian-Black-Bear","Auk","Avocet","Axolotl","Aye-aye","Babirusa","Baboon","Badger","Bald-Eagle","Bandicoot","Banteng","Barbet","Basilisk","Bat","Batfish","Bear","Bearded-Dragon","Beaver","Bed","Bug","Bee","Bee-eater","Beetle","Betta","Bettong","Bigeyes","Bilby","Binturong","Bird","Bird-of-paradise","Bison","Bitterling","Bittern","Black-footed-Cat","Black-footed-Ferret","Blackdevil","Blue-Sheep","Blue-Whale","Bluebird","Boa","Bobcat","Bongo","Booby","Bowerbird","Broadbill","Brown-Bear","Budgie","Bulbul","Bull","Bullfrog","Bunny","Bunting","Bush-Dog","Bushbaby","Bushshrike","Bustard","Butterfly","Buzzard","Caecilian","Camel","Capybara","Caracal","Caracara","Cardinal","Cardinalfish","Caribou","Carp","Cassowary","Cat","Caterpillar","Catfish","Cattle","Cavy","Centipede","Chameleon","Chamois","Chat","Cheetah","Chicken","Chimaera","Chimpanzee","Chinchilla","Chipmunk","Chough","ChuckWalla","Cicada","Cichlid","Civet","Clam","Climbing-Mouse","Climbing-Perch","Clouded-Leopard","Clownfish","Coati","Cobra","Cockatiel","Cockatoo","Cockroach","Colugo","Common-Genet","Conch","Coot","Copperhead","Cormorant","Cotinga","Cotton-Rat","Cougar","Courser","Cow","Coyote","Coypu","Crab","Crane","Crane-Fly","Crayfish","Cricket","Crocodile","Crow","Cuckoo","Culpeo","Curlew","Cuscus","Cuttlefish","Dartfish","Dassie-Rat","Death-Adder","Deer","Deer","Mouse","Degu","Dhole","Dibbler","Dikkop","Dimetrodon","Dingo","Dinosaur","Dipper","Discus","Dodo","Dog","Dolphin","Donkey","Dormouse","Dove","Dragonfly","Drongo","Duck","Dugong","Duiker","Dunnart","Eagle","Echidna","Eel","Egret","Eider","Electric","Eel","Elephant","Elephant","Bird","Elk","Emu","Ermine","Falcon","Fennec","Fox","Ferret","Finch","Fish","Fisher","Fishing","Cat","Flamingo","Flat-headed","Cat","Flea","Flowerpecker","Fly","Flying","Fish","Flying","Frog","Fossa","Fox","Frigatebird","Frog","Frogmouth","Fulmar","Galago","Gallinule","Gannet","Gar","Garter","Snake","Gaur","Gazelle","Gecko","Geoffroy's","Cat","Gerbil","Gerenuk","Giant","Panda","Giant","Tortoise","Gibbon","Gila","Monster","Giraffe","Gnu","Goat","Goatfish","Goldfish","Goose","Gopher","Goral","Gorilla","Gourami","Grackle","Grasshopper","Gray","Wolf","Greater","Glider","Grebe","Green","Iguana","Grison","Grizzly","Bear","Groundhog","Grouse","Guanaco","Guinea","Pig","Gull","Gundi","Hamster","Harrier","Hartebeest","Hawaiian","Honeycreeper","Hawk","Hedgehog","Helmetshrike","Hermit-crab","Heron","Himalayan","Tahr","Hippopotamus","Hissing","Cockroach","Honeyeater","Hornbill","Hornet","Horse","Hoverfly","Hummingbird","Hutia","Hyena","Hyrax","Iberian","Lynx","Ibex","Ibis","Icterid","Iguana","Impala","Insect","Jacana","Jack","Jackal","Jaguar","Jaguarundi","Jay","Jellyfish","Jerboa","Jungle","Cat","Kangaroo","Kangaroo","Rat","kerodon","Kestrel","King","Cobra","Kingbird","Kingfisher","Kinkajou","Kite","Kitten","Kiwi","Klipspringer","Knifefish","Koala","Kodiak","Bear","Kodkod","Koi","Komodo","Dragon","Kookaburra","Kowari","Kudu","Kultarr","Ladybug","Lamb","Lamprey","Lapwing","Leech","Lemming","Lemur","Leopard","Liger","Lion","Lionfish","Lizard","Llama","Loach","Lobster","Long-Tailed","Tit","Longspur","Loon","Loris","Lory","Lovebird","Lynx","Lyrebird","Macaw","Mallard","Mamba","Mammoth","Manakin","Manatee","Mandrill","Mantis","Shrimp","Mara","Margay","Marine","Angelfish","Marine","Hatchetfish","Markhor","Marlin","Marmot","Marsupial","Mole","Marten","Mastodon","Meadowlark","Meerkat","Megapode","Millipede","Miniature","Horse","Mink","Minnow","Mockingbird","Mole","Mole","Rat","Mongoose","Monitor","Lizard","Monkey","Moorhen","Moose","Moray","Eel","Mosasaur","Mosquito","Moth","Motmot","Mountain","Goat","Mountain","Lion","Mouse","Mouse","Deer","Mousebird","Mudpuppy","Mudskipper","Mullet","Muntjac","Muskox","muskrat","Musky","Rat-Kangaroo","Naked","Mole-rat","Narwhal","Nautilus","Needlefish","Newt","Nighthawk","Nightjar","Numbat","Nuthatch","Nutria","Ocelot","Octopus","Okapi","Old","World","Babbler","Old","World","Flycatcher","Olingo","Onager","Opossum","Orangutan","Orca","Oriole","Oryx","Osprey","Ostrich","Otter","Ovenbird","Owl","Oyster","Paca","Paddlefish","Pademelon","Pallas's","cat","Panda","Pangolin","Panther","Parakeet","Parrot","Parrotfish","Passenger","Pigeon","Peacock","Peafowl","Peccary","Pelican","Penguin","Pheasant","Pig","Pigeon","Pika","Pike","Piranha","Pitohui","Pizzly","Bear","Platypus","Plover","Pocket","Gopher","Pogona","Poison","Dart","Frog","Polar","Bear","Pony","Porcupine","Porpoise","Possum","Potoo","Potoroo","Potto","Pouched","Rat","Prairie","Dog","Prawn","Praying","Mantis","Pronghorn","Przewalski's","Horse","Ptarmigan","Pterosaur","Pudu","Puff","Adder","Puffer","Fish","Puffin","Puma","Puppy","Python","Qinling","Panda","Quagga","Quail","Quetzal","Quokka","Quoll","Rabbit","Raccoon","Raccoon","dog","Rail","Rainbowfish","Rat","Rattlesnake","Raven","Red","Panda","Red","River","Hog","Reindeer","Rhea","Rhinoceros","Ringtail","River","Dolphin","Roadrunner","Robin","Rock","Hyrax","Rockfish","Roller","Rook","Rufous","Rat-kangaroo","Saber-toothed Cat","Sailfish","Salamander","Salmon","Sand Cat","Sandgrouse","Sawfish","Scorpion","Sea Anemone","Sea Cucumber","Sea Duck","Sea Gull","Sea Lion","Sea Otter","Sea Snake","Seadragon","Seahorse","Seal","Serval","Shark","Shearwater","Sheep","Shelduck","Shoebill","Shrew","Shrimp","Skate","Skimmer","Skink","Skua","Skunk","Sloth","Sloth","Bear","Slow","Loris","Slug","Snail","Snake","Snipe","Snow","Leopard","Solenodon","Songbird","Sparrow","Spectacled","Bear","Spider","Spiny","Rat","Spiny","Lobster","Spiny","Mouse","Sponge","Spoonbill","Springhare","Squid","Squirrel","Squirrel","Glider","Starfish","Starling","Steppe","Lemming","Stick","Bug","Stingray","Stoat","Stone-curlew","Stonefish","Stork","Sun","Bear","Sunbird","Surgeonfish","Swallow","Swamphen","Swan","Swift","Swordfish","Tadpole","Takin","Tamandua","Tamarin","Tanager","Tapaculo","Tapir","Tarantula","Tarpon","Tarsier","Tasmanian","Devil","Tasmanian","Wolf","Tayra","Tenrec","Termite","Tern","Tetra","Thick-knee","Thornbill","Thrasher","Thrush","Tiger","Tit","Toad","Toadfish","Tortoise","Toucan","Treeshrew","T-Rex","Trogon","Trout","Trumpeter","Tuatara","Tuna","Turaco","Turkey","Turtle","Tyrant","Flycatcher","Urchin","Vanga","Vaquita","Vicuna","Viper","Viscacha","Vole","Vulture","Wader","Wagtail","Wallaby","Walleye","Walrus","Wapiti","Warbler","Warthog","Wasp","Water","Buffalo","Waxwing","Weasel","Weaver","Weaver-finch","Whale","Whistler","Whistling-Duck","White-eye","Whydah-Widow","Spider","Wigeon","Wildcat","Wildebeest","Wolf","Wolverine","Wombat","Wongai","Ningaui","Woodchuck","Woodcock","Woodpecker","Woodswallow","Worm","Wren","X-Ray","Tetra","Xenopoecilus","Xenops","Xerus","Yak","Yapok","Yellowjacket","Zebra","Zebu"];

router.put('/code',function (req, res, next){
	var code = Math.floor(Math.random() * (9999 - 1000)) + 1000;
	console.log("code",code)
	var message = {
        "subject": "Your confirmation code is "+String(code),
        "from_email": "no-reply-server@gmail.com",
        "to": [{
                "email": req.body.email+"@simons-rock.edu",
            }],
        "important": false,
        "track_opens": true,    
        "auto_html": false,
        "preserve_recipients": true,
        "merge": false, 
    };
    var async = false;
    var ip_pool = "Main Pool";
    mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool}, function(result) {
        res.json({
        	code: code,
            animal: animals[code%animals.length]
        });
    }, function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    });
})