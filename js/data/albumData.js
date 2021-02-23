const albumData = [
    {
        imgLink: 'img1.jpg',
        titles: ['mixing', 'producing', 'singing', 'something else'],
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        description: ' Ex architecto iusto, cumque quidem aut magni exercitationem laudantium vero obcaecati soluta, molestiae excepturi autem atque, natus dicta tempora? Libero distinctio delectus repudiandae nobis itaque inventore architecto aut! Quia, odio?',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: true,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",
    },
    {
        imgLink: 'img2.jpg',
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        titles: ['mixing', 'producing', 'singing', 'picking monsters'],
        description: ' Ex architecto iusto, cumque quidem aut magni exercitationem laudantium vero obcaecati soluta, molestiae excepturi autem atque, natus dicta tempora? Libero distinctio delectus repudiandae nobis itaque inventore architecto aut! Quia, odio?',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: true,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",
    },

    {
        imgLink: 'img1.jpg',
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        titles: ['mixing', 'producing', 'singing'],
        description: ' Ex architecto iusto, cumque quidem aut magni exercitationem laudantium vero obcaecati soluta, molestiae excepturi autem atque, natus dicta tempora? Libero distinctio delectus repudiandae nobis itaque inventore architecto aut! Quia, odio?',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: false,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",
    },

    {
        imgLink: 'img4.jpg',
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        titles: ['mixing', 'producing', 'singing'],
        description: ' Ex architecto iusto, cumque quidem aut magni exercitationem laudantium vero obcaecati soluta, molestiae excepturi autem atque, natus dicta tempora? Libero distinctio delectus repudiandae nobis itaque inventore architecto aut! Quia, odio?',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: true,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",

    },

    {
        imgLink: 'img3.jpg',
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        titles: ['mixing', 'producing', 'singing'],
        description: ' Ex architecto iusto, cumque quidem aut magni exercitationem laudantium vero obcaecati soluta, molestiae excepturi autem atque, natus dicta tempora? Libero distinctio delectus repudiandae nobis itaque inventore architecto aut! Quia, odio?',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: false,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",
    },

    {
        imgLink: 'img1.jpg',
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        titles: ['mixing', 'producing', 'singing'],
        description: ' Ex architecto iusto, cumque quidem aut magni exercitationem laudantium vero obcaecati soluta, molestiae excepturi autem atque, natus dicta tempora? Libero distinctio delectus repudiandae nobis itaque inventore architecto aut! Quia, odio?',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: false,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",
    },
    {
        imgLink: 'img1.jpg',
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        titles: ['mixing', 'producing', 'singing'],
        description: 'Libero distinctio delectus repudiandae nobis itaque inventore architecto aut! Quia, odio?',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: false,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",
    },

    {
        imgLink: 'img3.jpg',
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        titles: ['mixing', 'producing', 'singing'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, explicabo placeat! Reprehenderit voluptate ratione praesentium quibusdam dignissimos??',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: true,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",
    },
    {
        imgLink: 'img2.jpg',
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        titles: ['mixing', 'producing', 'singing'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, explicabo placeat! Reprehenderit voluptate ratione praesentium quibusdam dignissimos?  Libero distinctio delectus repudiandae nobis itaque inventore architecto aut! Quia, odio?',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: false,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",
    }
    ,
    {
        imgLink: 'img2.jpg',
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        titles: ['mixing', 'producing', 'singing'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, explicabo placeat! Reprehenderit voluptate ratione praesentium quibusdam dignissimos?  Libero distinctio delectus repudiandae nobis itaque inventore architecto aut! Quia, odio?',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: false,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",
    }
    ,
    {
        imgLink: 'img2.jpg',
        date: '12/12/2020',
        name: 'An Album of Very Nice Songs',
        titles: ['mixing', 'producing', 'singing'],
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, explicabo placeat! Reprehenderit voluptate ratione praesentium quibusdam dignissimos?  Libero distinctio delectus repudiandae nobis itaque inventore architecto aut! Quia, odio?',
        spotifyLink: 'src="https://open.spotify.com/embed/track/50yIjigJPcVQQxrHHeai4H" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"',
        isInHeroSection: false,
        p: "Were you married to her? ' ' Yes, of course I was, that's why it's so embarrassing to forget ... I think it was Varya ... or was it Manya? . . . no, Varya, that's it ...she wore a striped dress, worked at the museum. . . .No good, can't remember. So, she used to say, she had gone out that morning carrying those yellow flowers for me to find her at last and that if it hadn't happened she would have committed suicide because her life was empty.",
    }
]

export { albumData }