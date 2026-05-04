// ==========================================
// 🐶 ORCHARD PUPS - LITTER DATA
// ==========================================

const LITTERS = [
    {
        id: "spring-blossom-goldens-2026",
        litterName: "Spring Blossom Goldens",
        status: "Available to reserve",
        availability: "3/8",
        dob: "March 12, 2026",
        parents: "Daisy (English Cream) & Cooper (European Golden)",
        breed: "English Cream Golden Retriever",
        shortDescription: "A stunning litter of 8 English Cream Goldens, known for their calm temperament and beautiful light coats.",
        fullDescription: `
            <p>Daisy and Cooper have welcomed a beautiful litter of eight English Cream Golden Retriever puppies. This pairing was carefully selected for health, temperament, and the iconic "English Cream" look.</p>
            <h3>Temperament & Health</h3>
            <p>Daisy is our sweetest girl, known for her gentle nature around children. Cooper is a champion-line male with a blocky head and a heart of gold. Both parents have undergone full health screenings (OFA Hips, Elbows, Heart, and Eyes).</p>
            <h3>What's Included</h3>
            <ul>
                <li>AKC Registration (Limited)</li>
                <li>First round of vaccinations</li>
                <li>Deworming at 2, 4, 6, and 8 weeks</li>
                <li>Microchip included</li>
                <li>Puppy starter kit (food, toy with mom's scent, records)</li>
            </ul>
        `,
        thumbnail: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800",
        media: [
            { type: "image", src: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200", label: "Litter at 3 weeks old" },
            { type: "image", src: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&q=80&w=1200", label: "Daisy (Dam) with her puppies" },
            { type: "image", src: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=1200", label: "The curious one of the bunch" }
        ],
        updates: [
            { date: "April 20, 2026", text: "The puppies had their first outdoor exploration today! They loved the spring grass." },
            { date: "April 12, 2026", text: "First solid meals are being introduced. They are growing so fast!" },
            { date: "March 26, 2026", text: "Eyes are starting to open. Such a magical milestone." },
            { date: "March 12, 2026", text: "Daisy successfully delivered 8 healthy puppies (5 females, 3 males)!" }
        ]
    },
    {
        id: "may-mini-goldendoodles",
        litterName: "May Mini Goldendoodles",
        status: "Ready to go",
        availability: "2/6",
        dob: "January 15, 2026",
        parents: "Bella (F1 Goldendoodle) & Teddy (Mini Poodle)",
        breed: "Miniature Goldendoodle (F1b)",
        shortDescription: "Non-shedding, highly intelligent, and perfectly sized for families of all kinds.",
        fullDescription: `
            <p>Our Mini Goldendoodles are bred for intelligence and hypoallergenic qualities. This litter is F1b, meaning they are 75% Poodle and 25% Golden Retriever, which is the best generation for non-shedding coats.</p>
            <h3>Size & Expectations</h3>
            <p>We expect these puppies to mature between 20-30 lbs. They are currently being socialized using the Puppy Culture method to ensure they are well-adjusted to household noises and environments.</p>
        `,
        thumbnail: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
        media: [
            { type: "image", src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1200", label: "Group photo in the garden" },
            { type: "image", src: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=1200", label: "One of the males ready for his home" }
        ],
        updates: [
            { date: "May 1, 2026", text: "Only 2 puppies left in this litter! They are fully vaccinated and ready to meet their families." },
            { date: "April 15, 2026", text: "Puppies passed their vet checks with flying colors." }
        ]
    },
    {
        id: "winter-huskies-archive",
        litterName: "Winter Huskies",
        status: "Found families",
        availability: "0/6",
        dob: "November 30, 2025",
        parents: "Sky (Siberian) & Storm (Siberian)",
        breed: "Siberian Husky",
        shortDescription: "Our beautiful winter litter. All of these puppies have now found their forever homes.",
        fullDescription: `
            <p>This was a stunning litter of purebred Siberian Huskies. We are so happy to see them thriving with their new families across the North Country.</p>
        `,
        thumbnail: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=800",
        media: [
            { type: "image", src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1200", label: "First snow day" }
        ],
        updates: [
            { date: "February 10, 2026", text: "The last puppy has been picked up. Happy Tails to everyone!" }
        ]
    },
    {
        id: "summer-chocolate-labs",
        litterName: "Summer Chocolate Labs",
        status: "Available to reserve",
        availability: "8/8",
        dob: "Expecting June 2026",
        parents: "Coco (Chocolate Lab) & Bear (Chocolate Lab)",
        breed: "Chocolate Labrador Retriever",
        shortDescription: "Our highly anticipated summer litter of Chocolate Labs. Purebred, athletic, and loyal companions.",
        fullDescription: `
            <p>We are thrilled to announce that Coco and Bear are expecting! This litter will be perfect for active families who love the outdoors. Both parents are classic Chocolate Labradors with excellent temperaments.</p>
            <h3>Parent Highlights</h3>
            <p><strong>Coco (Dam):</strong> A medium-sized Chocolate Lab who loves swimming and fetching. She is incredibly intuitive and gentle.</p>
            <p><strong>Bear (Sire):</strong> A large, athletic male with a deep chocolate coat. He comes from a line of decorated field trial champions.</p>
        `,
        thumbnail: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&q=80&w=800",
        media: [
            { type: "image", src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&q=80&w=1200", label: "Coco, the beautiful expectant mother" },
            { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", label: "Training session with Bear (Sire)" }
        ],
        updates: [
            { date: "May 4, 2026", text: "Ultrasound confirmed! Coco is expecting a large litter. We can't wait for June!" },
            { date: "April 1, 2026", text: "Coco and Bear have successfully paired. Spring is in the air!" }
        ]
    }
];

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
