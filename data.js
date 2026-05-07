// ==========================================
// 🐶 ORCHARD PUPS - LITTER DATA
// ==========================================

const LITTERS = [
    {
        id: "toy-story-2026",
        litterName: "Toy Story",
        status: "Available to Reserve",
        dob: "March 24, 2026",
        readyToGoDate: "May 19, 2026",
        mom: { name: "Star", breed: "F1B", weight: "27lbs" },
        dad: { name: "Willie", breed: "Mini Poodle", weight: "16lbs" },
        breed: "F1BB Mini Goldendoodle",
        description: "A sweet, smart litter of 4 Mini Goldendoodles, a perfect size for snuggling on the couch or short walks in the park. The Toy Story litter has arrived! This is one of the sweetest litters we've had in a while. 5 perfect little fluff balls with the sweetest dispositions. The F1BB generation is the results of the most hypoallergenic, non-shedding coats possible—perfect for families with allergies! These litter tends to be little calmer because of the larger size.",
        price: "$1700 + tax ($300 due at reservation)",
        puppies: [
            { name: "Woody", gender: "Male", status: "Available" },
            { name: "Annie", gender: "Female", status: "Available" },
            { name: "Bo-Peep", gender: "Female", status: "Available" },
            { name: "Jessie", gender: "Female", status: "Available" }
        ],
        thumbnail: "assets/Listings/ToyStory/toystory-thumbnail.jpeg",
        media: [
            { type: "video", src: "assets/Listings/ToyStory/toystory1.mp4", label: "Toy Story Litter" },
            { type: "video", src: "assets/Listings/ToyStory/toystory2.mp4", label: "Toy Story Litter" },
            { type: "image", src: "assets/Listings/ToyStory/woody1.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody2.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody3.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody4.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody5.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/annie1.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie2.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie3.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie4.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie5.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie6.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep1.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep2.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep3.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep4.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep5.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep6.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie1.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie2.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie3.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie4.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie5.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie6.jpeg", label: "Jessie (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" }
        ]
    },

    {
        id: "spring-blooms-2026",
        litterName: "Spring Blooms",
        status: "Ready to go Home",
        dob: "March 11, 2026",
        readyToGoDate: "Now",
        mom: { name: "Jingles", breed: "F1B Mini Goldendoodle", weight: "15lbs" },
        dad: { name: "Blazer", breed: "Mini Poodle", weight: "12lbs" },
        breed: "F1BB Mini Goldendoodle",
        description: "Check out our Spring Blooms litter! We're super excited about these F1BB Mini Goldendoodles. They're total Teddybear pups with wavy, hypoallergenic coats and the sweetest personalities you can imagine. The F1BB generation is the results of the most hypoallergenic, non-shedding coats possible—perfect for families with allergies! These litter tends to be little calmer because of the larger size.",
        price: "$1600 + tax ($300 due at reservation)",
        puppies: [
            { name: "Mr Dandy Lion", gender: "Male", status: "Available" },
            { name: "Mamma Rose Bella", gender: "Female", status: "Available" },
            { name: "Lady Fern Ella", gender: "Female", status: "Available" },
            { name: "Queen Callie Ann", gender: "Female", status: "Available" }
        ],
        thumbnail: "assets/Listings/SpringBlooms/springblooms-thumbnail.jpeg",
        media: [
            { type: "video", src: "assets/Listings/SpringBlooms/springblooms1.mp4", label: "Spring Blooms Litter" },
            { type: "video", src: "assets/Listings/SpringBlooms/springblooms2.mp4", label: "Spring Blooms Litter" },
            { type: "image", src: "assets/Listings/SpringBlooms/ladyfernella.jpeg", label: "Lady Fern Ella (Female)" },
            { type: "image", src: "assets/Listings/SpringBlooms/mommarosebella1.jpeg", label: "Mamma Rose Bella (Female)" },
            { type: "image", src: "assets/Listings/SpringBlooms/mommarosebella2.jpeg", label: "Mamma Rose Bella (Female)" },
            { type: "image", src: "assets/Listings/SpringBlooms/mrrandylion1.jpeg", label: "Mr Randy Lion (Male)" },
            { type: "image", src: "assets/Listings/SpringBlooms/mrrandylion2.jpeg", label: "Mr Randy Lion (Male)" },
            { type: "image", src: "assets/Listings/SpringBlooms/queencallieann1.jpeg", label: "Queen Callie Ann (Female)" },
            { type: "image", src: "assets/Listings/SpringBlooms/queencallieann2.jpeg", label: "Queen Callie Ann (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" }
        ]
    },

    {
        id: "here-comes-the-sun-2026",
        litterName: "Here Comes The Sun",
        status: "Available to Reserve",
        dob: "April 21, 2026",
        readyToGoDate: "June 16, 2026",
        mom: { name: "Patience", breed: "King Charles Cavalier", weight: "15lbs" },
        dad: { name: "Max", breed: "Mini Poodle", weight: "12lbs" },
        breed: "Cavapoos",
        description: "Check out our Here Comes the Sun litter! We're super excited about these Cavapoos. They have amazing personalities, traditional teddy bear blocky looks. They're total Teddybear pups with wavy, hypoallergenic coats and the sweetest personalities you can imagine. Cavapoos are a mix of King Charles Cavalier and Poodle. They are known for their playful personalities and traditional teddy bear looks.",
        price: "$1600 + tax ($300 due at reservation)",
        puppies: [
            { name: "George", gender: "Male", status: "Available" },
            { name: "Yoko", gender: "Female", status: "Available" },
            { name: "John", gender: "Male", status: "Available" },
            { name: "Penny", gender: "Female", status: "Available" },
            { name: "Michele", gender: "Female", status: "Available" }
        ],
        thumbnail: "assets/Listings/HereComesTheSun/herecomesthesun-thumbnail.jpeg",
        media: [
            { type: "video", src: "assets/Listings/HereComesTheSun/george.mp4", label: "George (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/george1.jpeg", label: "George (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/george2.jpeg", label: "George (Male)" },
            { type: "video", src: "assets/Listings/HereComesTheSun/michele.mp4", label: "Michele (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/michele1.jpeg", label: "Michele (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/michele2.jpeg", label: "Michele (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/yoko1.jpeg", label: "Yoko (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/yoko2.jpeg", label: "Yoko (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/penny1.jpeg", label: "Penny (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/penny2.jpeg", label: "Penny (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" }
        ]
    },

    {
        id: "best-friends-2026",
        litterName: "Best Friends",
        status: "Available to Reserve",
        dob: "March 24, 2026",
        readyToGoDate: "May 20, 2026",
        mom: { name: "Jewels", breed: "Mini Phantom Poodle", weight: "12lbs" },
        dad: { name: "Sampson", breed: "King Charles Cavalier", weight: "16lbs" },
        breed: "Cavapoos",
        description: "Here is our second cavapoo litter! We're super excited about these Cavapoos. They have amazing personalities, with soft, wavy coats. Cavapoos are a mix of King Charles Cavalier and Poodle. They are known for their playful personalities and traditional teddy bear looks.",
        price: "$1400 + tax ($300 due at reservation)",
        puppies: [
            { name: "Albert", gender: "Male", status: "Available" },
            { name: "Patch", gender: "Male", status: "Available" },
            { name: "Rosemary", gender: "Female", status: "Available" },
            { name: "Pebbles", gender: "Female", status: "Reserved by Kathleen" },
            { name: "Chip", gender: "Male", status: "Available" },
            { name: "Danny", gender: "Male", status: "Available" }
        ],
        thumbnail: "assets/Listings/BestFriends/bestfriends-thumbnail.png",
        media: [
            { type: "image", src: "assets/Listings/BestFriends/groupimage.png", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/albert.mp4", label: "Albert (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/albert1.jpeg", label: "Albert (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/albert2.jpeg", label: "Albert (Male)" },
            { type: "video", src: "assets/Listings/BestFriends/chip.mp4", label: "Chip (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/chip1.jpeg", label: "Chip (Male)" },
            { type: "video", src: "assets/Listings/BestFriends/danny.mp4", label: "Danny (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/danny1.png", label: "Danny (Male)" },
            { type: "video", src: "assets/Listings/BestFriends/patch.mp4", label: "Patch (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/patch1.jpeg", label: "Patch (Male)" },
            { type: "video", src: "assets/Listings/BestFriends/pebbles.mp4", label: "Pebbles (Female)" },
            { type: "image", src: "assets/Listings/BestFriends/pebbles1.jpeg", label: "Pebbles (Female)" },
            { type: "image", src: "assets/Listings/BestFriends/pebbles2.jpeg", label: "Pebbles (Female)" },
            { type: "video", src: "assets/Listings/BestFriends/rose.mp4", label: "Rosemary (Female)" },
            { type: "image", src: "assets/Listings/BestFriends/rose1.jpeg", label: "Rosemary (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" },
            { date: "May 7, 2026", text: "Pebbles found her family with Kathleen!" }
        ]
    },

    {
        id: "ruby-reds-2026",
        litterName: "Ruby Reds",
        status: "Available to Reserve",
        dob: "March 28, 2026",
        readyToGoDate: "May 23, 2026",
        mom: { name: "Patience", breed: "Mini Poodle", weight: "12lbs" },
        dad: { name: "Max", breed: "Mini Poodle", weight: "12`lbs" },
        breed: "Mini Poodles",
        description: "Beautiful genetic tested parents show off these amazing ruby red babies! Extremely hard to find - negative fade gene. This bloodline has wonderful personalities, smart and loving. Your poodle will look at you with very endearing eyes. You will be the center of their world.<br><br><strong>⚠️ Rare Breed Notice: Inquire about breeding rights, selection is not guaranteed. Additional fee applies if approved.</strong>",
        price: "$2500 + tax ($300 due at reservation)",
        puppies: [
            { name: "Markie", gender: "Male", status: "Available" },
            { name: "Paddy", gender: "Female", status: "Available" },
            { name: "Bella", gender: "Female", status: "Available" }
        ],
        thumbnail: "assets/Listings/RubyReds/rubyreds-thumbnail.png",
        media: [
            { type: "video", src: "assets/Listings/RubyReds/groupvideo.mp4", label: "Ruby Reds Litter" },
            { type: "video", src: "assets/Listings/RubyReds/markie.mp4", label: "Markie (Male)" },
            { type: "image", src: "assets/Listings/RubyReds/markie1.jpeg", label: "Markie (Male)" },
            { type: "image", src: "assets/Listings/RubyReds/markie2.jpeg", label: "Markie (Male)" },
            { type: "video", src: "assets/Listings/RubyReds/paddy.mp4", label: "Paddy (Female)" },
            { type: "image", src: "assets/Listings/RubyReds/paddy1.jpeg", label: "Paddy (Female)" },
            { type: "image", src: "assets/Listings/RubyReds/paddy2.jpeg", label: "Paddy (Female)" },
            { type: "video", src: "assets/Listings/RubyReds/belle1.mp4", label: "Belle (Female)" },
            { type: "video", src: "assets/Listings/RubyReds/belle2.mp4", label: "Belle (Female)" },
            { type: "image", src: "assets/Listings/RubyReds/belle1.jpeg", label: "Belle (Female)" },
            { type: "image", src: "assets/Listings/RubyReds/belle2.jpeg", label: "Belle (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" }
        ]
    }
];



// ==========================================
// 🐶 ORCHARD PUPS - HAPPY TAILS
// ==========================================

const HAPPY_TAILS = [
    {
        id: "tail-1",
        familyName: "The Henderson Family",
        puppyName: "Oliver",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1200",
        message: "Oliver has been the perfect addition to our home. He's so gentle with the kids and was already so well-socialized when we brought him home. Thank you Orchard Pups for our best friend!"
    },
    {
        id: "tail-2",
        familyName: "Sarah & Mike",
        puppyName: "Luna",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200",
        message: "We couldn't be happier with Luna. She's incredibly smart and has such a sweet temperament. You can really tell how much love and care goes into every puppy here."
    },
    {
        id: "tail-3",
        familyName: "The Robertsons",
        puppyName: "Cooper",
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200",
        message: "Finding Orchard Pups was a blessing! Cooper is healthy, happy, and the light of our lives. The Rochester team was so helpful throughout the entire adoption process."
    }
];
