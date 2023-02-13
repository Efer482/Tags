var list = [{
    word: 'loneliness'
},
{
    word: 'loveless',
}, {
    word: 'melancholy'
}, {
    word: 'promises'
}, {
    word: 'Crushed'
}, {
    word: 'Solitary'
}, {
    word: 'Miserable'
}, {
    word: 'Bleak'
}, {
    word: 'Weeping'
}, {
    word: 'Mourning'
}, {
    word: 'Agony'
}, {
    word: 'Wounded'
}, {
    word: 'Somber'
}, {
    word: 'Sorrow'
}, {
    word: 'Pain',
    sizeDisains: 1
}, {
    word: 'Misery'
}, {
    word: 'Suffering',
    sizeDisains: 1
}, {
    word: 'Woe'
},
{
    word: 'Sorrow'
},
]
var usedWords = [];

function getRandomWords(list, numWords) {
    var selectedWords = [];
    while (selectedWords.length < numWords) {
        var randomIndex = Math.floor(Math.random() * list.length);
        var selectedWord = list[randomIndex].word;
        if (!selectedWords.includes(selectedWord)) {
            selectedWords.push(selectedWord);
        }
    }
    return selectedWords;
}
window.onload = function () {
    var selectedWords = getRandomWords(list, 15);
    console.log(selectedWords)
    var h1 = document.createElement("h1");
    h1.innerHTML = selectedWords.join(", ");

    trends.embed.renderExploreWidget("TIMESERIES",
        {
            "comparisonItem": [
                { "keyword": selectedWords[0], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[1], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[2], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[3], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[4], "geo": "", "time": "today 12-m" },

            ], "category": 0, "property": ""
        },
        { "exploreQuery": "q=heartbroken,loneliness,loveless,melancholy,promises&date=today 12-m,today 12-m,today 12-m,today 12-m,today 12-m", "guestPath": "https://trends.google.es:443/trends/embed/" }
    );
    trends.embed.renderExploreWidget("TIMESERIES",
        {
            "comparisonItem": [
                { "keyword": selectedWords[5], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[6], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[7], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[8], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[9], "geo": "", "time": "today 12-m" },

            ], "category": 0, "property": ""
        },
        { "exploreQuery": "q=heartbroken,loneliness,loveless,melancholy,promises&date=today 12-m,today 12-m,today 12-m,today 12-m,today 12-m", "guestPath": "https://trends.google.es:443/trends/embed/" }
    );
    trends.embed.renderExploreWidget("TIMESERIES",
        {
            "comparisonItem": [
                { "keyword": selectedWords[10], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[11], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[12], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[13], "geo": "", "time": "today 12-m" },
                { "keyword": selectedWords[14], "geo": "", "time": "today 12-m" },

            ], "category": 0, "property": ""
        },
        { "exploreQuery": "q=heartbroken,loneliness,loveless,melancholy,promises&date=today 12-m,today 12-m,today 12-m,today 12-m,today 12-m", "guestPath": "https://trends.google.es:443/trends/embed/" }
    );

    document.body.appendChild(h1);
}

