function loadContent(pageName) {
    var content = {
        'Home': 'Explore Our Space',
        'Earth': 'Information about Earth',
        'Sun': 'Information about Sun',
        'Jupiter': 'Information about Jupiter',
        'Saturn': 'Information about Saturn',
        'Uranus': 'Information about Uranus',
        'Neptune': 'Information about Neptune',
        'Mercury': 'Information about Mercury',
        'Venus': 'Information about Venus',
        'Mars': 'Information about Mars',
        'Pluto': 'Information about Pluto',
        'Satellites': 'Information about Satellites',
        'Astronomer': 'Information about Astronomers',
    };

    document.getElementById('heading').innerHTML = content[pageName];
}