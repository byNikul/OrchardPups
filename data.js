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
            { name: "Annie", gender: "Female", status: "Found her forever family with Kimberly" },
            { name: "Bo-Peep", gender: "Female", status: "Available" },
            { name: "Jessie", gender: "Female", status: "Available" }
        ],
        thumbnail: "assets/Listings/ToyStory/toystory-thumbnail.jpeg",
        media: [
            { type: "video", src: "assets/Listings/ToyStory/toystory1.mp4", label: "Toy Story Litter" },
            { type: "video", src: "assets/Listings/ToyStory/toystory2.mp4", label: "Toy Story Litter" },
            { type: "video", src: "assets/Listings/ToyStory/toystory3.mp4", label: "Toy Story Litter" },
            { type: "video", src: "assets/Listings/ToyStory/toystory4.mp4", label: "Toy Story Litter" },
            { type: "video", src: "assets/Listings/ToyStory/toystory5.mp4", label: "Toy Story Litter" },
            { type: "video", src: "assets/Listings/ToyStory/woody1.mp4", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody1.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody2.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody3.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody4.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody5.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody6.png", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody7.png", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/woody8.jpeg", label: "Woody (Male)" },
            { type: "image", src: "assets/Listings/ToyStory/annie1.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie2.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie3.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie4.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie5.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie6.jpeg", label: "Annie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/annie7.png", label: "Annie (Female)" },
            { type: "video", src: "assets/Listings/ToyStory/bo-peep1.mp4", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep1.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep2.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep3.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep4.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep5.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep6.jpeg", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep7.png", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep8.png", label: "Bo Peep (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/bo-peep9.jpeg", label: "Bo Peep (Female)" },
            { type: "video", src: "assets/Listings/ToyStory/jessie1.mp4", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie1.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie2.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie3.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie4.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie5.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie6.jpeg", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie7.png", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie8.png", label: "Jessie (Female)" },
            { type: "image", src: "assets/Listings/ToyStory/jessie9.jpeg", label: "Jessie (Female)" },
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" },
            { date: "May 16, 2026", text: "Annie has found her forever home with Kimberly" }
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
            { name: "Mr Dandy Lion", gender: "Male", status: "Found his forever family" },
            { name: "Momma Rose Bella", gender: "Female", status: "Found her forever family" },
            { name: "Queen Callie Ann", gender: "Female", status: "Found her forever family" }
        ],
        thumbnail: "assets/Listings/SpringBlooms/springblooms-thumbnail.jpeg",
        media: [
            { type: "video", src: "assets/Listings/SpringBlooms/springblooms1.mp4", label: "Spring Blooms Litter" },
            { type: "video", src: "assets/Listings/SpringBlooms/springblooms2.mp4", label: "Spring Blooms Litter" },
            { type: "video", src: "assets/Listings/SpringBlooms/springblooms3.mp4", label: "Spring Blooms Litter" },
            { type: "image", src: "assets/Listings/SpringBlooms/springblooms1.jpeg", label: "Spring Blooms Litter" },
            { type: "image", src: "assets/Listings/SpringBlooms/mommarosebella1.jpeg", label: "Momma Rose Bella (Female)" },
            { type: "image", src: "assets/Listings/SpringBlooms/mommarosebella2.jpeg", label: "Momma Rose Bella (Female)" },
            { type: "image", src: "assets/Listings/SpringBlooms/mrdandylion1.jpeg", label: "Mr Dandy Lion (Male)" },
            { type: "image", src: "assets/Listings/SpringBlooms/mrdandylion2.jpeg", label: "Mr Dandy Lion (Male)" },
            { type: "image", src: "assets/Listings/SpringBlooms/mrdandylion3.png", label: "Mr Dandy Lion (Male)" },
            { type: "image", src: "assets/Listings/SpringBlooms/queencallieann1.jpeg", label: "Queen Callie Ann (Female)" },
            { type: "image", src: "assets/Listings/SpringBlooms/queencallieann2.jpeg", label: "Queen Callie Ann (Female)" },
            { type: "image", src: "assets/Listings/SpringBlooms/queencallieann3.png", label: "Queen Callie Ann (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" },
            { date: "May 10, 2026", text: "Momma Rose Bella found her forever family with Jacob!" },
            { date: "June 1, 2026", text: "Mr Dandy Lion found his forever family!" },
            { date: "June 7, 2026", text: "Queen Callie Ann found her forever family!" }
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
            { type: "video", src: "assets/Listings/HereComesTheSun/herecomesthesun1.mp4", label: "Here Comes The Sun Litter" },
            { type: "video", src: "assets/Listings/HereComesTheSun/herecomesthesun2.mp4", label: "Here Comes The Sun Litter" },
            { type: "video", src: "assets/Listings/HereComesTheSun/herecomesthesun3.mp4", label: "Here Comes The Sun Litter" },
            { type: "video", src: "assets/Listings/HereComesTheSun/george.mp4", label: "George (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/george1.jpeg", label: "George (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/george2.jpeg", label: "George (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/george3.png", label: "George (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/george4.png", label: "George (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/george5.png", label: "George (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/george6.png", label: "George (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/john1.png", label: "John (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/john2.png", label: "John (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/john3.png", label: "John (Male)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/john4.png", label: "John (Male)" },
            { type: "video", src: "assets/Listings/HereComesTheSun/michele.mp4", label: "Michele (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/michele1.jpeg", label: "Michele (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/michele2.jpeg", label: "Michele (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/michele3.png", label: "Michele (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/michele4.png", label: "Michele (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/michele5.png", label: "Michele (Female)" },
            { type: "video", src: "assets/Listings/HereComesTheSun/yoko1.mp4", label: "Yoko (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/yoko1.jpeg", label: "Yoko (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/yoko2.jpeg", label: "Yoko (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/yoko3.png", label: "Yoko (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/yoko4.png", label: "Yoko (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/yoko5.png", label: "Yoko (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/penny1.jpeg", label: "Penny (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/penny2.jpeg", label: "Penny (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/penny3.png", label: "Penny (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/penny4.png", label: "Penny (Female)" },
            { type: "image", src: "assets/Listings/HereComesTheSun/penny5.png", label: "Penny (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" },
            { date: "June 10, 2026", text: "Penny has a small hernia, so we reduced the price of Penny. She's still be vet checked prior to going home!" }
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
            { name: "Rosemary", gender: "Female", status: "Found her forever family" },
            { name: "Pebbles", gender: "Female", status: "Reserved by Kathleen" },
            { name: "Chip", gender: "Male", status: "Available" },
            { name: "Danny", gender: "Male", status: "Available" }
        ],
        thumbnail: "assets/Listings/BestFriends/bestfriends-thumbnail.png",
        media: [
            { type: "image", src: "assets/Listings/BestFriends/bestfriends.png", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/bestfriends1.mp4", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/bestfriends2.mp4", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/bestfriends3.mp4", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/bestfriends4.mp4", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/bestfriends5.mp4", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/bestfriends6.mp4", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/bestfriends7.mp4", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/bestfriends8.mp4", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/albert.mp4", label: "Albert (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/albert1.jpeg", label: "Albert (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/albert2.jpeg", label: "Albert (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/albert3.png", label: "Albert (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/albert4.png", label: "Albert (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/albert5.png", label: "Albert (Male)" },
            { type: "video", src: "assets/Listings/BestFriends/chip.mp4", label: "Chip (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/chip1.jpeg", label: "Chip (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/chip2.png", label: "Chip (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/chip3.png", label: "Chip (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/chip4.png", label: "Chip (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/chip5.jpeg", label: "Chip (Male)" },
            { type: "video", src: "assets/Listings/BestFriends/danny.mp4", label: "Danny (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/danny1.png", label: "Danny (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/danny2.png", label: "Danny (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/danny3.png", label: "Danny (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/danny4.png", label: "Danny (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/danny5.jpeg", label: "Danny (Male)" },
            { type: "video", src: "assets/Listings/BestFriends/patch.mp4", label: "Patch (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/patch1.jpeg", label: "Patch (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/patch2.png", label: "Patch (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/patch3.png", label: "Patch (Male)" },
            { type: "image", src: "assets/Listings/BestFriends/patch4.png", label: "Patch (Male)" },
            { type: "video", src: "assets/Listings/BestFriends/pebbles.mp4", label: "Pebbles (Female)" },
            { type: "image", src: "assets/Listings/BestFriends/pebbles1.jpeg", label: "Pebbles (Female)" },
            { type: "image", src: "assets/Listings/BestFriends/pebbles2.jpeg", label: "Pebbles (Female)" },
            { type: "image", src: "assets/Listings/BestFriends/pebbles3.png", label: "Pebbles (Female)" },
            { type: "video", src: "assets/Listings/BestFriends/rose.mp4", label: "Rosemary (Female)" },
            { type: "image", src: "assets/Listings/BestFriends/rose1.jpeg", label: "Rosemary (Female)" },
            { type: "image", src: "assets/Listings/BestFriends/rose2.png", label: "Rosemary (Female)" },
            { type: "image", src: "assets/Listings/BestFriends/rose3.png", label: "Rosemary (Female)" },
            { type: "image", src: "assets/Listings/BestFriends/rose4.png", label: "Rosemary (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" },
            { date: "May 7, 2026", text: "Pebbles found her family with Kathleen!" },
            { date: "June 1, 2026", text: "Rosemary found her family!" }
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
            { name: "Paddy", gender: "Male", status: "Available" },
            { name: "Bella", gender: "Female", status: "Found her family!" }
        ],
        thumbnail: "assets/Listings/RubyReds/rubyreds-thumbnail.png",
        media: [
            { type: "video", src: "assets/Listings/RubyReds/rubyreds1.mp4", label: "Ruby Reds Litter" },
            { type: "video", src: "assets/Listings/RubyReds/rubyreds2.mp4", label: "Ruby Reds Litter (Markie and Paddy)" },
            { type: "video", src: "assets/Listings/RubyReds/markie.mp4", label: "Markie (Male)" },
            { type: "image", src: "assets/Listings/RubyReds/markie1.jpeg", label: "Markie (Male)" },
            { type: "image", src: "assets/Listings/RubyReds/markie2.jpeg", label: "Markie (Male)" },
            { type: "image", src: "assets/Listings/RubyReds/markie3.png", label: "Markie (Male)" },
            { type: "image", src: "assets/Listings/RubyReds/markie4.png", label: "Markie (Male)" },
            { type: "video", src: "assets/Listings/RubyReds/paddy.mp4", label: "Paddy (Male)" },
            { type: "image", src: "assets/Listings/RubyReds/paddy1.jpeg", label: "Paddy (Male)" },
            { type: "image", src: "assets/Listings/RubyReds/paddy2.jpeg", label: "Paddy (Male)" },
            { type: "image", src: "assets/Listings/RubyReds/paddy3.png", label: "Paddy (Male)" },
            { type: "image", src: "assets/Listings/RubyReds/paddy4.png", label: "Paddy (Male)" },
            { type: "video", src: "assets/Listings/RubyReds/belle1.mp4", label: "Belle (Female)" },
            { type: "video", src: "assets/Listings/RubyReds/belle2.mp4", label: "Belle (Female)" },
            { type: "image", src: "assets/Listings/RubyReds/belle1.jpeg", label: "Belle (Female)" },
            { type: "image", src: "assets/Listings/RubyReds/belle2.jpeg", label: "Belle (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" },
            { date: "May 16, 2026", text: "Bella found her family!" }
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
        description: "She is a very sweet gentle natured girl. Perfect as a first time pet and a great companion for a senior citizen. She is playful and enjoy snuggles. Beautiful, loving, and waiting for a family to love her, she has a 'Happy-Go-Lucky' vibe! The Schnoodle tends to inherit the Poodle's playful energy and the Schnauzer's spunky, stout-hearted nature. This results in a dog that loves to please and is highly trainable because they genuinely care about your approval. They are great with kids, sturdy enough for play but gentle enough to be reliable family companions. With their intelligence and a hint of wit, they are quick learners who might even try to 'negotiate' with you for a better treat!",
        price: "$500 + tax ($300 due at reservation)",
        puppies: [
            { name: "Maggie", gender: "Female", status: "Found Family!" }
        ],
        thumbnail: "assets/Listings/SchnoodleLove/maggie1.jpeg",
        media: [
            { type: "video", src: "assets/Listings/SchnoodleLove/maggie.mp4", label: "Maggie (Female)" },
            { type: "image", src: "assets/Listings/SchnoodleLove/maggie1.jpeg", label: "Maggie (Female)" },
            { type: "image", src: "assets/Listings/SchnoodleLove/maggie2.jpeg", label: "Maggie (Female)" },
            { type: "image", src: "assets/Listings/SchnoodleLove/maggie3.jpeg", label: "Maggie (Female)" },
            { type: "image", src: "assets/Listings/SchnoodleLove/maggie4.jpeg", label: "Maggie (Female)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" },
            { date: "May 13, 2026", text: "Maggie found her family!" }
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
            { name: "Willie", gender: "Male", status: "Found home with Jenna" }
        ],
        thumbnail: "assets/Listings/TeddybearSchnoodles/teddybear-schnoodles-thumbnail.jpeg",
        media: [
            { type: "video", src: "assets/Listings/TeddybearSchnoodles/teddybear-schnoodles.mp4", label: "Litter Video" },
            { type: "image", src: "assets/Listings/TeddybearSchnoodles/baxter1.jpeg", label: "Baxter (Male)" },
            { type: "image", src: "assets/Listings/TeddybearSchnoodles/baxter2.jpeg", label: "Baxter (Male)" },
            { type: "image", src: "assets/Listings/TeddybearSchnoodles/baxter3.jpeg", label: "Baxter (Male)" },
            { type: "image", src: "assets/Listings/TeddybearSchnoodles/willie1.jpeg", label: "Willie (Male)" },
            { type: "image", src: "assets/Listings/TeddybearSchnoodles/willie2.jpeg", label: "Willie (Male)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" },
            { date: "May 16, 2026", text: "Willie found his forever home with Jenna!" }
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
            { name: "Julia", gender: "Female", status: "Found her forever home!" }
        ],
        thumbnail: "assets/Listings/IMYours/julia5.jpeg",
        media: [
            { type: "video", src: "assets/Listings/IMYours/julia.mp4", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia1.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia2.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia3.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia4.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia5.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia6.jpeg", label: "Julia (Female)" },
            { type: "image", src: "assets/Listings/IMYours/julia7.png", label: "Julia (Female)" }
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
        thumbnail: "assets/Listings/MammasBoys/mammas-boys-thumbnail.jpeg",
        media: [
            { type: "video", src: "assets/Listings/MammasBoys/mammas-boys1.mp4", label: "Litter Video" },
            { type: "video", src: "assets/Listings/MammasBoys/mammas-boys2.mp4", label: "Litter Video" },
            { type: "video", src: "assets/Listings/MammasBoys/mammas-boys3.mp4", label: "Litter Video" },
            { type: "video", src: "assets/Listings/MammasBoys/tucker1.mp4", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/texas1.jpeg", label: "Texas (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/texas2.png", label: "Texas (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/texas3.png", label: "Texas (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/texas4.jpeg", label: "Texas (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/texas5.jpeg", label: "Texas (Male)" },
            { type: "video", src: "assets/Listings/MammasBoys/tucker1.mp4", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker1.jpeg", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker2.jpeg", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker3.jpeg", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker4.jpeg", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker5.png", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker6.png", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker7.jpeg", label: "Tucker (Male)" },
            { type: "image", src: "assets/Listings/MammasBoys/tucker8.jpeg", label: "Tucker (Male)" }
        ],
        updates: [
            { date: "May 6, 2026", text: "Litter Available to Reserve!" }
        ]
    },

    {
        id: "early-birds-2026",
        litterName: "Early Birds",
        dob: "May 4, 2026",
        readyToGoDate: "June 29, 2026",
        mom: { name: "Biscuit", breed: "F1 Mini Goldendoodle", weight: "16lbs" },
        dad: { name: "Blazer", breed: "Mini Poodle", weight: "12lbs" },
        breed: "F1BB Mini Goldendoodle",
        description: "These aren’t your typical doodles—they are the definition of extra fancy. As an F1BB generation, these puppies carry a higher percentage of Poodle lineage, ensuring those coveted, ultra-plush, loose Teddybear coats.They are currently in their earliest days, and we invite you to join us for the journey. Secure your newest family member now and enjoy beautiful, frequent updates as you watch your puppy grow from a tiny wonder into a stunning mini companion. Expect a soulful, endearing personality that melts into your arms the moment you hold them.",
        price: "$1800 + tax ($300 due at reservation)",
        puppies: [
            { name: "Mavis", gender: "Girl", status: "Available" },
            { name: "Dove", gender: "Girl", status: "Available" },
            { name: "Jay", gender: "Boy", status: "Available" }

        ],
        thumbnail: "assets/Listings/EarlyBirds/earlybirds-thumbnail.png",
        media: [
            { type: "video", src: "assets/Listings/EarlyBirds/earlybirds.mp4", label: "Litter Video" },
            { type: "image", src: "assets/Listings/EarlyBirds/earlybirds1.jpeg", label: "Litter" },
            { type: "video", src: "assets/Listings/EarlyBirds/mavis1.mp4", label: "Mavis (Girl)" },
            { type: "image", src: "assets/Listings/EarlyBirds/mavis1.png", label: "Mavis (Girl)" },
            { type: "image", src: "assets/Listings/EarlyBirds/mavis2.png", label: "Mavis (Girl)" },
            { type: "image", src: "assets/Listings/EarlyBirds/mavis3.png", label: "Mavis (Girl)" },
            { type: "video", src: "assets/Listings/EarlyBirds/dove1.mp4", label: "Dove (Girl)" },
            { type: "video", src: "assets/Listings/EarlyBirds/dove2.mp4", label: "Dove (Girl)" },
            { type: "image", src: "assets/Listings/EarlyBirds/dove1.png", label: "Dove (Girl)" },
            { type: "image", src: "assets/Listings/EarlyBirds/dove2.jpeg", label: "Dove (Girl)" },
            { type: "image", src: "assets/Listings/EarlyBirds/dove3.png", label: "Dove (Girl)" },
            { type: "image", src: "assets/Listings/EarlyBirds/dove4.png", label: "Dove (Girl)" },
            { type: "video", src: "assets/Listings/EarlyBirds/jay1.mp4", label: "Jay (Boy)" },
            { type: "video", src: "assets/Listings/EarlyBirds/jay2.mp4", label: "Jay (Boy)" },
            { type: "image", src: "assets/Listings/EarlyBirds/jay1.png", label: "Jay (Boy)" },
            { type: "image", src: "assets/Listings/EarlyBirds/jay2.jpeg", label: "Jay (Boy)" },
            { type: "image", src: "assets/Listings/EarlyBirds/jay3.png", label: "Jay (Boy)" },
            { type: "image", src: "assets/Listings/EarlyBirds/jay4.png", label: "Jay (Boy)" }
        ],
        updates: [
            { date: "May 15, 2026", text: "Litter Available to Reserve!" }
        ]
    },

    {
        id: "summer-brezzy-2026",
        litterName: "Summer Brezzy",
        dob: "May 10, 2026",
        readyToGoDate: "July 7, 2026",
        mom: { name: "April Showers", breed: "F1 Standard Goldendoodle", weight: "60lbs" },
        dad: { name: "Milo", breed: "Standard Poodle", weight: "50lbs" },
        breed: "F1B Standard Goldendoodles",
        description: "F1B Standard Goldendoodles make absolutely phenomenal family pets, effortlessly blending the goofy, affectionate heart of a Golden Retriever with the stellar intelligence and low-shedding qualities of a Poodle. Because they are a backcross (75% Poodle and 25% Golden Retriever), they are an excellent, allergy-friendly option for households sensitive to pet dander. These puppies grow into gentle giants that are famously patient with children, eager to please, and highly trainable, making them a seamless addition to a busy household. Whether they are joining you for an outdoor weekend adventure or happily curling up for a movie night, their adaptable, loving nature ensures they will quickly become the loyal, furry centerpiece of your family.",
        price: "$2100 + tax ($300 due at reservation)",
        puppies: [
            { name: "Daisy", gender: "Girl", status: "Reserved by Jamie" },
            { name: "Belle", gender: "Girl", status: "Available" },
            { name: "Willow", gender: "Girl", status: "Available" },
            { name: "Sam", gender: "Boy", status: "Available" },
            { name: "Fonzie", gender: "Boy", status: "Available" },
            { name: "Georgie", gender: "Boy", status: "Available" }

        ],
        thumbnail: "assets/Listings/SummerBrezzy/summerbrezzy-thumbnail.png",
        media: [
            { type: "image", src: "assets/Listings/SummerBrezzy/summerbrezzy1.png", label: "Girls (Daisy, Belle, Willow)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/summerbrezzy2.png", label: "Boys (Sam, Fonzie, Georgie)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/belle1.png", label: "Belle (Girl)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/belle2.png", label: "Belle (Girl)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/sam1.png", label: "Sam (Boy)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/georgie1.png", label: "Georgie (Boy)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/georgie2.png", label: "Georgie (Boy)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/fonzie1.png", label: "Fonzie (Boy)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/fonzie2.png", label: "Fonzie (Boy)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/willow1.png", label: "Willow (Girl)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/willow2.png", label: "Willow (Girl)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/daisy1.png", label: "Daisy (Girl)" },
            { type: "image", src: "assets/Listings/SummerBrezzy/daisy2.png", label: "Daisy (Girl)" },

        ],
        updates: [
            { date: "May 16, 2026", text: "Litter Available to Reserve!" },
            { date: "May 23, 2026", text: "Daisy Found forever home with Jamie" }
        ]
    }
];



// ==========================================
// 🐶 ORCHARD PUPS - HAPPY TAILS
// ==========================================

const HAPPY_TAILS = [
    {
        id: "tail-1",
        familyName: "A Happy Customer",
        puppyName: "Chloe",
        image: "assets/HappyTails/chloe.jpeg",
        message: "I just wanted to tell you that she is the best, sweetest, smartest, most affectionate dog. We lover her so much!"
    },

    {
        id: "tail-2",
        familyName: "A Happy Customer",
        puppyName: "Maisy",
        image: "assets/HappyTails/maisy.jpeg",
        message: "Maisy passed her CGC and Therapy Dog tests....She is so amazing and has so much love to give to community!"
    },

    {
        id: "tail-3",
        familyName: "A Happy Customer",
        puppyName: "Tater",
        image: "assets/HappyTails/tater.jpeg",
        message: "Here's picture of both of our Orchard Pups (the best doodles!!). You really do have the best pups! My sister has an orchard pup as well 🥰"
    },

    {
        id: "tail-4",
        familyName: "A Happy Customer",
        puppyName: "--",
        image: "assets/HappyTails/1.jpeg",
        message: "She barely barks :) she is amazing! We really have the best dog in the world"
    },

    {
        id: "tail-5",
        familyName: "A Happy Customer",
        puppyName: "Daisy",
        image: "assets/HappyTails/daisy.jpeg",
        message: "Daisy got spayed today.... She is 6 months and 42 lb. The vet asked us where we got her from. They said she is one of the calmest doodles they have ever seen. They could not stop talking about how sweet she is and such a good listener. ❤️"
    },

    {
        id: "tail-6",
        familyName: "A Happy Customer",
        puppyName: "Buster",
        image: "assets/HappyTails/buster.png",
        message: "First day of School! Buster misses his buddies 🚌"
    },

    {
        id: "tail-7",
        familyName: "A Happy Customer",
        puppyName: "Scooter (aka Bugs)",
        image: "assets/HappyTails/scooter-aka-bugs.png",
        message: "I've been meaning to write to tell you how grateful we all are that you matched us up with our sweet boy... We are in love and we thank you!"
    },

    {
        id: "tail-8",
        familyName: "A Happy Customer",
        puppyName: "Bella",
        image: "assets/HappyTails/bella.png",
        message: "So pleased with our new bundle of joy! Bella has brought many smiles to our faces! Thank You...!"
    },

    {
        id: "tail-9",
        familyName: "A Happy Customer",
        puppyName: "Hazel (aka Jewel)",
        image: "assets/HappyTails/hazel-aka-jewel.png",
        message: "She is now 8 months old and weighs 20 pounds. She is such a good dog and very well behaved... She has made my family's life so much better! She's a local celebrity in my neighborhood as well 😊"
    },

    {
        id: "tail-10",
        familyName: "A Happy Customer",
        puppyName: "Bailey",
        image: "assets/HappyTails/bailey.png",
        message: "I don't know why we waited 21 years to get a dog. Thanks Orchard Pups for finding a great dog for us."
    },

    {
        id: "tail-11",
        familyName: "A Happy Customer",
        puppyName: "Luis",
        image: "assets/HappyTails/luis.png",
        message: "I can't say enough great things about your pups. Everyone wants a Luis because he's soo happy and friendly."
    },

    {
        id: "tail-12",
        familyName: "A Happy Customer",
        puppyName: "Luna (aka Frenchie)",
        image: "assets/HappyTails/luna-aka-frenchie.jpeg",
        message: "Our minds are blown! She is so smart! Loves being outside and watching birds. We are so thankful! The timing was perfect! I'm so glad we found Orchard Pups!!"
    },

    {
        id: "tail-13",
        familyName: "Sarah",
        puppyName: "Marcy",
        image: "assets/HappyTails/marcy.jpeg",
        message: "She makes is easy!! She really is the best girl."
    },

    {
        id: "tail-14",
        familyName: "A Happy Family",
        puppyName: "Luffy",
        image: "assets/HappyTails/luffy.png",
        message: "My son is a diabetic. He had a severe seizure and our standard Goldendoodle Luffy...signaled. He has had no training, prior to this event...He has now had alert training and is a certified seizure alert dog...Unfortunately my son had a large seizure and Luffy alerted and we were able to get him to the hospital. Luffy stayed by his side...and alerted before the machines did...Luffy is our perfect pup , we love him so much ."
    }
];
