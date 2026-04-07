const stainData = {
    title: "How are stain levels assessed?",
    desc: "Our technician evaluates each stain during the visit and assigns a care level based on type and severity.",

    levels: [
        {
            title: "Level 1",
            subtitle: "Light Soiling",
            items: [
                "Everyday dust and dirt",
                "Light foot traffic marks"
            ]
        },
        {
            title: "Level 2",
            subtitle: "Moderate Staining",
            items: [
                "Visible spots and spills",
                "Mild pet odor"
            ]
        },
        {
            title: "Level 3",
            subtitle: "Heavy Staining",
            items: [
                "Deep pet or human urine",
                "Food or beverage penetration",
                "Noticeable discoloration"
            ]
        },
        {
            title: "Level 4",
            subtitle: "Severe Contamination",
            items: [
                "Strong, persistent odor",
                "Heavy saturation",
                "Blood, vomit, or other biological matter"
            ]
        }
    ],

    footer: "Stain level assessed during visit. Additional costs may apply."
};


const furnitureItems = {
    title: "What counts as a furniture item?",
    desc: '',
    items: [
        { type: "Sofa", countsAs: "1 item" },
        { type: "Loveseat", countsAs: "1 item" },
        { type: "Recliner", countsAs: "1 item" },
        { type: "Accent Chair", countsAs: "1 item" },
        { type: "Ottoman", countsAs: "1 item" },
        { type: "Sectional up to 6 seats", countsAs: "1 item" },
        { type: "Sectional 7+ seats", countsAs: "2 items" },
        { type: "Dining Chairs (up to 8)", countsAs: "1 item" }
    ],
    footer: "Not sure? Your initial assessment will confirm coverage."
};