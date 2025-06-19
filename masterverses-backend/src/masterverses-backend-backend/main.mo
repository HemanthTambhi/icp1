import Array "mo:base/Array";
import Blob "mo:base/Blob";
import Text "mo:base/Text";
import Buffer "mo:base/Buffer";
import Time "mo:base/Time";
import Int "mo:base/Int";

actor {
    // Define our types
    private type Picture = {
        id: Text;
        image: Blob;              // Keep original image field
        ipfsUrl: ?Text;          // Optional IPFS URL
        name: Text;
        description: ?Text;
        date: ?Text;
        location: ?Text;
        price: ?Text;
    };

    // Storage for our pictures
    private stable var pictures : [Picture] = [
        {
            id = "1";
            // Fix the base64 string syntax
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreigpkmuoqbppjgvl64xljpgnl4fp3oaz7lwasb5lv53jzr2hqmy42y";
            name = "Spring India Pilgrimage Retreat 2025";
            description = ?"A transformative journey through Rishikesh and Vrindavan, offering participants an immersive experience in India's spiritual traditions. The retreat includes yoga sessions, Ayurveda healing, guided meditations, and visits to ancient temples, aiming to provide a profound connection with one's inner self.";
            date = ?"March 21-28, 2025";
            location = ?"Rishikesh, India";
            price = ?"free";
        },
        {
            id = "2";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreiboifvdqinicg4cd7er6nshlmc2b2bmqx7ge5wxml4y2pewgputze";
            name = "Advanced Sadhana Bhatti (Meditation Retreat) - Sakshi Dhyan";
            description = ?"An advanced meditation retreat focusing on Sakshi Dhyan (witness consciousness), including guided meditation sessions, reflective practices, and spiritual discourses.";
            date = ?"April 8-10, 2025";
            location = ?"Dharampur, Gujarat, India";
            price = ?"free";
        },
        {
            id = "3";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreie3jdfa6pfqn5zqctjll2dzh4ufrnf7cmey5edtgppsh3khnvtvqu";
            name = "Sadguru Udghosh Sessions (Dharampur)";
            description = ?"Spiritual discourses by Pujya Gurudevshri Rakeshji, focusing on Jain philosophy, meditation, and self-realization.";
            date = ?"May 20-23, 2025";
            location = ?"Dharampur, India";
            price = ?"free";
        }
    ];

        private stable var featuredEvents : [Picture] = [
        {
            id = "f1";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreihbnnv3uxx3lzy3mwurj7mciimtl5mxqzwm55tpsykmqv4fiak7tu";
            name = "Residential Satsang with Sri M at the Babaji Temple";
            description = ?"A 3-day residential satsang led by Sri M, focusing on spiritual discourses, meditation sessions, and interactive dialogues aimed at deepening spiritual understanding.";
            date = ?"March 2-5, 2025";
            location = ?"Babaji Temple, Nooranad, Alleppey, Kerala, India";
            price = ?"free";
        },
        {
            id = "f2";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreibflx2wnuy7akvjvmem5go767xo5m4ggaqkpu27bzsbncqwh7n2fa";
            name = "Camp on Amritabindu Upanishad at Sidhbari";
            description = ?"An 8-day residential camp led by Swami Swaroopananda, focusing on the teachings of the Amritabindu Upanishad, complemented by guided meditation sessions";
            date = ?"May 1-8, 2025";
            location = ?"Sidhbari, Himachal Pradesh, India";
            price = ?"free";
        },
        {
            id = "f3";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreihhy27ejqx72keixs65jru2vvx44zvlzry56cuwnwzzxygd7bioki";
            name = "Guru Purnima Celebration";
            description = ?"Join spiritual leaders and practitioners for discussions on modern spirituality.";
            date = ?"August 10-12, 2025";
            location = ?"Pune, India";
            price = ?"free";
        },
        {
            id = "f4";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreihbnnv3uxx3lzy3mwurj7mciimtl5mxqzwm55tpsykmqv4fiak7tu";
            name = "Vedanta Philosophy Workshop";
            description = ?"Explore the depths of Vedanta philosophy through interactive sessions and discussions.";
            date = ?"September 5-8, 2025";
            location = ?"Rishikesh, India";
            price = ?"free";
        }
    ];

 
    private stable var topOrganizations : [Picture] = [
        {
            id = "t1";  // We still need id in the type but won't expose it in the API
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreia62q3aevjkzxed6lgvekop56hfrzhof42yjrbdfidv2thgbaul6a";
            name = "Isha Foundation";
            description = null;
            date = null;
            location = null;
            price = null;
        },
        {
            id = "t2";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreiepqave4z4e7cryddimmztkvp2aqgwmefx2jk5brkdm2tk5nxvp3q";
            name = "ISKCON";
            description = null;
            date = null;
            location = null;
            price = null;
        },
        {
            id = "t3";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreicsewvlbrzr3ymsuzovw6iiefwyzfent6axpt5xnubkayv6f7qeqm";
            name = "Brahma Kumaris";
            description = null;
            date = null;
            location = null;
            price = null;
        },
        {
            id = "t4";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafybeicksf6w2llzz6w7pttc62kqgnoxnge5r6yryhvesbpczthdfobpiq";
            name = "Shri Ram Chandra Mission";
            description = null;
            date = null;
            location = null;
            price = null;
        },
        {
            id = "t5";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreidl2lbi7u2xguwwljo3ow37fqylev6k3svzh7fo3tw4xjc4nn7xuu";
            name = "International Buddhist Confederation";
            description = null;
            date = null;
            location = null;
            price = null;
        },
        {
            id = "t6";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreiaokvgflopbs3muvsa2ommkrl7nuc3px3vuo3ymfgnvs5lr3h5r2e";
            name = "Bhakti Marga Shree Peetha Nailaya";
            description = null;
            date = null;
            location = null;
            price = null;
        }
    ];

      
    private stable var nearbyPlaces : [Picture] = [
        {
            id = "n1";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreifnail3h2lkt3mq3viblkkaggw5cb5on23m5qvb3l4pnqv7otla5q";
            name = "Batu Caves";
            description = ?"Home to a stunning Hindu temple, towering limestone caves, and the iconic golden Murugan statue, Batu Caves is a spiritual and cultural marvel.";
            date = ?"Daily, 5:30 AM - 7:30 PM";
            location = ?"Gombak, 68100 Batu Caves, Selangor, Malaysia";
            price = ?"free";
        },
        {
            id = "n2";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreifig7qrwpwfwmoerkk5b3zhmfhwqj25jky7jfwm4dqzvrcajditna";
            name = "Masjid Putra";
            description = ?"Masjid Putra, also known as the Putra Mosque, is an iconic pink-domed mosque in Putrajaya, Malaysia.";
            date = ?"Daily, 4:00 AM - 9:00 PM";
            location = ?"Persiaran Persekutuan, Presint1, 62502 Putrajaya, Malaysia";
            price = ?"free";
        },
        {
            id = "n3";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreicl7mbznbx56ffin2pmwh4k7bann3l6qwcnmvldnlbsd7tf6ua4ca";
            name = "Enlightened Heart Buddhist Temple";
            description = ?"The Enlightened Heart Buddhist Temple is a sprawling Tibetan Buddhist complex located in Tambun, Ipoh, Malaysia.";
            date = ?"Daily, 6:00 AM - 7:30 AM";
            location = ?"Unnamed Road, Taman Sri Tambun, 31400 Tambun, Perak, Malaysia";
            price = ?"free";
        },
        {
            id = "n4";
            image = Text.encodeUtf8("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAk");
            ipfsUrl = ?"https://pink-gradual-finch-350.mypinata.cloud/ipfs/bafkreidh2xkhkvnwmjjqbi3tov46ozv5uy5fg5feo4j5pembdz2d3ylu74";
            name = "Kota Kinabalu City Mosque";
            description = ?"The Kota Kinabalu City Mosque is a prominent Islamic place of worship located in Kota Kinabalu, Sabah, Malaysia.";
            date = ?"Daily, 6:00 AM - 7:00 AM";
            location = ?"Kampung Likas, 88400 Kota Kinabalu, Sabah, Malaysia";
            price = ?"free";
        }
    ];

    // Function to get nearby places
    public query func getNearbyPlaces() : async [{
        id: Text;
        ipfsUrl: ?Text;
        name: Text;
        description: ?Text;
        date: ?Text;
        location: ?Text;
        price: ?Text;
    }] {
        return Array.map<Picture, {
            id: Text;
            ipfsUrl: ?Text;
            name: Text;
            description: ?Text;
            date: ?Text;
            location: ?Text;
            price: ?Text;
        }>(nearbyPlaces, func(place: Picture) {
            {
                id = place.id;
                ipfsUrl = place.ipfsUrl;
                name = place.name;
                description = place.description;
                date = place.date;
                location = place.location;
                price = place.price;
            }
        });
    };

    // Function to get top organizations
    public query func getTopOrgs() : async [{
        name: Text;
        ipfsUrl: ?Text;
    }] {
        return Array.map<Picture, {
            name: Text;
            ipfsUrl: ?Text;
        }>(topOrganizations, func(org: Picture) {
            {
                name = org.name;
                ipfsUrl = org.ipfsUrl;
            }
        });
    };



    // Function to get featured events
    public query func getFeaturedEvents() : async [{
        id: Text;
        ipfsUrl: ?Text;
        name: Text;
        date: ?Text;
        location: ?Text;
        description: ?Text;
    }] {
        return Array.map<Picture, {
            id: Text;
            ipfsUrl: ?Text;
            name: Text;
            date: ?Text;
            location: ?Text;
            description: ?Text;
        }>(featuredEvents, func(pic: Picture) {
            {
                id = pic.id;
                ipfsUrl = pic.ipfsUrl;
                name = pic.name;
                date = pic.date;
                location = pic.location;
                description = pic.description;
            }
        });
    };

    // Function to add a new picture
    public shared(msg) func addPicture(
        name: Text,
        image: Blob,
        ipfsUrl: ?Text,
        description: ?Text,
        location: ?Text,
        price: ?Text
    ) : async Text {
        let newId = Int.toText(Array.size(pictures) + 1);
        let newPicture : Picture = {
            id = newId;
            image = image;
            ipfsUrl = ipfsUrl;
            name = name;
            description = description;
            date = ?Int.toText(Time.now());
            location = location;
            price = price;
        };

        pictures := Array.append(pictures, [newPicture]);
        newId
    };

    // Get three pictures with full details
    public query func getThreePicsWithDetails() : async [{
        id: Text;
        image: Blob;
        ipfsUrl: ?Text;
        description: ?Text;
        date: ?Text;
        location: ?Text;
        price: ?Text;
    }] {
        let subset = Array.subArray<Picture>(pictures, 0, 3);
        return Array.map<Picture, {
            id: Text;
            image: Blob;
            ipfsUrl: ?Text;
            description: ?Text;
            date: ?Text;
            location: ?Text;
            price: ?Text;
        }>(subset, func(pic: Picture) {
            {
                id = pic.id;
                image = pic.image;
                ipfsUrl = pic.ipfsUrl;
                description = pic.description;
                date = pic.date;
                location = pic.location;
                price = pic.price;
            }
        });
    };

};