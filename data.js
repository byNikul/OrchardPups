// ==========================================
// 🐶 ORCHARD PUPS - LITTER DATA
// ==========================================

const LITTERS = [
    {
        id: "toy-story-2026",
        litterName: "Toy Story",
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
            { name: "Lady Fern Ella", gender: "Female", status: "Found her forever family" },
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
            { date: "May 6, 2026", text: "Litter Available to Reserve!" },
            { date: "May 7, 2026", text: "Lady Fern Ella found her forever family with Melanie!" }
        ]
    },

    {
        id: "here-comes-the-sun-2026",
        litterName: "Here Comes The Sun",
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
    },

    {
        id: "schnoodle-love-2026",
        litterName: "Schnoodle Love",
        dob: "December 12, 2025",
        readyToGoDate: "February 6, 2026",
        mom: { name: "NA", breed: "Mini Poodle", weight: "13lbs" },
        dad: { name: "NA", breed: "Mini Schnauzer", weight: "17lbs" },
        breed: "F1 Schnoodle",
        description: "Beautiful, loving, and waiting for a family to love her, she has a 'Happy-Go-Lucky' vibe! The Schnoodle tends to inherit the Poodle's playful energy and the Schnauzer's spunky, stout-hearted nature. This results in a dog that loves to please and is highly trainable because they genuinely care about your approval. They are great with kids, sturdy enough for play but gentle enough to be reliable family companions. With their intelligence and a hint of wit, they are quick learners who might even try to 'negotiate' with you for a better treat!",
        price: "$550 + tax ($300 due at reservation)",
        puppies: [
            { name: "Maggie", gender: "Female", status: "Available" }
        ],
        thumbnail: "assets/Listings/SchnoodleLove/maggie1.jpeg",
        media: [
            { type: "video", src: "assets/Listings/SchnoodleLove/maggie.mp4", label: "Maggie (Female)" },
            { type: "image", src: "assets/Listings/SchnoodleLove/maggie1.jpeg", label: "Maggie (Female)" },
            { type: "image", src: "assets/Listings/SchnoodleLove/maggie2.jpeg", label: "Maggie (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" }
        ]
    },

    {
        id: "teddybear-schnoodles-2026",
        litterName: "Teddybear Schnoodles",
        dob: "February 8, 2026",
        readyToGoDate: "May 2, 2026",
        mom: { name: "NA", breed: "Poodle", weight: "8lbs" },
        dad: { name: "NA", breed: "Mini Schnauzer", weight: "13lbs" },
        breed: "F1 Schnoodle",
        description: "Check out our Teddybear Schnoodles! This litter is truly special, featuring charming round faces with that classic 'button-nose' look that stays puppy-like forever. These brothers boast unique, one-of-a-kind colors and rare coat patterns that make them stand out in any crowd. Personalities are built for companionship, as the Schnoodle is known as the 'Forever Happy' dog. They inherit the intelligence of the Poodle and the unwavering loyalty of the Schnauzer. Whether you are looking for a gardening partner who is nimble enough to stay by your side or a snuggle buddy for TV time and belly rubs, these boys are a perfect fit. They are currently growing, playing, and getting ready to meet their new families soon!",
        price: "$1400 + tax ($300 due at reservation)",
        puppies: [
            { name: "Baxter", gender: "Male", status: "Available" },
            { name: "Willie", gender: "Male", status: "Available" }
        ],
        thumbnail: "assets/Listings/TeddybearSchnoodles/teddybear-schnoodles-thumbnail.jpeg",
        media: [
            { type: "video", src: "assets/Listings/TeddybearSchnoodles/teddybear-schnoodles.mp4", label: "Litter Video" },
            { type: "image", src: "assets/Listings/TeddybearSchnoodles/baxter1.jpeg", label: "Baxter (Male)" },
            { type: "image", src: "assets/Listings/TeddybearSchnoodles/baxter2.jpeg", label: "Baxter (Male)" },
            { type: "image", src: "assets/Listings/TeddybearSchnoodles/willie1.jpeg", label: "Willie (Male)" },
            { type: "image", src: "assets/Listings/TeddybearSchnoodles/willie2.jpeg", label: "Willie (Male)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" }
        ]
    },

    {
        id: "i-m-yours-2026",
        litterName: "I'm Yours!",
        dob: "February 23, 2026",
        readyToGoDate: "May 2, 2026",
        mom: { name: "Maria", breed: "Cavapoo", weight: "15lbs" },
        dad: { name: "Max", breed: "Mini Poodle", weight: "10lbs" },
        breed: "F1B Cavapoo",
        description: "Julia is ready to be the ultimate companion. If you need an extra shadow she is up for the job. She would be a wonderful addition to your chair for watching TV. She enjoys running around the house, then crashing for a long nap. She has two speeds, silly or snuggling.",
        price: "$1500 + tax ($300 due at reservation)",
        puppies: [
            { name: "Julia", gender: "Female", status: "Available" }
        ],
        thumbnail: "assets/Listings/IMYours/julia5.jpeg",
        media: [
            { type: "video", src: "assets/Listings/IMYours/julia.mp4", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia1.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia2.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia3.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia4.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia5.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia6.jpeg", label: "Julia (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" }
        ]
    },

    {
        id: "mammas-boys-2026",
        litterName: "Mamma's Boys",
        dob: "April 26, 2026",
        readyToGoDate: "June 22, 2026",
        mom: { name: "Jenny", breed: "F1 Mini Goldendoodle", weight: "17lbs" },
        dad: { name: "Willie", breed: "Mini Poodle", weight: "14lbs" },
        breed: "F1B Mini Goldendoodle",
        description: "Sweet babies just born. They are thriving, gaining weight and have a peaceful nature. The boys are showing a loose wavy coat and in time will develop into a Teddybear look.",
        price: "$1500 + tax ($300 due at reservation)",
        puppies: [
            { name: "Texas", gender: "Male", status: "Available" },
            { name: "Tucker", gender: "Male", status: "Available" }

        ],
        thumbnail: "assets/Listings/MammasBoys/mammas-boys-thumbnail.png",
        media: [
            { type: "video", src: "assets/Listings/MammasBoys/mammas-boys.mp4", label: "Litter Video" },
            { type: "image", src: "assets/Listings/MammasBoys/texas1.jpeg", label: "Texas (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker1.jpeg", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker2.jpeg", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker3.jpeg", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker4.jpeg", label: "Tucker (Male)" }
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
