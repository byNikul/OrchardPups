// ==========================================
// ?? ORCHARD PUPS - LITTER DATA
// ==========================================

const LITTERS = [

    {
        id: "south-bark-2026",
        litterName: "South Bark",
        dob: "June 22, 2026",
        readyToGoDate: "August 19, 2026",
        mom: { name: "Aster", breed: "F1 Mini Goldendoodle", weight: "18lbs" },
        dad: { name: "Blazer", breed: "Mini Poodle", weight: "14lbs" },
        breed: "F1BB Mini Goldendoodle",
        description: "Are you ready to find your new best friend? Our adorable F1BB mini goldendoodle puppies from the \"South Bark\" litter are officially looking for their forever homes!<br><br>These little bundles of joy are the perfect mix of sweet and playful.<br><br><strong>Why Choose an F1BB Goldendoodle?</strong><br>Because they are a backcross (a Goldendoodle bred back to a Poodle), they are known for having a higher percentage of Poodle genetics. This typically results in:<br> <strong>Hypoallergenic Qualities:</strong> They are often the most allergy-friendly of the Goldendoodle generations.<br> <strong>Low-Shedding Coats:</strong> Their curly or wavy coats are wonderful for keeping fur off your furniture.<br> <strong>Intelligence & Trainability:</strong> They inherit the sharp, eager-to-please nature of the Poodle, making them a joy to train.<br><br>These precious pups are going to bring so much love to their new families. If you are interested in welcoming one of these sweet babies into your home, please contact us today to reserve yours!",
        price: "$950 discounted price + tax ($300 due at reservation)",
        puppies: [
            { name: "Kenny", gender: "Boy", status: "Found a home" },
            { name: "Eric", gender: "Boy", status: "Found a home" },
            { name: "Stan", gender: "Boy", status: "Available ($950 discounted price)" },
            { name: "Bebe", gender: "Girl", status: "Reserved by Tim and Amber" },
            { name: "Sharon", gender: "Girl", status: "Reserved by Zachary" },
            { name: "Wendy", gender: "Girl", status: "Reserved by Kathy" }
        ],
        thumbnail: "assets/Listings/SouthBark/southbark-thumbnail.png",
        media: [
            { type: "image", src: "assets/Listings/SouthBark/bebe1.png", label: "Bebe (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/bebe2.png", label: "Bebe (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/bebe3.png", label: "Bebe (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/eric1.png", label: "Eric (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/eric2.png", label: "Eric (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/eric3.png", label: "Eric (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny1.png", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny2.png", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny3.png", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/sharon1.png", label: "Sharon (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/sharon2.png", label: "Sharon (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/sharon3.png", label: "Sharon (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/southbark-thumbnail.png", label: "South Bark Litter" },
            { type: "video", src: "assets/Listings/SouthBark/southbark1.mp4", label: "South Bark Litter" },
            { type: "image", src: "assets/Listings/SouthBark/stan1.png", label: "Stan (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/stan2.png", label: "Stan (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/stan3.png", label: "Stan (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/wendy1.png", label: "Wendy (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/wendy2.png", label: "Wendy (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/wendy3.png", label: "Wendy (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/bebe4.png", label: "Bebe (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/bebe5.png", label: "Bebe (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny4.png", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny5.png", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/sharon4.png", label: "Sharon (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/sharon5.png", label: "Sharon (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/wendy5.png", label: "Wendy (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/wendy6.png", label: "Wendy (Girl)" },
            { type: "video", src: "assets/Listings/SouthBark/bebe1.mp4", label: "Bebe (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/bebe6.png", label: "Bebe (Girl)" },
            { type: "video", src: "assets/Listings/SouthBark/eric1.mp4", label: "Eric (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/eric4.png", label: "Eric (Boy)" },
            { type: "video", src: "assets/Listings/SouthBark/kenny1.mp4", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny6.png", label: "Kenny (Boy)" },
            { type: "video", src: "assets/Listings/SouthBark/sharon1.mp4", label: "Sharon (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/sharon6.png", label: "Sharon (Girl)" },
            { type: "video", src: "assets/Listings/SouthBark/stan1.mp4", label: "Stan (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/stan4.png", label: "Stan (Boy)" },
            { type: "video", src: "assets/Listings/SouthBark/wendy1.mp4", label: "Wendy (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/wendy7.png", label: "Wendy (Girl)" },
            { type: "video", src: "assets/Listings/SouthBark/bebe2.mp4", label: "Bebe (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/bebe7.png", label: "Bebe (Girl)" },
            { type: "video", src: "assets/Listings/SouthBark/eric2.mp4", label: "Eric (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/eric5.png", label: "Eric (Boy)" },
            { type: "video", src: "assets/Listings/SouthBark/kenny2.mp4", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny7.png", label: "Kenny (Boy)" },
            { type: "video", src: "assets/Listings/SouthBark/sharon2.mp4", label: "Sharon (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/sharon7.png", label: "Sharon (Girl)" },
            { type: "video", src: "assets/Listings/SouthBark/stan2.mp4", label: "Stan (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/stan5.png", label: "Stan (Boy)" },
            { type: "video", src: "assets/Listings/SouthBark/wendy2.mp4", label: "Wendy (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/wendy8.png", label: "Wendy (Girl)" },
            { type: "image", src: "assets/Listings/SouthBark/eric6.png", label: "Eric (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/eric7.png", label: "Eric (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny8.png", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny9.png", label: "Kenny (Boy)" },
            { type: "video", src: "assets/Listings/SouthBark/southbark2.mp4", label: "South Bark Litter" },
            { type: "video", src: "assets/Listings/SouthBark/southbark3.mp4", label: "South Bark Litter" },
            { type: "image", src: "assets/Listings/SouthBark/stan6.png", label: "Stan (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/stan7.png", label: "Stan (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/eric8.png", label: "Eric (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/ericandkenny1.png", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/ericstankenny1.png", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny10.png", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/kenny11.png", label: "Kenny (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/stan8.png", label: "Stan (Boy)" },
            { type: "video", src: "assets/Listings/SouthBark/southbark4.mp4", label: "South Bark Litter" },
            { type: "video", src: "assets/Listings/SouthBark/southbark5.mp4", label: "South Bark Litter" },
            { type: "video", src: "assets/Listings/SouthBark/southbark6.mp4", label: "South Bark Litter" },
            { type: "image", src: "assets/Listings/SouthBark/eric9.jpeg", label: "Eric (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/stan9.jpeg", label: "Stan (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/eric10.png", label: "Eric (Boy)" },
            { type: "image", src: "assets/Listings/SouthBark/stan10.png", label: "Stan (Boy)" },
            { type: "video", src: "assets/Listings/SouthBark/stan3.mp4", label: "Stan (Boy)" },
            { type: "video", src: "assets/Listings/SouthBark/stan4.mp4", label: "Stan (Boy)" }
        ],
        updates: [
            { date: "June 30, 2026", text: "Litter Available to Reserve!" },
            { date: "August 3, 2026", text: "Wendy is Reserved!" },
            { date: "August 10, 2026", text: "Bebe is Reserved!" },
            { date: "October 24, 2026", text: "Rabies shot done! Stan is available for a discounted price of $950." }
        ]
    },

    {
        id: "spooky-nights-2026",
        litterName: "Spooky Nights",
        dob: "August 28, 2026",
        readyToGoDate: "October 23, 2026",
        mom: { name: "Tulip", breed: "F1B Mini Goldendoodle", weight: "20lbs" },
        dad: { name: "Blaze", breed: "Mini Poodle", weight: "12lbs" },
        breed: "F1BB Mini Goldendoodle",
        description: "Meet the adorable Spooky Nights litter from Orchard Pups, born on August 28, 2026! These precious F1BB mini Goldendoodles are ready to steal your heart just in time for autumn.<br><br>With mom Tulip (an F1B mini Goldendoodle weighing 20 lbs) and dad Blaze (a mini poodle weighing 12 lbs), this carefully planned cross brings incredible generational health, predictable coats, and wonderful temperament benefits. F1BB backcrossing ensures these pups boast exceptionally allergy-friendly, low-shedding curly or wavy coats that are a dream to maintain.<br><br>Known for being fantastic family companions, these puppies blend the intelligence and eager-to-please nature of poodles with the supreme affection of Goldendoodles, making training an absolute breeze for owners of all experience levels.",
        price: "$2100 + tax ($300 due at reservation)",
        puppies: [
            { name: "Boo", gender: "Boy", status: "Reserved by Kristy" },
            { name: "Frankie", gender: "Boy", status: "Available" },
            { name: "Coraline", gender: "Girl", status: "Reserved by Christine" },
            { name: "Lucy", gender: "Girl", status: "Available" },
            { name: "Wednesday", gender: "Girl", status: "Available" },
            { name: "Mortishia", gender: "Girl", status: "Available" },
            { name: "Jack", gender: "Boy", status: "Found Family" }
        ],
        thumbnail: "assets/Listings/SpookyNights/theboys1.png",
        media: [
            { type: "image", src: "assets/Listings/SpookyNights/boo1.png", label: "Boo (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/coraline1.png", label: "Coraline (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/frankie1.png", label: "Frankie (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/lucy1.png", label: "Lucy (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/mortishia1.png", label: "Mortishia (Girl)" },
            { type: "video", src: "assets/Listings/SpookyNights/spookynights1.mp4", label: "Spooky Nights Litter" },
            { type: "video", src: "assets/Listings/SpookyNights/spookynights2.mp4", label: "Spooky Nights Litter" },
            { type: "image", src: "assets/Listings/SpookyNights/theboys1.png", label: "Spooky Nights Litter" },
            { type: "image", src: "assets/Listings/SpookyNights/thegirls1.png", label: "Spooky Nights Litter" },
            { type: "image", src: "assets/Listings/SpookyNights/wednesday1.png", label: "Wednesday (Girl)" },
            { type: "video", src: "assets/Listings/SpookyNights/boo1.mp4", label: "Boo (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/boo2.png", label: "Boo (Boy)" },
            { type: "video", src: "assets/Listings/SpookyNights/coraline1.mp4", label: "Coraline (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/coraline2.png", label: "Coraline (Girl)" },
            { type: "video", src: "assets/Listings/SpookyNights/frankie1.mp4", label: "Frankie (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/frankie2.png", label: "Frankie (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/image.png", label: "Spooky Nights Litter" },
            { type: "video", src: "assets/Listings/SpookyNights/jack1.mp4", label: "Spooky Nights Litter" },
            { type: "image", src: "assets/Listings/SpookyNights/jack1.png", label: "Spooky Nights Litter" },
            { type: "video", src: "assets/Listings/SpookyNights/lucy1.mp4", label: "Lucy (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/lucy2.png", label: "Lucy (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/mortishia2.png", label: "Mortishia (Girl)" },
            { type: "video", src: "assets/Listings/SpookyNights/mortishia3.mp4", label: "Mortishia (Girl)" },
            { type: "video", src: "assets/Listings/SpookyNights/wednesday1.mp4", label: "Wednesday (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/wednesday2.png", label: "Wednesday (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/boo3.png", label: "Boo (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/coraline3.png", label: "Coraline (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/frankie3.png", label: "Frankie (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/jack2.png", label: "Spooky Nights Litter" },
            { type: "image", src: "assets/Listings/SpookyNights/jack3.png", label: "Spooky Nights Litter" },
            { type: "image", src: "assets/Listings/SpookyNights/lucy3.png", label: "Lucy (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/mortishia4.png", label: "Mortishia (Girl)" },
            { type: "video", src: "assets/Listings/SpookyNights/theboys1.mp4", label: "Spooky Nights Litter" },
            { type: "image", src: "assets/Listings/SpookyNights/theboys2.png", label: "Spooky Nights Litter" },
            { type: "video", src: "assets/Listings/SpookyNights/thegirls1.mp4", label: "Spooky Nights Litter" },
            { type: "image", src: "assets/Listings/SpookyNights/wednesday3.png", label: "Wednesday (Girl)" },
            { type: "video", src: "assets/Listings/SpookyNights/boo2.mp4", label: "Boo (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/boo4.png", label: "Boo (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/boo5.png", label: "Boo (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/boo6.png", label: "Boo (Boy)" },
            { type: "video", src: "assets/Listings/SpookyNights/coraline2.mp4", label: "Coraline (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/coraline4.png", label: "Coraline (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/coraline5.png", label: "Coraline (Girl)" },
            { type: "video", src: "assets/Listings/SpookyNights/frankie2.mp4", label: "Frankie (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/frankie4.png", label: "Frankie (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/frankie5.png", label: "Frankie (Boy)" },
            { type: "video", src: "assets/Listings/SpookyNights/jack2.mp4", label: "Jack (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/jack4.png", label: "Jack (Boy)" },
            { type: "image", src: "assets/Listings/SpookyNights/jack5.png", label: "Jack (Boy)" },
            { type: "video", src: "assets/Listings/SpookyNights/lucy2.mp4", label: "Lucy (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/lucy4.png", label: "Lucy (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/lucy5.png", label: "Lucy (Girl)" },
            { type: "video", src: "assets/Listings/SpookyNights/mortishia1.mp4", label: "Mortishia (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/mortishia5.png", label: "Mortishia (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/mortishia6.png", label: "Mortishia (Girl)" },
            { type: "video", src: "assets/Listings/SpookyNights/wednesday2.mp4", label: "Wednesday (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/wednesday4.png", label: "Wednesday (Girl)" },
            { type: "image", src: "assets/Listings/SpookyNights/wednesday5.png", label: "Wednesday (Girl)" }
        ],
        updates: []
    },

    {
        id: "festival-of-lights-2026",
        litterName: "Festival of Lights",
        dob: "October 5, 2026",
        readyToGoDate: "December 5, 2026",
        mom: { name: "Jellybean", breed: "F1B Mini Goldendoodle", weight: "20lbs" },
        dad: { name: "Sparky", breed: "Mini Poodle", weight: "14lbs" },
        breed: "F1BB Mini Goldendoodle",
        description: "<strong>The Gentle Giant in a Smaller Package</strong><br><br>The Mini Goldendoodle is a remarkable breed, perfectly blending the friendly, intelligent nature of the Golden Retriever with the hypoallergenic, curly coat of the Poodle. Possessing a gentle, affectionate temperament, they are quick to learn and eager to please, making them an ideal companion for families, seniors, and first-time dog owners alike. While they require regular grooming to maintain their beautiful coats, their low-shedding qualities are a significant benefit for those with allergies. They have an inherent need for companionship and thrive on human interaction, making them truly devoted and loving family members.<br><br>Beyond their intelligence and sociability, Mini Goldendoodles possess an intuitive and sensitive nature, often attuning themselves to the emotions of their owners. This emotional intelligence, combined with their playful spirit and soft, cuddly appearance, makes them exceptional snuggle partners. Their moderate energy levels mean they are just as content enjoying a calm afternoon indoors as they are going for a brisk walk or playing a game of fetch in the park. They are adaptable to various living environments, from cozy apartments to spacious homes with yards.<br><br>We can arrange Delay pick up until 12/15/26",
        price: "$2200 + tax ($300 due at reservation)",
        puppies: [
            { name: "Holly", gender: "Girl", status: "Available" },
            { name: "Bella", gender: "Girl", status: "Available" },
            { name: "Clara", gender: "Girl", status: "Available" },
            { name: "Dolly", gender: "Girl", status: "Available" },
            { name: "Jack", gender: "Boy", status: "Available" },
            { name: "Gram", gender: "Boy", status: "Available" },
            { name: "Felix", gender: "Boy", status: "Available" }
        ],
        thumbnail: "assets/Listings/FestivalOfLights/jack1.png",
        media: [
            { type: "image", src: "assets/Listings/FestivalOfLights/bella1.png", label: "Bella (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/bella2.png", label: "Bella (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/clara1.png", label: "Clara (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/clara2.png", label: "Clara (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/dolly1.png", label: "Dolly (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/dolly2.png", label: "Dolly (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/felix1.png", label: "Felix (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/felix2.png", label: "Felix (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/gram1.png", label: "Gram (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/gram2.png", label: "Gram (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/holly1.png", label: "Holly (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/holly2.png", label: "Holly (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/jack1.png", label: "Jack (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/jack2.png", label: "Jack (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/bella3.png", label: "Bella (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/bella4.png", label: "Bella (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/clara3.png", label: "Clara (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/clara4.png", label: "Clara (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/dolly3.png", label: "Dolly (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/dolly4.png", label: "Dolly (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/felix3.png", label: "Felix (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/felix4.png", label: "Felix (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/gram3.png", label: "Gram (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/gram4.png", label: "Gram (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/holly3.png", label: "Holly (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/holly4.png", label: "Holly (Girl)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/jack3.png", label: "Jack (Boy)" },
            { type: "image", src: "assets/Listings/FestivalOfLights/jack4.png", label: "Jack (Boy)" }
        ],
        updates: []
    },

    {
        id: "best-friends-2026",
        litterName: "Best Friends",
        dob: "September 26, 2026",
        readyToGoDate: "November 21, 2026",
        mom: { name: "Flossie", breed: "Golden Retriever", weight: "48lbs" },
        dad: { name: "Sport", breed: "Mini Poodle", weight: "17lbs" },
        breed: "F1 Smaller Standard Goldendoodle",
        description: "<strong>🐾 The Best of Both Worlds: The \"Smaller Standard\" Goldendoodle</strong><br><br>Whether you call them Smaller Standards or Larger Minis, this newly popular size offers the ideal middle ground! You can look forward to the iconic Golden Retriever personality—sweet, laid-back, goofy, and endlessly lovable.<br><br><strong>What to Expect:</strong><br>🐾 <strong>Estimated Adult Weight:</strong> 32 to 38 lbs—a perfect, versatile size for any home.<br>🐾 <strong>Build & Coat:</strong> These puppies will feature adorable, fat and blocky builds paired with soft wavy-to-smooth coats.<br>🐾 <strong>Personality & Temperament:</strong> Goldendoodles are widely celebrated for their friendly, engaging personalities, beautifully blending the best traits of both parent breeds:<br>🐾 <strong>Affectionate & Social:</strong> Highly loving, loyal, and eager to thrive on human companionship. They get along wonderfully with children, strangers, and other pets.<br>🐾 <strong>Intelligent & Trainable:</strong> Combining two of the smartest dog breeds, these puppies learn quickly and are always eager to please during training.",
        price: "$1600 + tax ($300 due at reservation)",
        puppies: [
            { name: "Gracie", gender: "Girl", status: "Available" },
            { name: "Jenny", gender: "Girl", status: "Reserved by Hunter" },
            { name: "Darla", gender: "Girl", status: "Available" },
            { name: "Pebbles", gender: "Girl", status: "Available" },
            { name: "Peaches", gender: "Girl", status: "Available" },
            { name: "Alvin", gender: "Boy", status: "Found Forever Family" },
            { name: "Sammy", gender: "Boy", status: "Available" }
        ],
        thumbnail: "assets/Listings/BestFriends/thumbnail.png",
        media: [
            { type: "image", src: "assets/Listings/BestFriends/alvin1.png", label: "Alvin (Boy)" },
            { type: "image", src: "assets/Listings/BestFriends/alvin2.png", label: "Alvin (Boy)" },
            { type: "image", src: "assets/Listings/BestFriends/bestfriends_boys.png", label: "Best Friends Litter" },
            { type: "image", src: "assets/Listings/BestFriends/darla1.png", label: "Darla (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/darla2.png", label: "Darla (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/gracie1.png", label: "Gracie (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/gracie2.png", label: "Gracie (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/jenny1.png", label: "Jenny (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/jenny2.png", label: "Jenny (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/peaches1.png", label: "Peaches (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/peaches2.png", label: "Peaches (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/pebbles1.png", label: "Pebbles (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/pebbles2.png", label: "Pebbles (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/sammy1.png", label: "Sammy (Boy)" },
            { type: "image", src: "assets/Listings/BestFriends/sammy2.png", label: "Sammy (Boy)" },
            { type: "image", src: "assets/Listings/BestFriends/thumbnail.png", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/alvin1.mp4", label: "Alvin (Boy)" },
            { type: "image", src: "assets/Listings/BestFriends/alvin3.png", label: "Alvin (Boy)" },
            { type: "image", src: "assets/Listings/BestFriends/alvin4.png", label: "Alvin (Boy)" },
            { type: "image", src: "assets/Listings/BestFriends/alvin5.png", label: "Alvin (Boy)" },
            { type: "image", src: "assets/Listings/BestFriends/bestfriends1.png", label: "Best Friends Litter" },
            { type: "image", src: "assets/Listings/BestFriends/bestfriends2.png", label: "Best Friends Litter" },
            { type: "video", src: "assets/Listings/BestFriends/darla1.mp4", label: "Darla (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/darla3.png", label: "Darla (Girl)" },
            { type: "video", src: "assets/Listings/BestFriends/gracie1.mp4", label: "Gracie (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/gracie3.png", label: "Gracie (Girl)" },
            { type: "video", src: "assets/Listings/BestFriends/jenny1.mp4", label: "Jenny (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/jenny3.png", label: "Jenny (Girl)" },
            { type: "video", src: "assets/Listings/BestFriends/peaches1.mp4", label: "Peaches (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/peaches3.png", label: "Peaches (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/peaches4.png", label: "Peaches (Girl)" },
            { type: "video", src: "assets/Listings/BestFriends/pebbles1.mp4", label: "Pebbles (Girl)" },
            { type: "image", src: "assets/Listings/BestFriends/pebbles3.png", label: "Pebbles (Girl)" },
            { type: "video", src: "assets/Listings/BestFriends/sammy1.mp4", label: "Sammy (Boy)" },
            { type: "image", src: "assets/Listings/BestFriends/sammy3.png", label: "Sammy (Boy)" },
            { type: "image", src: "assets/Listings/BestFriends/sammyandalvin.png", label: "Alvin (Boy)" }
        ],
        updates: []
    },

    {
        id: "silent-night-2026",
        litterName: "Silent Night",
        dob: "October 17, 2026",
        readyToGoDate: "December 12, 2026",
        mom: { name: "Cinnamon", breed: "F1B Mini Goldendoodle", weight: "18lbs" },
        dad: { name: "Blazer", breed: "Mini Poodle", weight: "12lbs" },
        breed: "F1BB Mini Goldendoodle",
        description: "We are overjoyed to introduce our long-awaited Silent Night litter! Born on October 17, 2026, these precious little ones are already stealing our hearts. Raised with endless love, sweet cuddles, and hands-on attention, this litter is being nurtured to have the wonderful temperament, intelligence, and affectionate nature Goldendoodles are famous for.<br><br>Whether you are looking for a playful adventure buddy or a gentle lap snuggler, these smart and sweet puppies are sure to bring boundless joy into your home.<br><br>🐶 <strong>Parents & Genetics:</strong><br>• <strong>Mom:</strong> Cinnamon — F1B Mini Goldendoodle (18 lbs)<br>• <strong>Dad:</strong> Blazer — Mini Poodle (12 lbs)<br>• <strong>Generation:</strong> F1BB Mini Goldendoodles<br>• <strong>Estimated Adult Weight:</strong> Under 18 lbs — the perfect compact size!<br><br>✨ <strong>Coat & Look Highlights:</strong><br>• <strong>Coat Types:</strong> Beautiful wavy to curly coats that are super soft to the touch.<br>• <strong>Teddy Bear Look:</strong> Genetics show these puppies are positive for facial furnishings, meaning they are highly likely to display that irresistible, classic \"Teddy Bear\" coat with cute fluffy beards and eyebrows!<br>• <strong>Low-to-No Shedding:</strong> As F1BB Mini Goldendoodles, they inherit a higher percentage of Poodle traits, making their coats ideal for those looking for low-allergen and low-shedding companions.<br><br>📅 <strong>Important Dates:</strong><br>• <strong>Birth Date:</strong> October 17, 2026<br>• <strong>Ready for Forever Homes:</strong> ~December 12, 2026 (Just in time to celebrate the holiday season!)<br><br>💕 <strong>What to Expect:</strong><br>We love sharing the journey with our adoptive families! You can look forward to frequent updates, photos, and videos as they grow, open their eyes, take their first steps, and show off their unique little personalities.",
        price: "$2200 + tax ($300 due at reservation)",
        puppies: [
            { name: "Frosty", gender: "Boy", status: "reserved by Vanessa" },
            { name: "Holly", gender: "Girl", status: "Available" },
            { name: "Noel", gender: "Girl", status: "Available" },
            { name: "Star", gender: "Girl", status: "Available" },
            { name: "Virginia", gender: "Girl", status: "Available" },
            { name: "Elsa", gender: "Girl", status: "Available" }
        ],
        thumbnail: "assets/Listings/SilentNight/star1.png",
        media: [
            { type: "image", src: "assets/Listings/SilentNight/thumbnail.png", label: "Silent Night Litter" },
            { type: "image", src: "assets/Listings/SilentNight/frosty1.png", label: "Frosty (Boy)" },
            { type: "image", src: "assets/Listings/SilentNight/holly1.png", label: "Holly (Girl)" },
            { type: "image", src: "assets/Listings/SilentNight/holly2.png", label: "Holly (Girl)" },
            { type: "image", src: "assets/Listings/SilentNight/holly3.png", label: "Holly (Girl)" },
            { type: "image", src: "assets/Listings/SilentNight/noel1.png", label: "Noel (Girl)" },
            { type: "image", src: "assets/Listings/SilentNight/noel2.png", label: "Noel (Girl)" },
            { type: "image", src: "assets/Listings/SilentNight/star1.png", label: "Star (Girl)" },
            { type: "image", src: "assets/Listings/SilentNight/virginia1.png", label: "Virginia (Girl)" },
            { type: "image", src: "assets/Listings/SilentNight/virginia2.png", label: "Virginia (Girl)" },
            { type: "image", src: "assets/Listings/SilentNight/elsa1.png", label: "Elsa (Girl)" },
            { type: "image", src: "assets/Listings/SilentNight/elsa2.png", label: "Elsa (Girl)" },
            { type: "image", src: "assets/Listings/SilentNight/bella1.png", label: "Silent Night Litter" },
            { type: "image", src: "assets/Listings/SilentNight/bella2.png", label: "Silent Night Litter" },
            { type: "video", src: "assets/Listings/SilentNight/elsa1.mp4", label: "Elsa (Girl)" },
            { type: "video", src: "assets/Listings/SilentNight/frosty1.mp4", label: "Frosty (Boy)" },
            { type: "video", src: "assets/Listings/SilentNight/holly1.mp4", label: "Holly (Girl)" },
            { type: "video", src: "assets/Listings/SilentNight/noel1.mp4", label: "Noel (Girl)" },
            { type: "video", src: "assets/Listings/SilentNight/star1.mp4", label: "Star (Girl)" },
            { type: "video", src: "assets/Listings/SilentNight/virginia1.mp4", label: "Virginia (Girl)" }
        ],
        updates: [
            { date: "October 17, 2026", text: "Silent Night Litter has arrived!" },
            { date: "October 23, 2026", text: "Litter Available to Reserve!" }
        ]
    }
];

// ==========================================
// ?? ORCHARD PUPS - HAPPY TAILS
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
        message: "Here's picture of both of our Orchard Pups (the best doodles!!). You really do have the best pups! My sister has an orchard pup as well ??"
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
        message: "Daisy got spayed today.... She is 6 months and 42 lb. The vet asked us where we got her from. They said she is one of the calmest doodles they have ever seen. They could not stop talking about how sweet she is and such a good listener. ??"
    },

    {
        id: "tail-6",
        familyName: "A Happy Customer",
        puppyName: "Buster",
        image: "assets/HappyTails/buster.png",
        message: "First day of School! Buster misses his buddies ??"
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
        message: "She is now 8 months old and weighs 20 pounds. She is such a good dog and very well behaved... She has made my family's life so much better! She's a local celebrity in my neighborhood as well ??"
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


